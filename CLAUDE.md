# CLAUDE.md

This file provides guidance to Claude Code when working with this project.

See https://docs.claude.com/claude-code/projects for more information.

## Project Overview

**portal-base-web** - Micro-frontend base application using qiankun framework.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Micro-frontend**: qiankun
- **Styling**: Tailwind CSS 4
- **Deployment**: Docker + Kubernetes

## Key Commands

```bash
# Run locally
yarn dev

# Build for production
yarn build

# Run production build
yarn start

# Lint
yarn lint
```

## Code Style

- Next.js App Router architecture
- TypeScript strict mode
- Tailwind CSS for styling
- Component-based structure

## Important Files

- `src/app/layout.tsx` - Root layout with Header and ICP
- `src/components/header/` - Navigation header
- `src/app/page.tsx` - Home page

## Development Notes

- This is a micro-frontend host application
- Uses qiankun for sub-app integration
- Project version: 0.1.15
