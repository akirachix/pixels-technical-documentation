# Code Contribution

## General rules

- Keep changes small and focused. Split large work into several PRs.
- Review your own diff before asking anyone else to.
- Match the design: for UI work, compare your page to the Figma file for font sizes, colours, borders and spacing.
- Do not commit secrets, `.env` files or local-only helper files.

## Frontend (`pixels-frontend`)

- The dashboard uses **JSX**, not TypeScript. Keep new files as `.jsx`.
- Use the **Nunito** font and Tailwind classes, as the existing pages do.
- Split code into small components. One component per file.
- Reuse shared pieces such as `Sidebar` and `TopBar` instead of duplicating them.
- Make every API call through the shared client in `lib/api.js`, not with ad-hoc `fetch` calls.
- Handle failure states. A `401` or `403` should show an auth message, not an empty table.
- Format with Prettier and fix lint errors before pushing.

## Backend (`pixels-backend`)

- Follow the existing layout: models, schemas, routes, then tests.
- Every model change needs an Alembic migration.
- Write pytest tests in `tests/` for new endpoints.
- In test helpers, use `flush` rather than `commit` so each test can roll back.
- Never change authentication code just to make local testing easier. Use a local-only override instead and keep it out of the PR.

## What reviewers check

| Area | Typical question |
| --- | --- |
| Scope | Does the PR contain only what its title says? |
| Correctness | Does the form or endpoint really work end to end, and show success only after confirmation? |
| Design | Does it match Figma and stay responsive? |
| Quality | Is it formatted, linted and free of duplicated components? |
| Safety | Are tokens and errors handled properly? |