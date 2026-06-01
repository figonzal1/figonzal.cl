# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (figonzal.cl) built with Astro (SSG) + React islands, deployed to GitHub Pages.

## Commands

- Package manager is **pnpm** (not npm/yarn).
- `pnpm build` runs `astro check && astro build` — `astro check` type-checks `.astro` files, so the build fails on type errors. Run it to validate changes.
- `pnpm format` — Prettier (`--write .`). Always run after edits; `prettier-plugin-tailwindcss` reorders Tailwind classes and `prettier-plugin-astro` handles `.astro` files.
- `pnpm lint` — oxlint + eslint with `--fix`.
- `pnpm dev` — local server at `localhost:4321`.

## Architecture

- **i18n:** `es` is the default locale (no URL prefix); `en` lives under `/en/`. Pages are duplicated per locale (e.g. `src/pages/proyectos/web.astro` + `src/pages/en/projects/web.astro`), each passing `lang="es"|"en"` to components.
- **Content lives in data, not components.** Projects, clients, and tech stacks are defined in `src/utils/seeders/*.ts`; their translated strings are in `src/utils/translations.ts`. To add/edit content, change the seeder + translations — don't hardcode in components.
- **Path aliases** (tsconfig): `@components/*`, `@assets/*`, `@layouts/*`, `@styles/*`, `@utils/*`.
- **SEO:** per-page `title`/`description`/`canonical` flow from each page → `BaseLayout` → `Head.astro`. New pages should pass these props (the `canonical` default points to the homepage). `@astrojs/sitemap` generates the sitemap at build.

## Conventions

- **Strict TS** with `verbatimModuleSyntax`; type-only imports must use `import type` (oxlint `consistent-type-imports` is an error).
- Commit messages are semantic/conventional (`feat:`, `fix:`, `chore:`, `style:`), sometimes written in Spanish.
- Workflow: work on `dev`, open a PR into `main`.
- **Deploy:** GitHub Pages deploys only when a `vX.Y.Z` git tag is pushed (`.github/workflows/deploy.yml`). To release: bump `version` in `package.json`, then push a matching tag.
