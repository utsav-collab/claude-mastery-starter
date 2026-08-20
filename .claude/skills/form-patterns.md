---
name: form-patterns
description: React Hook Form + Zod validation patterns for building type-safe, performant forms.
---

# Form Patterns with React Hook Form + Zod

## The Stack

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Standard Pattern

### 1. Define Schema (Validation Rules)

```typescript
// lib/schemas/contact.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// TypeScript type from schema - single source of truth
export type ContactFormData = z.infer<typeof contactSchema>;
```

### 2. Form Component

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/schemas/contact';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // data is validated and typed!
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
```

### 3. Server Action (Validate Again!)

```typescript
'use server';

import { contactSchema } from '@/lib/schemas/contact';

export async function submitContact(data: ContactFormData) {
  // ALWAYS validate on server
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  // Process validated data...
  return { success: true };
}
```

## Common Zod Validations

```typescript
// Required text
z.string().min(1, 'Required')

// Email
z.string().email('Invalid email')

// Password
z.string().min(8, 'Must be 8+ characters')

// Number from string input
z.coerce.number().min(0).max(100)

// Select/enum
z.enum(['basic', 'pro', 'enterprise'])

// Checkbox
z.boolean().refine(v => v, 'You must accept')

// Optional
z.string().optional()

// Password confirmation
.refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ['confirm'],
})
```

## Best Practices

1. **Schema First** — Define validation before building UI
2. **Type Inference** — Use `z.infer<typeof schema>` for types
3. **Server Validation** — Never trust client, always validate on server
4. **Error Display** — Show errors next to fields, not in alerts
5. **Loading States** — Disable button and show feedback during submit
