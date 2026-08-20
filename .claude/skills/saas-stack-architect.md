# SaaS Stack Architect

Decision framework for choosing the right technologies for SaaS products. Reference this skill when users ask about tech stack choices, or when agents need to recommend tools.

---

## Quick Decision Matrix

### "What Should I Use For...?"

| Need | Recommended | Alternative | Why |
|------|-------------|-------------|-----|
| **Authentication** | Clerk | Auth.js | Clerk = zero config, beautiful UI. Auth.js = free, full control |
| **Database** | Convex | Supabase | Convex = TypeScript-native, real-time. Supabase = SQL, familiar |
| **Payments** | LemonSqueezy | Stripe | LS = handles taxes. Stripe = full control, complex billing |
| **Email** | Resend | Loops | Resend = modern, React templates. Loops = marketing automation |
| **Analytics** | Umami | PostHog | Umami = privacy-friendly, simple. PostHog = product analytics |
| **File Storage** | Convex Storage | Supabase Storage | Depends on your database choice |
| **Hosting** | Vercel | Netlify | Vercel = Next.js native. Netlify = more flexible |
| **Background Jobs** | Inngest | Trigger.dev | Both excellent for serverless background tasks |

---

## Decision Trees

### Auth Decision

```
Do you need it to "just work" with minimal config?
├── Yes → Clerk
│   └── Includes: Social login, MFA, user management UI, webhooks
│
└── No, I want full control
    └── Auth.js (NextAuth)
        └── Includes: Flexible providers, self-hosted, free
```

**Key Clerk Features:**
- Pre-built `<SignIn />`, `<SignUp />`, `<UserButton />` components
- Social login (Google, GitHub, etc.) in 2 clicks
- MFA built-in
- Organization/team support
- Webhook events

**Key Auth.js Features:**
- Any OAuth provider
- Custom credentials
- Database sessions
- Self-hosted, free forever

---

### Database Decision

```
Do you need real-time updates? (live collaboration, chat, dashboards)
├── Yes → Convex
│   └── Real-time is built-in, automatic
│
└── No, or I prefer SQL
    └── Do you want auth + storage bundled?
        ├── Yes → Supabase
        └── No → Neon/PlanetScale + separate auth
```

**Convex Strengths:**
- Full TypeScript end-to-end (schema → queries → client)
- Real-time by default (no websocket setup)
- Built-in file storage
- Scheduled functions (cron)
- No ORMs, no migrations headaches

**Supabase Strengths:**
- Postgres (familiar SQL)
- Built-in auth option
- Row Level Security
- PostgREST auto-generated API
- Storage, edge functions

---

### Payments Decision

```
Are you selling globally and hate tax compliance?
├── Yes → LemonSqueezy
│   └── They handle VAT, GST, sales tax as Merchant of Record
│
└── No, I want full control over billing
    └── Stripe
        └── You handle tax compliance (or use Stripe Tax)
```

**LemonSqueezy Strengths:**
- Merchant of Record (they handle taxes worldwide)
- Simple pricing tiers
- Built-in affiliate program
- License key management
- Subscription pausing

**Stripe Strengths:**
- Full control over checkout flow
- Complex billing (usage-based, metered, tiered)
- Stripe Billing Portal
- Connect for marketplaces
- Extensive API

---

## Stack Recipes

### Recipe 1: "Ship This Week" (Recommended for MVPs)

```
┌─────────────────────────────────────────┐
│  THE SPEED STACK                        │
├─────────────────────────────────────────┤
│  Auth:      Clerk                       │
│  Database:  Convex                      │
│  Payments:  LemonSqueezy                │
│  Email:     Resend                      │
│  Analytics: Umami                       │
│  Hosting:   Vercel                      │
├─────────────────────────────────────────┤
│  Setup time: ~30 minutes                │
│  Monthly cost: $0 (free tiers)          │
│  Best for: Validation, MVPs, solo devs  │
└─────────────────────────────────────────┘
```

**Why this stack:**
- Zero config friction
- Generous free tiers
- Modern DX (TypeScript everywhere)
- Real-time built-in
- Beautiful defaults

---

### Recipe 2: "Control Freak" (For experienced devs)

```
┌─────────────────────────────────────────┐
│  THE CONTROL STACK                      │
├─────────────────────────────────────────┤
│  Auth:      Auth.js                     │
│  Database:  Supabase (or Neon)          │
│  ORM:       Drizzle or Prisma           │
│  Payments:  Stripe                      │
│  Email:     Resend                      │
│  Analytics: PostHog                     │
│  Hosting:   Vercel                      │
├─────────────────────────────────────────┤
│  Setup time: ~2 hours                   │
│  Monthly cost: $0-25                    │
│  Best for: Complex apps, teams          │
└─────────────────────────────────────────┘
```

