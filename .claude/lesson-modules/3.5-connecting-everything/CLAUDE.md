# Lesson 3.5: Connecting UI to Data

The moment of truth! 🔌

You have:
- ✅ Authentication (Clerk)
- ✅ Database (Supabase/Convex)
- ✅ Beautiful UI component

Now let's CONNECT them. This is where your app becomes REAL.

STOP: Ready to make it all work together?

USER: Yes!

---

## The Connection Pattern

Here's how data flows in your app:

```
┌─────────────────────────────────────────────────┐
│  DATA FLOW                                      │
│                                                 │
│  User Action (click, type)                      │
│       ↓                                         │
│  Component calls mutation/insert                │
│       ↓                                         │
│  Data saved to database                         │
│       ↓                                         │
│  Query auto-updates (or manual refetch)         │
│       ↓                                         │
│  UI re-renders with new data                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**The magic:** When data changes, UI updates automatically!

STOP: This is the loop that makes apps feel alive.

USER: Got it

---

## Get the Current User

First, let's get the logged-in user's ID:

### With Clerk:

```typescript
import { useUser } from '@clerk/nextjs'

function MyComponent() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return <div>Loading...</div>
  if (!user) return <div>Please sign in</div>

  const userId = user.id
  // Now use userId for database queries!
}
```

STOP: We need the user ID to scope data. Add this to your component!

USER: Done

---

## Fetch Data from Database

### Option A: Supabase

```typescript
import { supabase } from '@/lib/supabase'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

function ItemList() {
  const { user } = useUser()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    async function fetchItems() {
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (data) setItems(data)
      setLoading(false)
    }

    fetchItems()
  }, [user])

  if (loading) return <div>Loading...</div>

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
```

### Option B: Convex

```typescript
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'

function ItemList() {
  const { user } = useUser()
  const items = useQuery(
    api.items.listByUser,
    user ? { userId: user.id } : 'skip'
  )

  if (items === undefined) return <div>Loading...</div>

  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>{item.title}</li>
      ))}
    </ul>
  )
}
```

**Convex bonus:** Data updates in real-time automatically! No refresh needed.

STOP: Add data fetching to your component. Does it load your data?

USER: Yes! / I see my data!

---

## Save Data to Database

Now let's add the ability to CREATE items:

### Option A: Supabase

```typescript
async function addItem(title: string) {
  const { error } = await supabase
    .from('items')
    .insert({
      title,
      user_id: user.id,
    })

  if (!error) {
    // Refresh the list
    fetchItems()
  }
}
```

### Option B: Convex

```typescript
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

const createItem = useMutation(api.items.create)

async function addItem(title: string) {
  await createItem({
    title,
    userId: user.id,
  })
  // No manual refresh needed — Convex auto-updates!
}
```

STOP: Add a form to create new items. Test it!

USER: It works!

---

## The Complete Pattern

Here's what your component should look like now:

```typescript
function MyFeature() {
  // 1. Get user
  const { user, isLoaded } = useUser()

  // 2. Fetch data
  const [items, setItems] = useState([])
  useEffect(() => {
    if (user) fetchItems()
  }, [user])

  // 3. Handle actions
  async function handleAdd(title: string) {
    await supabase.from('items').insert({ title, user_id: user.id })
    fetchItems() // Refresh
  }

  async function handleDelete(id: string) {
    await supabase.from('items').delete().eq('id', id)
    fetchItems() // Refresh
  }

  // 4. Render with states
  if (!isLoaded) return <Loading />
  if (!user) return <SignInPrompt />
  if (loading) return <Loading />
  if (items.length === 0) return <EmptyState onAdd={handleAdd} />

  return <ItemList items={items} onDelete={handleDelete} />
}
```

STOP: This is the pattern for EVERY CRUD feature you'll build!

USER: I understand the pattern

---

## Test the Full Flow

Let's verify everything works:

**Test Checklist:**
- [ ] Sign in → See your data
- [ ] Add an item → Appears in list
- [ ] Refresh page → Data persists!
- [ ] Sign out → Data hidden
- [ ] Sign in as different user → See THEIR data (not yours)

STOP: Run through this checklist. Does everything work?

USER: Yes! / All working!

---

## 🎉 The Magic Moment

**Refresh the page.**

Your data is STILL THERE! 🎉

This is what separates a demo from a real product:
- Data persists across sessions
- Data is scoped to each user
- UI updates when data changes

**You just built a real, functional app feature!**

STOP: How does it feel to have persistent data?

USER: Amazing! / So satisfying!

---

## Module 3.5 Complete! 🎉

**You've accomplished:**
- ✅ Connected user auth to database queries
- ✅ Fetched data scoped to current user
- ✅ Added create/delete functionality
- ✅ Data persists across page refreshes
- ✅ Built a complete CRUD feature!

**Your app now:**
- Has real user accounts
- Stores data in a real database
- Shows each user their own data
- Persists across sessions

**Key insight:**
> "The connection pattern is always the same: get user → fetch their data → handle actions → update UI. Master this pattern and you can build anything."

---

**Next Step:** Type `/start-3-6` to learn the professional workflow with `/work-on`!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Connect auth to database
- Implement data fetching
- Add create/delete actions
- Test the full flow
- Celebrate persistent data!

**Teaching style:**
- Show both Supabase and Convex options
- The "refresh still works" moment is powerful
- Celebrate the working feature!

**Success criteria:**
- [ ] User ID passed to queries
- [ ] Data fetches correctly
- [ ] Create works
- [ ] Delete works
- [ ] Data persists after refresh
- [ ] Student is ready for 3.6

---

*Part of the Claude Code Masterclass — Barcelona 2026*
