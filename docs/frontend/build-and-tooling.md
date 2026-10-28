# Build and Tooling

## Toolchain

| Tool | Role |
| --- | --- |
| Node.js and npm | Runtime and package manager |
| Next.js | Framework, dev server and production build |
| React | UI library, written in JSX |
| Tailwind CSS (with PostCSS) | Styling |
| ESLint | Linting |

## Scripts

Run these from the `pixels-frontend` folder:

| Command | What it does |
| --- | --- |
| `npm ci` | Install the exact dependencies recorded in `package-lock.json` |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create the optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Backend base URL (see [API integration](./api-integration.md)) |

Variables that start with `NEXT_PUBLIC_` are included in the browser bundle, so never put secrets in them. Keep local values in `.env.local`, which is not committed.

## Build process

1. `npm ci` installs the exact dependencies recorded in `package-lock.json`.

1. `npm run build` compiles the pages, bundles the JavaScript and CSS, and generates the static assets.

1. The build fails on compile errors, so fix them before release.

1. `npm run start` serves the result for a final check.