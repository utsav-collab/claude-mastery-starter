# Stack Preferences & Tech Decisions

Reference for all "which tool to use" decisions. Consult when starting new projects or making technology choices.

## Build Order (Every New Project)

1. **DX setup** — Next.js, TypeScript strict, tooling, linting, path aliases (`@/`)
2. **i18n** — set up next-intl from day one, even if single language initially
3. **Design system** — colors, logo, original fonts, dark mode, Tailwind config
4. **Component library** — shadcn/ui + Radix, pre-styled with CVA variants, documented in Storybook
5. **Client flow discovery** — understand what the user/client needs to do
6. **Backend first** — complete data model + all API functions, fully working
7. **Frontend on top** — build UI consuming the finished backend

## Design System Approach

- Colors & logo first — AI-assisted for memorability, but result must NEVER look AI-generated
- Original/non-default fonts — no system fonts, configured through Tailwind
- 8-point spacing grid, 12-column layout for apps, creative/unique layouts for landing pages
- Tailwind defaults for border-radius, shadows, motion — adjust per project
- Transitions should feel high quality and polished, not flashy
- Dark mode from day one
- Storybook: ask per project whether to set up — if yes, grow it alongside features
- Visual inspiration from Dribbble, v0, Instagram — extract the "visual DNA"
- AI designs the DLS in code directly — no Figma-first workflow

## Design Tokens Structure

- Define tokens in **both** `tailwind.config.ts` AND CSS variables (Tailwind v4 style)
- **Semantic color names** in components (`bg-primary`, `text-destructive`) — never direct colors (`bg-blue-500`)
- Direct color values only in CSS variables / config
- Dark mode works by swapping semantic variable values
- Always establish these token categories per project: colors, typography, spacing, radii, shadows
- AI establishes the token values as part of DLS setup — present options for approval

## DLS Component Tiers

Prepare Tier 1 + 2 before starting features. Tier 3 per project.

**Tier 1 — Always ready:**
- Button, IconButton
- Input, Textarea, Select, Checkbox, Switch, Radio
- Card, Badge, Avatar
- Dialog/Modal, Sheet (slide-over)
- Toast/Notification

**Tier 2 — Usually needed:**
- Tabs, Accordion
- Dropdown Menu, Command (search palette)
- Table, DataTable
- Tooltip, Popover
- Skeleton (loading states)

**Tier 3 — Ask per project:**
- Calendar, DatePicker
- Charts
- File Upload
- Stepper (multi-step)
- Carousel

## Data & State Management

- **No prop drilling. Ever.** If data is needed in multiple places → Zustand
- **Server state**: Convex `useQuery` when using Convex, TanStack React Query otherwise
- **Client state**: Zustand as default — don't overcomplicate
- **URL state**: filters, tabs, search queries always in searchParams — keep UI linkable
- **Optimistic updates**: always — UI reacts immediately, rollback on failure

## Backend

- **Convex as default** — but research per project what fits best, always ask
- Design schema from use case description (text → data model, AI-assisted)
- Real-time data by default
- API lives in Convex functions — not Next.js API routes (unless specific reason)
- **Backend-first**: complete all API functions before any frontend work

## Auth & Permissions

- **Clerk as default** for auth, roles, and permissions
- Enforce permissions on backend first, then hide UI on frontend
- Don't build custom permission layers unless Clerk can't handle it

## Analytics & Monitoring

Set up all three from day 1:
- **Umami** — privacy-friendly web analytics (pageviews, referrers, devices)
- **Sentry** — error tracking, crashes, stack traces
- **Posthog** — product analytics, funnels, session replay, feature flags
- Track meaningful events (clicks, conversions, flow completion) via Umami event tracking

## Email & Notifications

- **Resend** as default email provider
- React Email for templates (code-based, not drag-and-drop)

## File Uploads & Storage

- **Convex file storage** as default
- **Cloudflare R2** as alternative at scale
- Per project evaluate if something else fits better

## Pagination

- **Infinite scroll** as default preference
- **Cursor-based pagination** for large datasets (10k+ records)
- Per project evaluate what fits the UI best

## Search

- Per project suggest one of: **Convex built-in search**, **Typesense**, or **Algolia**
- Algolia for e-commerce projects
- No fixed default — research best fit per project

## Background Jobs & Queueing

- **Convex scheduledFunctions** as default (crons, delayed jobs, simple queues)
- **Inngest** as next step for complex workflows, multi-step jobs, event-driven patterns
- **Trigger.dev** for long-running background jobs
- Per project suggest what fits — Convex is enough for most cases

## CMS

- **Storyblok** as default CMS
- Use CMS for marketing pages by default — ask per project if needed
- **Visual editor** enabled
- **Build components first**, then register in Storyblok — not the other way around
- Components built for the app can be reused in Storyblok

## Webhooks

- Handle inbound webhooks (Stripe, Clerk, etc.) — decide per project between Next.js API routes or Convex HTTP actions

## Deployment & Infrastructure

- **Vercel** for hosting
- **GitHub Actions** for CI/CD
- Three environments: dev, staging, production
- DNS: manage yourself
- **Sentry** from the start for error tracking/monitoring

## Dependencies

- **Libraries first** — don't reinvent the wheel
- Always install: clsx, tailwind-merge, class-variance-authority, date-fns, zod
- Avoid bloated legacy libs (Moment.js, etc.)
- Heavy dependencies are fine if they speed up development
- Prefer existing frameworks (shadcn, Radix) over building from scratch
- Package manager: no strong preference — use what's best for the project

## Environment Variables

- **Naming**: `NEXT_PUBLIC_` only for client-safe values, everything else server-only
- **`.env.example`** always maintained in repo
- **Validation at startup** with `t3-env` or Zod schema — crash early if vars missing
- **Separate env files**: `.env.development`, `.env.staging`, `.env.production`
- `.env.*` files in `.gitignore`

## Database Patterns

- **Soft delete**: always use `deletedAt` timestamp — never hard delete
- **Audit trails**: `createdAt`, `updatedAt`, `createdBy`, `updatedBy` on every table by default
- **Seed data**: every project gets a seed script for dev/testing
- **Schema migrations**: decide per project

## Race Conditions & Concurrency

- **Conflict detection as default** — notify user when data was modified since they opened it, offer choice to overwrite or reload
- **Optimistic update fails**: silent rollback + toast with explanation
- **Debouncing**: 300ms standard on search inputs, filter changes
- **Bulk API calls**: always batch — never loop with parallel individual calls

## Edge Cases & Defensive Coding

- **Null checks**: always write them, even with TypeScript strict mode
- **Length checks**: always before `.map()` and similar array operations
- **Network failures**: retry logic + error toast + visual offline indicator
- **Boundary checks**: always min/max validation on numeric inputs, max length on text inputs

## Feature Flags & A/B Testing

- **Feature flags** (via Posthog) for all features, including small ones — AI always asks if you want a flag
- **Cleanup**: AI reminds to remove old feature flags
- **A/B testing**: AI proactively suggests A/B tests for new features
