# Backend Patterns & Architecture

Patterns for building robust, scalable backends. Used by the Backend Lead agent.

---

## Database Schema Patterns

### User Management

```typescript
// Convex schema
users: defineTable({
  // Auth provider ID (Clerk, Auth.js, etc.)
  clerkId: v.string(),

  // Basic info
  email: v.string(),
  name: v.optional(v.string()),
  avatarUrl: v.optional(v.string()),

  // App-specific
  plan: v.optional(v.union(v.literal("free"), v.literal("pro"), v.literal("enterprise"))),
  onboardingCompleted: v.optional(v.boolean()),

  // Timestamps
  createdAt: v.number(),
  updatedAt: v.number(),
})
.index("by_clerk_id", ["clerkId"])
.index("by_email", ["email"])
```

```sql
-- Supabase/Postgres
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_clerk_id ON users(clerk_id);
```

---

### Multi-Tenant Pattern

```typescript
// Every table references organization
organizations: defineTable({
  name: v.string(),
  slug: v.string(),
  ownerId: v.id("users"),
  plan: v.string(),
})
.index("by_slug", ["slug"])
.index("by_owner", ["ownerId"]),

// All data belongs to an org
projects: defineTable({
  orgId: v.id("organizations"),  // ALWAYS include this
  name: v.string(),
  // ...other fields
})
.index("by_org", ["orgId"]),
```

---

### Soft Delete Pattern

```typescript
// Never actually delete - mark as deleted
items: defineTable({
  title: v.string(),
  // ...fields
  deletedAt: v.optional(v.number()),  // null = active, timestamp = deleted
})
.index("by_deleted", ["deletedAt"]),

// Query active items only
export const list = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("items")
      .filter((q) => q.eq(q.field("deletedAt"), undefined))
      .collect();
  },
});
```

---

## API Design Patterns

### RESTful Endpoints

```typescript
// app/api/[resource]/route.ts pattern
// GET /api/projects - List all
// POST /api/projects - Create new
// GET /api/projects/[id] - Get one
// PATCH /api/projects/[id] - Update
// DELETE /api/projects/[id] - Delete

// Example: app/api/projects/route.ts
export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const projects = await db.query.projects.findMany({
    where: eq(projects.userId, user.id),
    orderBy: desc(projects.createdAt),
  });

  return Response.json(projects);
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const validated = projectSchema.parse(body);

  const project = await db.insert(projects).values({
    ...validated,
    userId: user.id,
  }).returning();

  return Response.json(project[0], { status: 201 });
}
```

---

### Server Actions Pattern (Next.js 14+)

```typescript
// actions/projects.ts
"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const title = formData.get("title") as string;

  // Validate
  if (!title || title.length < 3) {
    return { error: "Title must be at least 3 characters" };
  }

  // Create
  const project = await db.insert(projects).values({
    title,
    userId,
  }).returning();

  // Revalidate cache
  revalidatePath("/projects");

  return { success: true, project: project[0] };
}
```

---

### Convex Mutations & Queries

```typescript
// convex/projects.ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Type-safe query
export const list = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    return await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .order("desc")
      .collect();
  },
});

// Type-safe mutation
export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    return await ctx.db.insert("projects", {
      ...args,
      userId: identity.subject,
      createdAt: Date.now(),
    });
  },
});
```

---

## Security Patterns

### Input Validation

```typescript
// Use Zod for all input validation
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(1000).optional(),
  status: z.enum(["draft", "active", "archived"]).default("draft"),
  tags: z.array(z.string()).max(10).optional(),
});

// Use in API route
const body = await req.json();
const result = projectSchema.safeParse(body);
if (!result.success) {
  return Response.json(
    { error: result.error.flatten() },
    { status: 400 }
  );
}
```

### Authorization Checks

```typescript
// Always check ownership
async function getProject(projectId: string, userId: string) {
  const project = await db.query.projects.findFirst({
    where: and(
      eq(projects.id, projectId),
      eq(projects.userId, userId)  // CRITICAL: Check ownership
    ),
  });

  if (!project) {
    throw new Error("Project not found");  // Don't leak existence
  }

  return project;
}
```

### Rate Limiting

```typescript
// Simple in-memory rate limit (use Redis in production)
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return new Response("Too Many Requests", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
      },
    });
  }

  // ... handle request
}
```

---

## Error Handling

### Consistent Error Responses

```typescript
// lib/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

export class UnauthorizedError extends AppError {
  constructor() {
    super("Unauthorized", 401, "UNAUTHORIZED");
  }
}

// Error handler wrapper
export function withErrorHandler(handler: Function) {
  return async (req: Request, context: any) => {
    try {
      return await handler(req, context);
    } catch (error) {
      if (error instanceof AppError) {
        return Response.json(
          { error: error.message, code: error.code },
          { status: error.statusCode }
        );
      }
      console.error(error);
      return Response.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  };
}
```

---

## Data Fetching Patterns

### Optimistic Updates

```typescript
// Using TanStack Query
const createProject = useMutation({
  mutationFn: async (newProject) => {
    const res = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(newProject),
    });
    return res.json();
  },
  onMutate: async (newProject) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ["projects"] });

    // Snapshot previous value
    const previous = queryClient.getQueryData(["projects"]);

    // Optimistically update
    queryClient.setQueryData(["projects"], (old: any) => [
      { ...newProject, id: "temp-id" },
      ...old,
    ]);

    return { previous };
  },
  onError: (err, newProject, context) => {
    // Rollback on error
    queryClient.setQueryData(["projects"], context?.previous);
  },
  onSettled: () => {
    // Always refetch after
    queryClient.invalidateQueries({ queryKey: ["projects"] });
  },
});
```

### Pagination Pattern

```typescript
// Cursor-based pagination (better for real-time)
export const list = query({
  args: {
    cursor: v.optional(v.id("projects")),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { cursor, limit = 20 }) => {
    let query = ctx.db
      .query("projects")
      .order("desc");

    if (cursor) {
      const cursorDoc = await ctx.db.get(cursor);
      if (cursorDoc) {
        query = query.filter((q) =>
          q.lt(q.field("_creationTime"), cursorDoc._creationTime)
        );
      }
    }

    const items = await query.take(limit + 1);
    const hasMore = items.length > limit;

    return {
      items: items.slice(0, limit),
      nextCursor: hasMore ? items[limit - 1]._id : null,
    };
  },
});
```

---

## File Upload Pattern

```typescript
// Using Convex file storage
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveFile = mutation({
  args: {
    storageId: v.id("_storage"),
    projectId: v.id("projects"),
  },
  handler: async (ctx, { storageId, projectId }) => {
    const url = await ctx.storage.getUrl(storageId);

    await ctx.db.patch(projectId, {
      fileUrl: url,
      fileId: storageId,
    });
  },
});

// Client usage
const uploadFile = async (file: File) => {
  const uploadUrl = await generateUploadUrl();

  const result = await fetch(uploadUrl, {
    method: "POST",
    body: file,
    headers: { "Content-Type": file.type },
  });

  const { storageId } = await result.json();
  await saveFile({ storageId, projectId });
};
```

---

## Webhook Pattern

```typescript
// app/api/webhooks/stripe/route.ts
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response("Webhook signature verification failed", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      await handleCheckoutComplete(session);
      break;
    case "customer.subscription.deleted":
      const subscription = event.data.object;
      await handleSubscriptionCanceled(subscription);
      break;
  }

  return new Response("OK", { status: 200 });
}
```

---

*Part of the Claude Code Masterclass — Barcelona 2026*
