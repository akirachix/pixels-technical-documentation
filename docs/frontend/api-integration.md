# API Integration

All backend calls go through one client, **`lib/api.js`**. Pages and components never call `fetch` directly.

## Base URL and configuration

The backend is the FastAPI service under `/api/v1`. The client builds every URL from a base URL set in an environment variable, so each environment can point to its own backend.

| Setting | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Backend host, without `/api/v1` | `http://localhost:8000` |

The client appends `/api/v1` and the endpoint path to this base.


## Request mechanism

`lib/api.js` wraps the browser `fetch` API. It:

1. Builds the full URL from the base URL and the path.
2. Adds the headers (`Content-Type: application/json` and the auth header).
3. Sends the request and parses the JSON response.
4. Throws a readable error when the response is not successful.

Pages call small named functions from the client, for example `getAlerts()` or `getFishers()`, rather than building requests themselves.

## Authentication mechanism

The client reads the token stored under `mvuvi_token` and sends it as:

```http
Authorization: Bearer <token>
```

The sign-in and registration requests are sent without a token. See [Authentication](./authentication.md).

## Endpoints used

| Endpoint | Used for | Page |
| --- | --- | --- |
| `/api/v1/alerts/` | Distressed fisher alerts shown on the map | Dashboard, Live Incidents |
| `/api/v1/alert-responders/` | Nearest responders for an alert | Responders and Messages |
| `/api/v1/fishers/` | Fisher details, registration, phone changes | Fishers, Settings |
| Sign-in endpoint | Exchange email and password for a token | Login |
| Registration endpoint | Create an operator account | Register |
| Wristbands endpoint | List wristbands, assign to a fisher | Wristbands |
| Reports endpoint | Incident history and report download | Reports |
| SMS messages endpoint | Messages sent to responders | Responders and Messages |

## Response handling

- Successful responses are parsed as JSON.
- Pages pass the raw response through a small **mapper** that converts backend field names to the shape the UI needs and supplies fallbacks for missing values, for example a default label when a responder has no name.
- Lists are returned in the order the backend sends them. Responders arrive nearest first.

Example of the mapping idea:

```js
function mapResponder(r) {
  return {
    name: r.name ?? "Unnamed responder",
    distanceM: r.distance_m,
    notifiedAt: r.received_at,
    arrivedAt: r.arrived_at ?? null,
  };
}
```

## Error handling

| Response | Client behaviour |
| --- | --- |
| `401` | Clear the token, redirect to `/login` |
| `403` | Show an access message, do not render an empty table |
| `422` | Show the field errors returned by the backend on the form |
| `5xx` or network failure | Show a short error and keep the rest of the page usable |

Each page turns the error into its `error` state. See [State management](./state-management.md).
