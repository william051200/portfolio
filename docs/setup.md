# Setup

Requires Node.js 22.18+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite with the `/portfolio/` path.

## Checks

```sh
npm test
npm run build
```

The build includes strict Vue/TypeScript checking. Use `npm run type-check` to
check types without building, or `npm run preview` to serve the production build.
No separate linter or formatter is configured.

## Content and assets

Edit portfolio content in `src/data`. Preserve existing portfolio history,
including details not displayed by the current layout.

Put public images in `public`. Vite copies this directory into the build as-is,
so keep documentation and private files elsewhere.

## Deployment

The GitHub Pages workflow builds and deploys pushes to `main`.
Keep `base` in `vite.config.ts` aligned with the repository name.
