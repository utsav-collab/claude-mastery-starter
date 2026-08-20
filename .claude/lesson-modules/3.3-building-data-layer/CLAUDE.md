# Lesson 3.3: Connecting a Database

Time to give your app a MEMORY! 🧠

Right now, any data you enter disappears when you refresh. That's because there's no database — no long-term memory.

Let's fix that.

STOP: Ready to make your data persist?

USER: Yes!

---

## Why a Database?

**Analogy: The Memory of Your App**

Without database:
- User logs in → closes browser → everything forgotten
- Fills form → refreshes page → gone
- It's like your app has **amnesia**

With database:
- Everything is REMEMBERED
- User comes back → data is still there
- It's the **long-term memory** of your app

STOP: Your app needs memory. Let's give it one.

USER: Makes sense

---

## Choose Your Database

You have two great options:

```
┌─────────────────────────────────────────────────┐
│  SUPABASE vs CONVEX                             │
│                                                 │
│  SUPABASE (PostgreSQL)                          │
│  ✅ Visual table editor (like a spreadsheet)    │
│  ✅ SQL — a transferable skill                  │
│  ✅ Built-in auth (can skip Clerk)              │
│  ✅ Easier to debug and understand              │
│  Best for: Beginners, traditional apps          │
│                                                 │
│  CONVEX (TypeScript-native)                     │
│  ✅ Real-time by default                        │
│  ✅ TypeScript end-to-end                       │
│  ✅ Automatic caching                           │
│  ✅ Great DX for React                          │
│  Best for: Real-time apps, chat, dashboards     │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Ask yourself:**
- Are you comfortable with SQL? → **Supabase**
- Prefer just TypeScript? → **Convex**
- Need real-time updates? → **Convex**
- Want visual table editing? → **Supabase**

STOP: Which one feels right for your project? (Supabase is great for beginners!)

USER: Tells you their choice

---

## Option A: Supabase Setup

If you chose Supabase, follow these steps:

### Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Sign up with GitHub
3. Create a new project
4. Wait for it to initialize (~1 minute)

STOP: Project created? Great!

USER: Done

---

### Step 2: Install Supabase Client

ACTION: Run this command:

```bash
npm install @supabase/supabase-js
```

STOP: Installed!

USER: Done

---

### Step 3: Get Your Keys

In Supabase Dashboard → Settings → API

Copy:
- **Project URL** (looks like `https://xxxxx.supabase.co`)
- **Anon Key** (the long public key)

ACTION: Add to your `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

STOP: Keys added to .env.local?

USER: Done

---

### Step 4: Create Supabase Client

ACTION: Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Now you can import `supabase` anywhere in your app!

STOP: Client created! Now let's create a table.

USER: Done

---

### Step 5: Create Your First Table

In Supabase Dashboard → Table Editor → New Table

**Example: Items table**
- Name: `items`
- Columns:
  - `id` (uuid, primary key) — auto-created
  - `title` (text)
  - `user_id` (text)
  - `created_at` (timestamptz, default: now())

Or use SQL Editor:

```sql
CREATE TABLE items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  user_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

STOP: Table created! You now have a database!

USER: Done

---

## Option B: Convex Setup

If you chose Convex, follow these steps:

### Step 1: Install & Initialize Convex

ACTION: Run these commands:

```bash
npm install convex
npx convex dev
```

This will:
1. Ask you to log in to Convex
2. Create a new project
3. Start the Convex dev server

**Important:** Keep `npx convex dev` running in a separate terminal!

STOP: Convex running? You should see "✔ Connected to your deployment"

USER: Yes!

---

### Step 2: Create Schema

ACTION: Create `convex/schema.ts`:

```typescript
import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  items: defineTable({
    title: v.string(),
    userId: v.string(),
  }).index('by_user', ['userId']),
})
```

This defines an `items` table with `title` and `userId` columns.

STOP: Schema created!

USER: Done

---

### Step 3: Create Functions

ACTION: Create `convex/items.ts`:

```typescript
import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

// Get all items
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query('items').collect()
  },
})

// Create a new item
export const create = mutation({
  args: { title: v.string(), userId: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('items', {
      title: args.title,
      userId: args.userId,
    })
  },
})
```

STOP: Functions created! You can now read and write data.

USER: Done

---

## Test Your Database

Let's make sure it works!

### For Supabase:

```typescript
// In a component
import { supabase } from '@/lib/supabase'

// Fetch items
const { data: items } = await supabase
  .from('items')
  .select('*')

// Insert an item
await supabase
  .from('items')
  .insert({ title: 'My first item', user_id: 'user_123' })
```

### For Convex:

```typescript
// In a component
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

// Fetch items (auto-updates!)
const items = useQuery(api.items.list)

// Insert an item
const createItem = useMutation(api.items.create)
await createItem({ title: 'My first item', userId: 'user_123' })
```

STOP: Try inserting an item and refreshing the page. Does it persist? 🎉

USER: Yes! / It works!

---

## Module 3.3 Complete! 🎉

**You've accomplished:**
- ✅ Chose your database (Supabase or Convex)
- ✅ Set up the client/connection
- ✅ Created your first table/schema
- ✅ Tested that data persists!

**Your app now has:**
- Long-term memory (database)
- User authentication (Clerk)
- Real data persistence

**Key insight:**
> "A database is just organized long-term memory. Supabase gives you a visual spreadsheet. Convex gives you TypeScript everywhere. Both work great — pick what feels comfortable."

---

**Next Step:** Type `/start-3-4` to build your UI with the Frontend Lead!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Help them choose Supabase or Convex
- Walk through the chosen setup
- Create table/schema
- Test data persistence

**Teaching style:**
- The "memory" analogy is powerful
- Let THEM choose the database
- Celebrate when data persists!

**Success criteria:**
- [ ] Database chosen
- [ ] Client/connection set up
- [ ] Table/schema created
- [ ] Data persists after refresh
- [ ] Student is ready for 3.4

---

*Part of the Claude Code Masterclass — Barcelona 2026*
