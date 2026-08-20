---
name: ai-code-antipatterns
description: Common anti-patterns in AI-generated React/Next.js code and how to fix them. Based on 2025-2026 research into vibe coding problems.
---

# AI Code Anti-Patterns — What AI Gets Wrong

## The "Vibe Coding Hangover"

AI can ship features 8x faster, but without review, it creates 8x the technical debt.
The code "works for now" but is held together by duct tape and hallucinations.

**Your job: Catch these patterns and fix them.**

---

## 🔴 Critical Anti-Pattern #1: useEffect for Everything

AI loves putting EVERYTHING in useEffect. This is almost always wrong.

### ❌ BAD: Computed Values in useEffect

```typescript
// AI ANTI-PATTERN: Using useEffect for computed values
const [filteredItems, setFilteredItems] = useState([]);

useEffect(() => {
  setFilteredItems(items.filter(item => item.active));
}, [items]);
```

### ✅ FIX: Just compute during render

```typescript
// CORRECT: Derive during render (no state needed!)
const filteredItems = items.filter(item => item.active);
```

### ❌ BAD: Data Fetching in useEffect

```typescript
// AI ANTI-PATTERN: Client-side data fetching
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    });
}, []);
```

### ✅ FIX: Use Server Components or React Query

```typescript
// CORRECT (Next.js 15): Server Component
async function DataPage() {
  const data = await fetch('https://api.example.com/data');
  return <DataDisplay data={data} />;
}

// CORRECT: React Query for client needs
const { data, isLoading } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
});
```

---

## 🔴 Critical Anti-Pattern #2: Too Many useState

If a component has 5+ useState hooks, something is wrong.

### ❌ BAD: State explosion

```typescript
// AI ANTI-PATTERN: One useState per field
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(false);
```

### ✅ FIX: Use useReducer or React Hook Form

```typescript
// CORRECT: For forms, use React Hook Form
const { register, handleSubmit, formState } = useForm();

// CORRECT: For complex state, use useReducer
const [state, dispatch] = useReducer(formReducer, initialState);
```

---

## 🔴 Critical Anti-Pattern #3: Infinite Loops

AI often creates dependency array bugs that cause infinite re-renders.

### ❌ BAD: Object in dependency array

```typescript
// AI ANTI-PATTERN: Object reference changes every render
useEffect(() => {
  doSomething(options);
}, [options]); // If options = { limit: 10 }, this runs forever!
```

### ✅ FIX: Primitive values or useMemo

```typescript
// CORRECT: Use primitive values
useEffect(() => {
  doSomething({ limit });
}, [limit]); // Number doesn't change reference

// CORRECT: Or memoize the object
const options = useMemo(() => ({ limit }), [limit]);
```

---

## 🔴 Critical Anti-Pattern #4: Missing Cleanup

AI forgets to clean up subscriptions, timers, and async operations.

### ❌ BAD: No cleanup

```typescript
// AI ANTI-PATTERN: Memory leak!
useEffect(() => {
  const interval = setInterval(() => {
    fetchData();
  }, 5000);
  // No cleanup!
}, []);
```

### ✅ FIX: Always return cleanup

```typescript
// CORRECT: Cleanup function
useEffect(() => {
  const interval = setInterval(fetchData, 5000);
  return () => clearInterval(interval); // Cleanup!
}, []);

// CORRECT: AbortController for fetch
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') throw err;
    });

  return () => controller.abort();
}, []);
```

---

## 🔴 Critical Anti-Pattern #5: Over-Engineering

AI creates abstractions nobody asked for.

### ❌ BAD: Custom hook for one use

```typescript
// AI ANTI-PATTERN: Abstraction for one component
function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse };
}
```

### ✅ FIX: Just use useState

```typescript
// CORRECT: Simple is better
const [isOpen, setIsOpen] = useState(false);
```

---

## 🔴 Critical Anti-Pattern #6: Prop Drilling Denial

AI passes props through 5 components instead of using context/state.

### ❌ BAD: Prop drilling

```typescript
// AI ANTI-PATTERN
<App user={user}>
  <Layout user={user}>
    <Sidebar user={user}>
      <UserInfo user={user}>
        <Avatar user={user} />
      </UserInfo>
    </Sidebar>
  </Layout>
</App>
```

### ✅ FIX: Use context or Zustand

```typescript
// CORRECT: Context for deeply shared data
const UserContext = createContext(null);

function App() {
  return (
    <UserContext.Provider value={user}>
      <Layout><Sidebar><UserInfo /></Sidebar></Layout>
    </UserContext.Provider>
  );
}

function Avatar() {
  const user = useContext(UserContext); // Get it where you need it
}
```

---

## 🔴 Critical Anti-Pattern #7: Unnecessary 'use client'

AI puts 'use client' on everything, losing Server Component benefits.

### ❌ BAD: Everything is client

```typescript
// AI ANTI-PATTERN: Entire page is client-side
'use client';

export default function ProductPage({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`).then(/* ... */);
  }, [id]);

  return <ProductDisplay product={product} />;
}
```

### ✅ FIX: Server Component with client islands

```typescript
// CORRECT: Server Component (no 'use client')
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id); // Runs on server!

  return (
    <div>
      <ProductInfo product={product} />      {/* Server */}
      <AddToCartButton id={product.id} />    {/* Client */}
    </div>
  );
}

// Only interactive parts are client
'use client';
function AddToCartButton({ id }) {
  const handleClick = () => addToCart(id);
  return <button onClick={handleClick}>Add to Cart</button>;
}
```

---

## Quick Reference: When to Use What

| Need | Use |
|------|-----|
| Computed value | Just compute it (no hook) |
| Derived state | Compute during render |
| Form inputs | React Hook Form |
| Server data | Server Components or React Query |
| Global state | Zustand or Context |
| Side effects | useEffect (with cleanup!) |
| Complex state | useReducer |
| Event handlers | Just functions (rarely useCallback) |

---

## The 30-Second Rule

Before accepting any AI-generated code, ask:

> "Could I explain what this does to a junior developer in 30 seconds?"

If no → don't merge it.

---

## Sources

- [The Vibe Coding Hangover Is Real](https://dev.to/paulthedev/the-vibe-coding-hangover-is-real-what-nobody-tells-you-about-ai-generated-code-in-production-399h)
- [15 Common useEffect Mistakes](https://blog.logrocket.com/15-common-useeffect-mistakes-react/)
- [React Anti-Patterns and Best Practices](https://www.perssondennis.com/articles/react-anti-patterns-and-best-practices-dos-and-donts)
- [React Has Changed, Your Hooks Should Too](https://allthingssmitty.com/2025/12/01/react-has-changed-your-hooks-should-too/)
