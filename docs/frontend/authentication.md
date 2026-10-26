# Authentication

Operators authenticate with an email and password. The backend returns an access token, the browser keeps it under the key **`mvuvi_token`**, and `lib/api.js` sends it with every request.

## Overview

| Item | Behaviour |
| --- | --- |
| Credentials | Email and password |
| Token key | `mvuvi_token` |
| Token sent as | `Authorization: Bearer <token>` header, added by `lib/api.js` |
| Public pages | `/login`, `/register` |
| Everything else | Requires a valid token |

## Login

1. The operator opens `/login` and enters **Email** and **Password**.
2. The form checks the fields (see [Forms and validation](./forms-and-validation.md)).
3. `lib/api.js` posts the credentials to the backend sign-in endpoint.
4. On success, the access token is saved under `mvuvi_token` and the operator is sent to the dashboard.
5. On failure, the page stays on `/login` and shows the error message (see below).

The **Forgot password** link starts the password reset. In **Settings**, an operator can also press **Send Reset Code** to have a reset code sent to the operator email.

## Registration

The `/register` page creates an operator account from first name, last name, email, password and confirm password. After a successful registration the operator signs in on `/login`.

## Logout

1. The operator chooses sign out from the operator menu in the `TopBar`.
2. The `mvuvi_token` key is removed from the browser.
3. The operator is redirected to `/login`, and the dashboard pages are no longer reachable until the next sign-in.

## Session and token handling

- The token is the only credential the frontend stores. It is read and written only through the shared auth helpers and `lib/api.js`, never by individual pages.
- Reading the token under another name, or calling `fetch` directly, makes pages appear signed out.
- The frontend does not decode the token. It trusts the backend to accept or reject it.

## Protected routes

The `(dashboard)` layout wraps every signed-in page. When it mounts it checks for `mvuvi_token`:

| Token state | Result |
| --- | --- |
| Present | The page renders and its data requests carry the token |
| Missing | The operator is redirected to `/login` before any data is requested |
| Rejected by the backend (`401`) | The token is cleared and the operator is redirected to `/login` |

Because the layout is shared, no individual page has to repeat this check.

## Expiration

Access tokens have a limited lifetime set by the backend. When a token expires, the next request returns `401`. The frontend then clears `mvuvi_token`, shows a "session expired, please sign in again" message and redirects to `/login`. Unsaved form input on the page is lost.

## Authentication errors

| Situation | What the operator sees |
| --- | --- |
| Wrong email or password | An inline error on the login form, fields stay filled in except the password |
| Validation failure | Field-level messages, no request is sent |
| `401` on a data request | Session-expired message and redirect to `/login` |
| `403` on a data request | "You do not have access" message. The page does not show an empty table |
| Backend unreachable | A short network error message, with a retry |

