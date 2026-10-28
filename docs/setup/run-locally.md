# Run Locally

## Before starting

1. Check out the application source in a separate workspace. For example, if you do not already have these folders, run:

   ```bash
   mkdir -p ~/Projects/MvuviGo
   cd ~/Projects/MvuviGo
   git clone https://github.com/akirachix/pixels-backend.git
   git clone https://github.com/akirachix/pixels-frontend.git
   ```

   Clone `pixels-iot` only if you need the gateway. If GitHub reports that a repository is unavailable or access is denied, confirm the URL and ask the project maintainer for repository access. Do not run `git clone` again inside an existing checkout.

1. Complete [Installation](./installation.md), [Environment Variables](./environment-variables.md) and [Database Setup](./database-setup.md).

1. Confirm the backend's required variables against its `.env.example` and README. The examples here are limited to what the documentation records.

1. Ensure the local PostgreSQL database is reachable and migrations have completed.

## Terminal 1: Backend API

From the workspace root:

```bash
cd pixels-backend
uv sync
uv run alembic upgrade head
uv run uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The documented backend entry point is `main:app`. If the checked-out backend README specifies a different entry point or startup command, follow it. Keep this development server bound to localhost; do not use `--reload` in production.

## Terminal 2: Operator dashboard

In a second terminal, from the workspace root:

```bash
cd pixels-frontend
npm ci
```

Create or update `pixels-frontend/.env.local` with the local backend host documented for the client:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Then start the frontend:

```bash
npm run dev
```

Open the URL printed in the terminal (the frontend documentation identifies port `3000` as the development port). If the app cannot reach the API, check the configured base URL and the route-prefix compatibility note in [Environment Variables](./environment-variables.md).

## Terminal 3: IoT gateway (when needed)

The IoT gateway requires a Node.js runtime and may require an MQTT broker, credentials and certificates. The docs archive does not verify its `package.json` scripts or required variables. In the `pixels-iot` repository:

1. Read its README and `.env.example`.

1. Confirm the documented Node.js version and startup script.

1. Use `npm ci` only if `package-lock.json` is present.

1. Configure a test broker and test credentials, then run only the repository's documented development script.

Do not infer a start command from the filename or connect the gateway to a production broker. Device-level tests may also require the approved hardware or simulator.

## Smoke checks

### 1. Check the backend health route

```bash
curl -i http://127.0.0.1:8000/health
```

The API reference documents `GET /health` as an unauthenticated endpoint returning `200` with a JSON object. If the route is unavailable, check that the backend process started without errors and that the checked-out source matches the API documentation.

### 2. Check the dashboard

- Open the local URL printed by `npm run dev`.

- Confirm the sign-in page renders without a terminal compilation error or browser-console error.

- Confirm the browser is configured to call the intended local backend. Do not treat a rendered page alone as proof that protected API calls work.

### 3. Check development quality gates

From the backend repository root:

```bash
uv run --no-sync pytest
```

From the frontend repository root:

```bash
npm run build
```

Use each repository's README if its test or build command has changed. See [Testing and Troubleshooting](../testing/) for additional checks.

## What this local setup does not prove

A successful backend health check and dashboard build do not demonstrate the complete rescue path. They do not by themselves verify device GPS, RFID, LoRa transmission, MQTT delivery, SMS provider delivery, responder availability, location freshness or operational response. Validate those separately in an approved test setup and clearly distinguish simulated data from real events.