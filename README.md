# Shuo Zhang's Personal Homepage

This repository contains the source and GitHub Pages deployment files for
[shuozhang021022.github.io](https://shuozhang021022.github.io/).

## Local development

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

The React source lives in `app/`. The static GitHub Pages version lives in
`github-pages/` and is deployed automatically by
`.github/workflows/deploy-pages.yml` whenever the `main` branch is updated.
