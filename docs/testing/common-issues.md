# Common Issues

Use the service's own README and error output as the source of truth. The commands below are intended for local development only. Before sharing logs, remove passwords, tokens, private keys, phone numbers and precise fisher locations.

## Backend and database

### `uv: command not found`

Install `uv` using its official installation instructions, open a new terminal, and verify with `uv --version`. Confirm you are in the `pixels-backend` repository before running backend commands.

### Python dependency or import errors

From the backend root, check the Python version required by the repository and run its documented dependency sync command (currently documented as `uv sync`). Do not install packages globally to work around a project environment issue.

### Database connection refused or authentication failed

1. Confirm PostgreSQL is running and reachable on the host and port in `DATABASE_URL`.

1. Check the local database name, role and password; do not paste the password into an issue or chat.

1. Test the same local database with `psql` as shown in [Database Setup](../setup/database-setup.md).

1. Ensure the backend loaded the intended `.env` and never points at production or shared data.

### Alembic reports that a table already exists

The local schema may predate Alembic. For a disposable local database, recreate it and run migrations from the beginning. Do not use `alembic stamp head` unless you have verified the existing schema exactly matches that migration. Never drop or stamp a shared database to clear an error.

### Backend starts but the health request fails

Check the startup output, port and entry point, then try the documented route:

```bash
curl -i http://127.0.0.1:8000/health
```

The API reference documents `/health` without a prefix. A connection-refused error usually means the server is not running on that address/port; an HTTP error means the route or application returned a response that needs investigation.

## Frontend

### `npm ci` fails

Check `node --version`, `npm --version`, and the frontend repository's documented Node.js version. Run `npm ci` from the directory containing the committed `package-lock.json`. Keep the lockfile; do not remove it as a first troubleshooting step.

### Dashboard loads but API calls fail

- Confirm the backend is running and `NEXT_PUBLIC_API_URL` is set to the local backend host (the frontend guide documents `http://localhost:8000` ).

- Confirm the value does not already include `/api/v1`; the documented client appends that prefix itself.

- Restart the frontend after changing `.env.local`.

- Check the browser network panel for the exact requested URL, status and CORS error.

- Compare the URL with the API reference. This docs set records mixed API prefixes, so confirm the actual frontend and backend routes are compatible in the checked-out repositories.

### Frontend build fails

Run `npm run build` from the frontend repository root and resolve the first reported compile or type error. Check for missing environment configuration and use the script defined in that repository's `package.json`.

## IoT and field integrations

### MQTT connection or certificate errors

Use the IoT repository's documented broker URL, credentials, certificate path and topic names. Confirm system time and test-environment access. Never disable TLS or use a production broker to make a local test pass.

### No SMS, SOS or location update appears

A web dashboard or health check does not validate the radio-to-cloud path. Confirm whether the test uses hardware or a documented simulator, check each service's logs with sensitive fields redacted, and distinguish stale or simulated positions from current positions. Do not contact real responders unless an authorized operational test is in progress.

## Documentation site

### VitePress page or link is missing

From this documentation repository root, run:

```bash
npm ci
npm run docs:build
```

Check the spelling and case of the Markdown filename and the route in `docs/.vitepress/config.mts`. Preview using `npm run docs:preview` and the URL printed in the terminal. Do not assume an unbuilt page is available in the published site.

## Reporting a reproducible issue

Include the repository and branch, operating system, tool versions, the command or request, expected behavior, actual behavior, and a redacted error excerpt. Do not include secrets or personal fisher information. For an SOS-related problem, preserve incident evidence through the project's approved operational process rather than deleting or replaying live records.