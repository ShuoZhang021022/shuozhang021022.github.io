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
`github-pages/` and is mirrored at the repository root. GitHub Pages publishes
the root of the `master` branch automatically.

## Visitor map

The GitHub Pages homepage embeds Stats4U counter `2955247788` near the bottom
left. It plots approximate IP-based visitor locations as red dots and displays
views today inside the map. Counting begins when the embedded image is first
loaded; the widget does not backfill visits from before installation. Keep the
same counter ID in the root and `github-pages/` copies so future edits retain
the history. The embed is an external request to Stats4U for each page view.
