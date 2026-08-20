---
name: typescript-best-practices
description: TypeScript type organization patterns, utility types, and interface best practices. Inject when working with TypeScript types.
---

# TypeScript Type Organization & Best Practices

## Recommended Structure

```
types/
├── common.ts          → Shared primitives (ID, Timestamp, Nullable<T>)
├── models/
│   ├── user.ts        → User domain types
│   ├── product.ts     → Product domain types
├── api/
│   ├── requests.ts    → API request payload types
│   ├── responses.ts   → API response types
│   └── errors.ts      → API error types
├── components/
│   └── props.ts       → Shared component prop types
└── index.ts           → Barrel file re-exporting all public types
```

## Utility Type Patterns

### Pick<T, K> - Extract property subsets
```typescript
type UserSummary = Pick<User, 'id' | 'name' | 'email'>;
```

### Omit<T, K> - Exclude properties
```typescript
// For creation DTOs without auto-generated fields
type CreateUserDTO = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
```

### Partial<T> - Make all properties optional
```typescript
// For patch/update operations
type UpdateUserDTO = Partial<Omit<User, 'id'>>;
```

### Required<T> - Make all properties required
```typescript
type StrictConfig = Required<Config>;
```

### extends - For true type hierarchies
```typescript
interface BaseEntity {
  id: string;
  createdAt: Date;
}
interface User extends BaseEntity {
  email: string;
}
```

### Intersection types (&) - For composition
```typescript
type AdminUser = User & AdminPermissions;
```

## Problem Detection Checklist

### HIGH SEVERITY (must fix)
- Duplicate types: Same shape in multiple files
- God interfaces: 15+ properties (decompose them)
- Circular dependencies: Types creating import cycles
- Missing exports: Types used across files but not exported

### MEDIUM SEVERITY (should fix)
- Scattered related types: Domain types in unrelated files
- Complex inline types: Large inline function signatures
- Inconsistent generics: Similar patterns, different implementations

### LOW SEVERITY (consider fixing)
- Orphan types: Exported but never imported
- Inconsistent naming: Mixed IUser vs User vs UserType
- Overly permissive: Excessive `any` or `unknown`

## Best Practices

1. **Single source of truth** - Infer types from schemas (Zod, Convex)
```typescript
import { z } from 'zod';
export const userSchema = z.object({...});
export type User = z.infer<typeof userSchema>;
```

2. **Co-locate related types** - Keep domain types together

3. **Export through barrel files** - Use types/index.ts

4. **Prefer composition** - Over deep inheritance

5. **Descriptive names** - Indicate the type's purpose

6. **No duplicate definitions** - Single canonical location

## Common Patterns

### Discriminated Unions
```typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };
```

### Generic Constraints
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### Mapped Types
```typescript
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Optional<T> = { [P in keyof T]?: T[P] };
```
