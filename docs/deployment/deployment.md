# Deployment

![Build and deployment pipeline](../assets/deployment-pipeline.svg)

MvuviGo has three parts to run or publish: the backend API, the dashboard and this documentation site.

## Backend (`pixels-backend`)

Requirements: Python, [uv](https://docs.astral.sh/uv/), and a PostgreSQL database.

```bash
uv sync
alembic upgrade head
uv run uvicorn main:app --reload
```

- Drop `--reload` outside development.
- The API is served under `/api/v1`.
- The database connection is read from environment settings, not from code. Never commit credentials.
- Run `alembic upgrade head` on every deploy so the schema matches the models.

## Dashboard (`pixels-frontend`)

Requirements: Node.js and npm.

```bash
npm install
npm run build
npm start
```

For development use `npm run dev`. Point the app at the backend's base URL through its environment configuration so `lib/api.js` calls the right server.

## Documentation site

This site is built with VitePress and published to GitHub Pages by a GitHub Actions workflow in `.github/workflows`.

```bash
npm install
npm run docs:dev      # live preview while writing
npm run docs:build    # production build
```

Push your docs changes through a PR as described in [Branching and pull requests](./branching-and-prs.md). When the change reaches the publishing branch, the workflow builds the site and updates GitHub Pages.

## Checklist before a release

- Migrations applied and the schema matches the models.
- Backend tests pass (`pytest`).
- Dashboard builds without errors.
- Environment variables set for the target environment.
- Documentation updated for anything that changed.