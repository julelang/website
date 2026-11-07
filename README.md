# jule.dev website

The official website of the [Jule programming language](https://github.com/julelang/jule).
Built with Vue 3, Vite and Tailwind CSS v4. Fonts are self-hosted (no external requests).

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview
```

## Deploy (Vercel)

Import the repository in Vercel. The framework is detected as **Vite**
(build: `npm run build`, output: `dist`). `vercel.json` already contains the SPA
rewrite, cache headers and basic security headers.

## Structure

- `src/views/` pages (`Home`, `Downloads`, `Release`, `Community`, ...)
- `src/content/*.html` long-form text of Future of Jule, Contributing and Code of Conduct. Edit these to change the copy.
- `src/lib/nav.js` single source for navbar, footer and the Ctrl/⌘+K search
- `src/lib/github.js` cached GitHub API client (releases, star count)
- `src/styles/main.css` design tokens (colors, fonts, themes) and syntax highlight colors
- `public/` favicon, OG image, robots.txt, sitemap.xml

The domain `https://jule.dev` is used in `index.html`, `public/sitemap.xml`, `public/robots.txt` and `src/router.js`; change it if needed.
