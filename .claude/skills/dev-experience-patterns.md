# Developer Experience Patterns

Patterns for optimizing projects so any developer can clone → install → run without friction. Used by the DX Optimizer agent.

---

## DX Philosophy

1. **Fast Feedback Loops** — Devs should see changes in milliseconds, not seconds
2. **Zero Config When Possible** — Smart defaults beat complex configuration
3. **Clear Onboarding** — New devs should never be stuck wondering what to do
4. **Fail Fast & Clear** — If something's wrong, show helpful errors immediately

---

## Project Onboarding Essentials

### README.md Quick Start

Every project needs a clear getting started section:

```markdown
## Getting Started

### Prerequisites
- Node.js 20+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or pnpm

### Setup

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd <project-name>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)
```

---

### Environment Variables Template

Always include `.env.example`:

```bash
# .env.example
# Copy this file to .env.local and fill in your values
# NEVER commit .env.local to git!

# ============================================
# REQUIRED - App won't work without these
# ============================================

# Database - Get from Supabase dashboard → Settings → Database
DATABASE_URL=postgresql://...

# Auth - Get from Clerk dashboard → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# ============================================
# OPTIONAL - App works without these
# ============================================

# Analytics - Get from Umami dashboard
NEXT_PUBLIC_UMAMI_WEBSITE_ID=

# AI Features - Get from OpenAI dashboard
OPENAI_API_KEY=sk-...
```

**Rules:**
- Group by required vs optional
- Include WHERE to get each value
- Add comments explaining each variable
- Never include actual secrets

---

### Node Version Specification

Lock the Node version to prevent "works on my machine" issues:

**.nvmrc:**
```
20
```

**Or in package.json:**
```json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

---

## Dev Server Optimization

### Enable Turbopack (10x Faster HMR)

```json
// package.json
{
  "scripts": {
    "dev": "next dev --turbo"
  }
}
```

Turbopack benefits:
- Instant HMR (< 100ms vs 1-3s with Webpack)
- Faster cold starts
- Better caching

---

### Optimize Package Imports

Heavy imports slow down dev server. Fix in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Tree-shake these heavy packages
    optimizePackageImports: [
      'lucide-react',
      '@heroicons/react',
      'lodash-es',
      'date-fns',
      '@radix-ui/react-icons',
    ],
  },
};

module.exports = nextConfig;
```

**Also avoid barrel imports:**

```typescript
// ❌ SLOW - Imports entire library
import { Button, Card, Modal } from '@/components';

// ✅ FAST - Direct imports
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
```

---

## TypeScript Optimization

### Fast tsconfig.json

```json
{
  "compilerOptions": {
    // Speed optimizations
    "skipLibCheck": true,              // Skip type-checking node_modules
    "incremental": true,               // Cache type info between builds
    "tsBuildInfoFile": ".tsbuildinfo", // Where to store cache

    // Modern settings
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true,
    "noEmit": true,                    // Next.js handles emission

    // Path aliases
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next"]
}
```

---

## VS Code Integration

### Project Settings

Create `.vscode/settings.json`:

```json
{
  // Format on save
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // ESLint auto-fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // Use project's TypeScript
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,

  // Tailwind IntelliSense
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],

  // File associations
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Recommended Extensions

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

---

## Git Configuration

### Comprehensive .gitignore

```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
.next/
out/
dist/
build/

# Environment (NEVER commit secrets!)
.env
.env.local
.env.*.local

# IDE
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
!.vscode/launch.json
.idea/

# OS files
.DS_Store
Thumbs.db

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# TypeScript cache
*.tsbuildinfo

# Test coverage
coverage/

# Misc
*.pem
.vercel
```

---

## Package.json Scripts

Standard scripts every project should have:

```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## DX Audit Checklist

Use this to verify a project is set up correctly:

### Onboarding
- [ ] README.md has "Getting Started" section
- [ ] .env.example exists with all required variables
- [ ] Node version specified (.nvmrc or package.json engines)

### Dev Speed
- [ ] Turbopack enabled (`next dev --turbo`)
- [ ] No barrel imports in components
- [ ] Heavy packages in `optimizePackageImports`

### TypeScript
- [ ] `skipLibCheck: true` in tsconfig
- [ ] `incremental: true` for caching
- [ ] Path aliases configured (`@/*`)

### Editor
- [ ] .vscode/settings.json with format-on-save
- [ ] .vscode/extensions.json with recommendations

### Git
- [ ] .gitignore covers node_modules, .next, .env.local
- [ ] No secrets in git history

### Scripts
- [ ] `npm run dev` starts dev server
- [ ] `npm run build` creates production build
- [ ] `npm run lint` checks for issues
- [ ] `npm run typecheck` validates types

---

## Quick Fix Commands

```bash
# Enable Turbopack
npm pkg set scripts.dev="next dev --turbo"

# Create .nvmrc
echo "20" > .nvmrc

# Create .env.example from .env.local (strips values)
sed 's/=.*/=/' .env.local > .env.example

# Format all files
npx prettier --write .

# Check for TypeScript errors
npx tsc --noEmit
```

---

*Part of the Claude Code Masterclass — Barcelona 2026*
