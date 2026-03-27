[![CI](https://github.com/flow145/react-template/actions/workflows/ci.yml/badge.svg)](https://github.com/flow145/react-template/actions/workflows/ci.yml)

# React template

An opinionated template for React apps with TypeScript and Vite.

## Features

- **React 19**
- **TypeScript** strict configuration, path aliases (`~/*` maps to `src/*`)
- **Vite 8** with Rolldown
- **Biome** for linting and formatting (with EditorConfig support)
- **pnpm** - efficient package manager
- **Git hooks** via Husky + lint-staged
- **Commit validation** via Commitlint (Conventional Commits)
- **CI** via GitHub Actions (runs on push and pull request)

## Prerequisites

- Node.js 20.19+ / 22.12+
- pnpm

_The listed tools can be installed with [Mise](https://mise.jdx.dev/), a fast, cross-platform tool version manager._

## Get started

1. Click the `Use this template` button on GitHub or clone locally:

   ```sh
   pnpm dlx degit flow145/react-template react-project
   ```

   Both methods will clean the git history.

   _[degit](https://github.com/Rich-Harris/degit)_

2. Update and install the dependencies

   ```sh
   pnpm up -i --latest
   ```

3. Update the project name, description, license, and links in [`package.json`](./package.json).
4. Check out the available scripts in [`package.json`](./package.json) or execute `pnpm run`.
