# Authentication

The API uses HTTP Bearer tokens. Station operators log in with an email and password, then confirm with a one-time code. The response carries an access token that is sent on every protected request.

## Login flow

1. `POST /auth/login` with email and password. A one-time code is sent to the operator.
2. `POST /auth/verify-otp` with the email and code. The response carries the access token.
3. Send the token on protected requests:

```http
Authorization: Bearer <access_token>
```

The `verify-otp` response body is not declared in the OpenAPI spec. Clients read `access_token` from it.

## Public and protected endpoints

| Access | Endpoints |
| --- | --- |
| Public | `/auth/signup`, `/auth/login`, `/auth/request-code`, `/auth/verify-otp`, `/auth/password-reset/*`, `/health` |
| Bearer token required | `/auth/logout`, `/operators/*`, `/api/fishers/*`, `/api/v1/*`, `/locations/*` |
| No authentication declared in the spec | `/trips/*`, `/api/islands/*` |

## Endpoints

### Sign up

`POST /auth/signup` · Public

Creates a station operator account. Passwords are hashed on the server and never returned.

**Body:** [`StationOperatorSignup`](./schemas.md#stationoperatorsignup)

```json
{
  "first_name": "Amina",
  "last_name": "Otieno",
  "email": "amina@example.com",
  "password": "a-strong-password"
}
```

**Responses:** `200` [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) · `422` validation error

### Log in

`POST /auth/login` · Public

Step 1 of login. Checks the email and password and sends a one-time code.

**Body:** [`LoginRequest`](./schemas.md#loginrequest)

**Responses:** `200` [`MessageResponse`](./schemas.md#messageresponse) · `422` validation error

### Request a code

`POST /auth/request-code` · Public

Requests a one-time code for an email, for example to send a new code.

**Body:** [`RequestCodeRequest`](./schemas.md#requestcoderequest)

**Responses:** `200` [`MessageResponse`](./schemas.md#messageresponse) · `422` validation error

### Verify the code

`POST /auth/verify-otp` · Public

Step 2 of login. Verifies the code and returns the access token.

**Body:** [`VerifyOTPRequest`](./schemas.md#verifyotprequest)

```json
{ "email": "amina@example.com", "code": "48213" }
```

**Responses:** `200` body not declared in the spec (contains `access_token`) · `422` validation error

### Log out

`POST /auth/logout` · Bearer

**Responses:** `200` [`MessageResponse`](./schemas.md#messageresponse)

## Password reset

Resetting a password takes three calls, all public:

1. `POST /auth/password-reset/request-code` with [`RequestCodeRequest`](./schemas.md#requestcoderequest). Returns [`MessageResponse`](./schemas.md#messageresponse).
2. `POST /auth/password-reset/verify-code` with [`VerifyOTPRequest`](./schemas.md#verifyotprequest). Returns [`PasswordResetTokenResponse`](./schemas.md#passwordresettokenresponse), which contains `reset_token`.
3. `POST /auth/password-reset/confirm` with [`PasswordResetConfirmRequest`](./schemas.md#passwordresetconfirmrequest). Send the `reset_token` as `token`, plus `new_password`. Returns [`MessageResponse`](./schemas.md#messageresponse).

```json
{ "token": "<reset_token>", "new_password": "a-new-strong-password" }
```

All three return `422` on validation errors.

## Operator accounts

| Method | Path | Description | Responses |
| --- | --- | --- | --- |
| GET | `/operators/me` | Profile of the signed-in operator | `200` `StationOperatorResponse` |
| PATCH | `/operators/me` | Update the signed-in operator's first or last name | `200` `StationOperatorResponse`, `422` |
| GET | `/operators` | List operators. Query: `skip` (minimum 0, default 0), `limit` (minimum 1, default 100) | `200` array of `StationOperatorResponse`, `422` |
| GET | `/operators/{operator_id}` | Get one operator by UUID | `200` `StationOperatorResponse`, `422` |

All four require a Bearer token. `PATCH /operators/me` takes [`StationOperatorUpdate`](./schemas.md#stationoperatorupdate).

## Client notes

- Store the token securely and send it on every protected request. The dashboard keeps it in browser local storage under the key `mvuvi_token` and removes it on logout.
- Always call the API over HTTPS.
- The spec does not state the token lifetime. Treat an authentication error as a signal to log in again (see [Error codes](./error-codes.md)).