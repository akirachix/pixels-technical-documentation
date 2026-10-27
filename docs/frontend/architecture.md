# Frontend Architecture

![Dashboard architecture](../assets/frontend-architecture.svg)

## Layers

1. **Next.js App Router.** Pages and layouts live under `app/`. Signed-in screens sit in the `(dashboard)` route group, which shares one layout.
2. **Components.** Reusable pieces such as `Sidebar`, `TopBar`, maps, tables and popups. Each is a small JSX file.
3. **`lib/api.js`.** The single shared API client. It builds requests to the backend and attaches the operator's access token.
4. **Backend API.** The FastAPI service under `/api/v1`, backed by PostgreSQL.

## Why this shape

- **One layout, many pages.** The dashboard layout holds the sidebar and top bar once, so individual pages never duplicate them.
- **One API client.** Authentication and error handling happen in one place, so every page behaves the same on `401` or `403`.
- **Small components.** Splitting files keeps pages readable and makes reviews easier.

## Conventions

| Topic | Convention |
| --- | --- |
| Language | JSX, not TypeScript |
| Framework | Next.js, App Router |
| Styling | Tailwind classes, Nunito font |
| Data access | Always through `lib/api.js` |
| Auth token | Stored under the key `mvuvi_token` |
| Layout | Shared via the `(dashboard)` route group |
| State | Plain React hooks, no global store |

## Project structure

The tree below shows the layout the docs rely on. Names marked with `*` are the ones the rest of this section refers to.

```text
pixels-frontend/
├── app/
│   ├── layout.jsx              # root layout (fonts, global styles)
│   ├── login/page.jsx          # sign-in page
│   ├── register/page.jsx       # create-account page
│   └── (dashboard)/            # * signed-in route group
│       ├── layout.jsx          # * shared Sidebar + TopBar, session check
│       ├── dashboard/page.jsx  # Operations Dashboard
│       ├── incidents/page.jsx  # Live Incidents
│       ├── fishers/page.jsx    # Fishers
│       ├── wristbands/page.jsx # Wristbands
│       ├── responders/page.jsx # Responders and Messages
│       ├── reports/page.jsx    # Incident Reports and History
│       └── settings/page.jsx   # System Settings
├── components/                 # * Sidebar, TopBar, maps, tables, popups
├── lib/
│   └── api.js                  # * shared API client
├── public/                     # static assets (logo, images)
├── .env.local                  # local environment variables (not committed)
├── next.config.mjs
├── tailwind.config.js
└── package.json
```


## Talking to the backend

The dashboard consumes endpoints such as:

| Endpoint | Used for |
| --- | --- |
| `/api/v1/alerts/` | Distressed fisher alerts shown on the map. |
| `/api/v1/alert-responders/` | Nearest responders for an alert. |
| `/api/v1/fishers/` | Fisher details. |

The full list, including sign-in and registration, is in [API integration](./api-integration.md).
