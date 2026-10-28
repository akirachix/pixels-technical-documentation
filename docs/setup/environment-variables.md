# Environment Variables

Use environment variables for local configuration and secrets. This page records only names already present in the documentation; the application repositories were not included in this documentation archive, so this is **not a complete or independently verified configuration schema**. Before starting a service, compare every setting with that repository's `.env.example`, README and configuration code.

## Backend: `pixels-backend/.env`

Create this file in the backend repository root, if these names are supported by the checked-out backend version:

```
DATABASE_URL=postgresql+psycopg://<db_user>:<db_password>@localhost:5432/mvuvigo
JWT_ALGORITHM=RS256
EMAIL_DELIVERY=console
```

Replace the database placeholders with credentials for your local PostgreSQL instance. `EMAIL_DELIVERY=console` is documented as a local option for printing one-time codes to the terminal instead of sending email. SMTP settings are only needed if the backend is explicitly configured to use SMTP:

```
SMTP_HOST=<smtp-host>
SMTP_PORT=587
SMTP_USER=<test-account>
SMTP_PASSWORD=<app-password>
SMTP_FROM=<sender-address>
```

The exact JWT key settings and any other required backend variables are not established by the documentation archive. Do not assume that setting `JWT_ALGORITHM` alone is sufficient for RS256 signing; follow the backend's current setup instructions and use development-only keys if required.

## Frontend: `pixels-frontend/.env.local`

The frontend documentation specifies this variable for the local API host:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

The frontend client is documented to append `/api/v1` and the endpoint path to this base URL. `NEXT_PUBLIC_` values are included in browser-delivered code: put only public configuration here, never passwords, signing keys, tokens or provider secrets. Restart the frontend development server after changing its environment file.

**Compatibility check:** the API reference also documents some paths under `/api/`, some under `/api/v1/`, and some without a prefix. Confirm the checked-out frontend's requests and backend's mounted routes match before concluding the full integration is configured.

## IoT gateway: `pixels-iot`

This documentation archive does not establish the IoT gateway's exact variable names, MQTT broker URL, topics, database access settings or certificate paths. Do not copy values from another environment. Read the gateway repository's `.env.example`, README and configuration code. Use a test broker and test credentials only.

## Secret-handling rules

- Keep `.env` and `.env.local` out of version control. Check each repository's `.gitignore` before adding local configuration.

- Do not commit real passwords, private keys, bearer tokens, broker credentials, phone numbers or fisher location data.

- If a secret is exposed in a commit, log or chat, treat it as compromised and rotate it through the owning service.

- Use separate credentials for development, staging and production; never point a local test at production data.