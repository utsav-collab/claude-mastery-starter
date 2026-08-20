---
name: component-patterns
description: React component architecture patterns for building maintainable, reusable components.
---

# React Component Patterns

## File Structure

```
src/components/
├── ui/              # Atoms: Button, Input, Badge, Card
├── forms/           # Form-specific: FormField, Select
├── layout/          # Layout: Header, Footer, Sidebar
└── features/        # Feature-specific: ProductCard, UserProfile
```

## Basic Component Template

```typescript
// components/ui/Button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-colors',
        // Variants
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        // Sizes
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-6 py-3 text-lg',
        // States
        props.disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

## Server vs Client Components

```typescript
// Server Component (default) - NO 'use client'
// ✅ Can fetch data, access database, use async/await
// ❌ No hooks, no event handlers, no browser APIs

// Client Component - add 'use client'
'use client';
// ✅ Can use hooks, event handlers, browser APIs
// ❌ Can't directly access server resources
```

**Rule:** Keep client components as SMALL as possible.

```typescript
// BAD: Entire page is client
'use client';
export function DashboardPage() {
  // Everything is client-side now...
}

// GOOD: Only interactive parts are client
export function DashboardPage() {
  return (
    <div>
      <Header />             {/* Server */}
      <Stats />              {/* Server - fetches data */}
      <InteractiveChart />   {/* Client - has click handlers */}
    </div>
  );
}
```

## Props Guidelines

| Guideline | Why |
|-----------|-----|
| Max 7 props | Too many = component does too much |
| Required first | Clear what's needed vs optional |
| Default variants | Less typing for common cases |
| className prop | Allow style extension |

## When to Split Components

- File exceeds 200 lines
- More than 3 useState hooks
- Mixing data fetching with display
- Same code repeated 3+ times

## When NOT to Abstract

- Only 2 occurrences (wait for third)
- Simple one-liners
- Still figuring out the pattern
- Would create prop drilling

## The cn() Helper

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Combines Tailwind classes intelligently:
```typescript
cn('p-4 bg-red-500', 'p-6') // => 'p-6 bg-red-500' (p-6 wins)
cn('text-sm', condition && 'text-lg') // conditional classes
```