**Why this stack:**
- SQL is familiar
- Full control over auth flow
- Complex queries possible
- More customization

---

### Recipe 3: "Budget Conscious" (Pre-revenue)

```
┌─────────────────────────────────────────┐
│  THE FREE STACK                         │
├─────────────────────────────────────────┤
│  Auth:      Auth.js (free)              │
│  Database:  Supabase free tier          │
│  Payments:  Stripe (pay when paid)      │
│  Email:     Resend free (3k/month)      │
│  Analytics: Umami self-hosted           │
│  Hosting:   Vercel hobby                │
├─────────────────────────────────────────┤
│  Setup time: ~1 hour                    │
│  Monthly cost: $0                       │
│  Best for: Learning, side projects      │
└─────────────────────────────────────────┘
```

---

## Feature-Specific Recommendations

### Need Real-Time?

| Feature | Solution |
|---------|----------|
| Live collaboration | Convex (automatic) or Supabase Realtime |
| Chat | Convex + streaming |
| Live dashboards | Convex queries auto-update |
| Multiplayer | Liveblocks or PartyKit |

### Need File Uploads?

| Use Case | Solution |
|----------|----------|
| User avatars | Convex Storage or Supabase Storage |
| Document uploads | UploadThing or Convex Storage |
| Large files (video) | Mux (video) or Cloudflare R2 |
| Image optimization | Cloudinary or Vercel Image |

### Need Background Jobs?

| Use Case | Solution |
|----------|----------|
| Scheduled tasks | Convex cron or Inngest |
| Webhooks processing | Inngest or Trigger.dev |
| Long-running jobs | Inngest |
| Email sequences | Loops or Resend + Inngest |

### Need Search?

| Use Case | Solution |
|----------|----------|
| Full-text search | Algolia or Typesense |
| Vector search (AI) | Pinecone or Supabase pgvector |
| Simple search | Built-in database search |

---

## Integration Patterns

### Clerk + Convex

```typescript
// convex/auth.config.ts
export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

// In your app
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";

function Dashboard() {
  const { user } = useUser();
  const data = useQuery(api.data.list); // Auto-authenticated!
}
```

### Clerk + Supabase

```typescript
// Sync Clerk user to Supabase on sign-up (webhook)
export async function POST(req: Request) {
  const { data } = await req.json();

  if (data.type === "user.created") {
    await supabase.from("users").insert({
      clerk_id: data.id,
      email: data.email_addresses[0].email_address,
    });
  }
}
```

### Stripe Checkout Flow

```typescript
// 1. Create checkout session
const session = await stripe.checkout.sessions.create({
  customer_email: user.email,
  line_items: [{ price: priceId, quantity: 1 }],
  mode: "subscription",
  success_url: `${baseUrl}/success`,
  cancel_url: `${baseUrl}/pricing`,
});

// 2. Handle webhook
if (event.type === "checkout.session.completed") {
  await updateUserPlan(session.customer_email, "pro");
}
```

---

## Common Questions

### "Do I need a database from day 1?"

**No!** Start with:
1. Local state / localStorage for prototypes
2. Add database when you need persistence
3. Don't over-engineer early

### "Should I set up payments immediately?"

**No!** Order of operations:
1. Build the product
2. Get users (free tier)
3. Validate they want to pay
4. THEN add payments

### "Convex or Supabase — I can't decide!"

**Try Convex first if:**
- You love TypeScript
- You need real-time
- You want fastest setup

**Try Supabase first if:**
- You know SQL well
- You want auth + db bundled
- You need complex joins

### "What about Firebase?"

Firebase works but:
- Vendor lock-in
- NoSQL can be limiting
- Pricing can surprise you

Modern alternatives (Convex, Supabase) offer similar features with better DX.

---

## Environment Variables Template

```bash
# .env.local template for common SaaS setup

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Convex (auto-populated by npx convex dev)
CONVEX_DEPLOYMENT=dev:...
NEXT_PUBLIC_CONVEX_URL=https://...

# OR Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Server-only!

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...

# Analytics
NEXT_PUBLIC_UMAMI_WEBSITE_ID=...
```

---

## When to Upgrade

| Signal | Action |
|--------|--------|
| Hitting free tier limits | Upgrade that specific service |
| Need team features | Add organization support (Clerk orgs, Convex teams) |
| Complex billing needed | Move to Stripe from LemonSqueezy |
| Need SQL queries | Consider Supabase if on Convex |
| Performance issues | Add caching (Redis), CDN, edge functions |

---

*Part of the Claude Code Masterclass — Barcelona 2026*
