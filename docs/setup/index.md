# Developer Setup and Local Onboarding

This guide takes a contributor from prerequisites to a locally running MvuviGo development environment. MvuviGo's application is split across three repositories; this VitePress documentation site is a separate fourth repository and is not one of the runtime services.

## Choose your goal

| Goal | Start here | Result |
|---|---|---|
| Read or edit this documentation site | Follow the [documentation-site quick start](#run-the-documentation-site) | Local VitePress site and a production-build check |
| Develop the MvuviGo platform | Continue with the guides below | Local backend and dashboard; the IoT gateway requires its own repository-specific configuration |

## Recommended onboarding sequence

1. Read [Prerequisites](./prerequisites.md) and confirm the required tools are installed.
2. Follow [Installation](./installation.md) to clone the application repositories.
3. Configure local-only values using [Environment Variables](./environment-variables.md). Check each application's own `.env.example`, README and settings before treating any variable list as complete.
4. Create a throwaway local PostgreSQL database and apply migrations using [Database Setup](./database-setup.md).
5. Follow [Run Locally](./run-locally.md) to start the backend and dashboard, then configure the IoT gateway only from its documented scripts and settings.
6. Run the [backend tests](../testing/backend-tests.md), the frontend production build, and the smoke checks in the local-run guide.

## Run the documentation site

From the root of the `pixels-technical-documentation` repository, install the locked dependencies and start VitePress:

```bash
npm ci
npm run docs:dev
```

Open the URL printed in the terminal. To verify the production build and preview it locally:

```bash
npm run docs:build
npm run docs:preview
```

## Components and prerequisites

| Component | Repository | Main role | Local requirement |
|---|---|---|---|
| Backend API | `pixels-backend` | FastAPI service, database models and migrations | Python and `uv`; PostgreSQL |
| Operator dashboard | `pixels-frontend` | Next.js web application | Node.js and npm |
| IoT gateway | `pixels-iot` | Node.js service that handles MQTT/device traffic | Node.js and the gateway's configured broker, credentials and certificates |
| Documentation | `pixels-technical-documentation` | VitePress documentation site | Node.js and npm |

## Before you begin

- Use local development credentials and a local database only. Never use production credentials or send test SOS messages to real responders.
- Do not commit `.env`, `.env.local`, private keys, access tokens, broker credentials or real fisher information.
- The documentation archive does not contain the three application repositories. For service-specific variables, run commands or hardware behavior, verify the current README, package scripts, `.env.example` and source code in that service's repository.
- Running the backend and dashboard locally does not by itself simulate an on-water SOS or validate the radio, MQTT, SMS or rescue workflow. Those integrations require the relevant test configuration and, where applicable, hardware or an approved simulator.

## Ready-to-run checklist

- [ ] Required tools are installed and versions meet the application repositories' requirements.
- [ ] All required repositories are accessible and cloned.
- [ ] PostgreSQL is running and the local database connection works.
- [ ] Backend environment values are set from the backend's documented configuration.
- [ ] Database migrations complete successfully.
- [ ] Backend health check returns the documented success response.
- [ ] Dashboard loads and points at the local backend.
- [ ] Backend tests pass and the frontend production build completes.
