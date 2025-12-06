# Fullstack Monorepo (Next.js + NestJS + Turborepo + PNPM)

Modern monorepo including:

- **apps/web** → Next.js 16 (frontend)
- **apps/api** → NestJS (backend)
- **packages/shared** → shared code (DTOs, types, utils)
- **Turborepo** orchestrating builds
- **PNPM** workspaces
- **CI/CD** with GitHub Actions
- **Husky + Commitlint + Lint-staged** for code quality

## 📦 Package Management

```bash
# Install a package in the root workspace
pnpm add -w package-name

# Add a package to a specific app (e.g. web)
pnpm add package-name --filter web

# Add a dev dependency to a specific app
pnpm add -D package-name --filter web

# Add a package to multiple workspaces
pnpm add package-name --filter web --filter api

# Install all dependencies
pnpm install
```

## 🚀 Commands

Root (monorepo):

```bash
pnpm dev             # start Web + API (and dependencies) in dev
pnpm build           # build everything
pnpm test            # run tests
pnpm lint            # lint all packages/apps
pnpm clean           # clean node_modules and .turbo cache

# Target a single workspace (Turbo filters)
pnpm dev:web         # Next.js dev (apps/web)
pnpm dev:api         # NestJS dev (apps/api)
pnpm dev:shared      # TypeScript project watch (packages/shared)
pnpm build:web       # build web only
pnpm build:api       # build api only
pnpm build:shared    # build shared only
pnpm lint:web        # lint web only
pnpm lint:api        # lint api only
pnpm lint:shared     # lint shared only
```

Web (apps/web):

```bash
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web lint
```

API (apps/api):

```bash
pnpm --filter api dev
pnpm --filter api build
pnpm --filter api lint
```

Shared (packages/shared):

```bash
pnpm --filter ./packages/shared build   # one-off build (outputs dist/)
pnpm --filter ./packages/shared dev     # watch mode (tsc -b -w)
```

## 📦 Architecture

```
apps/
  web/    Next.js
  api/    NestJS

packages/
  shared/ DTOs + types + utils
```

## 🔧 Tech stack

- Next.js 16 (Turbopack)
- NestJS
- PNPM Workspaces
- Turborepo
- TypeScript
- Husky + Lint-staged + Commitlint
- GitHub Actions

## 🧩 Notes

- Import shared code from the web or API using `@bitig/shared`.
- Ensure `packages/shared` is built or in watch mode so `dist/` exists.
- Optional for Next.js: if you want to consume source instead of dist, enable `transpilePackages: ['@bitig/shared']` in `apps/web/next.config.ts`.
