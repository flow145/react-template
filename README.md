[![CI](https://github.com/flow145/react-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/flow145/react-starter/actions/workflows/ci.yml)

# React starter

A minimal project starter for React apps with TypeScript and Vite.

## Features

- **React 19**
- **TypeScript** strict configuration, path aliases (`~/*` maps to `src/*`)
- **Vite 8** with Rolldown
- **Vitest** and **Testing Library**
- **pnpm** - efficient package manager
- **Biome** for linting and formatting (with EditorConfig support)
- **Git hooks** - quality checks on precommit and push via lefthook
- **Commit validation** via Commitlint (Conventional Commits)
- **CI** via GitHub Actions (runs on push and pull request)

## Prerequisites

- Node.js 22.12+
- pnpm 11+

_The listed tools can be installed with [Mise](https://mise.jdx.dev/), a fast, cross-platform tool version manager._

## Get started

1. Click the `Use this template` button on GitHub or clone locally:

   ```sh
   pnpm dlx degit flow145/react-starter react-project
   ```

   Both methods will clean the git history.

   _[degit](https://github.com/Rich-Harris/degit)_

2. Update and install the dependencies

   ```sh
   pnpm up -i --latest
   ```

3. Update the project name, description, license, and links in [`package.json`](./package.json).
4. Run the development server:

   ```sh
   pnpm dev
   ```

5. Run the tests:

   ```sh
   pnpm test:watch
   ```

6. Check out the other available scripts in [`package.json`](./package.json) or execute `pnpm run`.
