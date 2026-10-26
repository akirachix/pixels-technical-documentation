# Endpoints

All paths are relative to the API base URL. Endpoints marked **Bearer** need this header:

```http
Authorization: Bearer <access_token>
```

Endpoints marked **None declared** have no security requirement in the API specification. Every endpoint with a path parameter, query parameter or request body can also return `422` (see [Error codes](./error-codes.md)).

## Summary

| Resource | Method | Path | Description | Auth |
| --- | --- | --- | --- | --- |
| System | GET | `/health` | Health check | None declared |
| Auth | POST | `/auth/signup` | Sign up | None declared |
| Auth | POST | `/auth/login` | Log in (step 1) | None declared |
| Auth | POST | `/auth/request-code` | Request a code | None declared |
| Auth | POST | `/auth/verify-otp` | Verify a one-time code | None declared |
| Auth | POST | `/auth/password-reset/request-code` | Request a password reset code | None declared |
| Auth | POST | `/auth/password-reset/verify-code` | Verify a password reset code | None declared |
| Auth | POST | `/auth/password-reset/confirm` | Confirm a password reset | None declared |
| Auth | POST | `/auth/logout` | Log out | Bearer |
| Operators | GET | `/operators/me` | Get the current operator profile | Bearer |
| Operators | PATCH | `/operators/me` | Update the current operator | Bearer |
| Operators | GET | `/operators` | List operators | Bearer |
| Operators | GET | `/operators/{operator_id}` | Get an operator by ID | Bearer |
| Fishers | GET | `/api/fishers/` | List fishers | Bearer |
| Fishers | POST | `/api/fishers/` | Create a fisher | Bearer |
| Fishers | GET | `/api/fishers/{fisher_id}` | Get a fisher | Bearer |
| Fishers | PATCH | `/api/fishers/{fisher_id}` | Update a fisher | Bearer |
| Fishers | DELETE | `/api/fishers/{fisher_id}` | Delete a fisher | Bearer |
| Islands | GET | `/api/islands/` | List islands | None declared |
| Islands | POST | `/api/islands/` | Create an island | None declared |
| Islands | GET | `/api/islands/{island_id}` | Get an island | None declared |
| Islands | PATCH | `/api/islands/{island_id}` | Update an island | None declared |
| Islands | DELETE | `/api/islands/{island_id}` | Delete an island | None declared |
| Trips | GET | `/trips/` | List trips | None declared |
| Trips | POST | `/trips/` | Create a trip | None declared |
| Trips | GET | `/trips/fisher/{fisher_id}` | List trips for a fisher | None declared |
| Trips | GET | `/trips/{trip_id}` | Get a trip | None declared |
| Trips | PATCH | `/trips/{trip_id}` | Update a trip | None declared |
| Trips | POST | `/trips/checkin` | Check in | None declared |
| Trips | POST | `/trips/{trip_id}/checkout` | Check out | None declared |
| Wristbands | GET | `/api/v1/wristbands/` | List wristbands | Bearer |
| Wristbands | POST | `/api/v1/wristbands/` | Create a wristband | Bearer |
| Wristbands | GET | `/api/v1/wristbands/{wristband_id}` | Get a wristband | Bearer |
| Wristbands | POST | `/api/v1/wristbands/assign` | Assign a wristband | Bearer |
| Wristbands | POST | `/api/v1/wristbands/unassign` | Unassign a wristband | Bearer |
| Locations | GET | `/locations/` | List locations | Bearer |
| Locations | GET | `/locations/{location_id}` | Get a location | Bearer |
| Locations | GET | `/locations/fisher/{fisher_id}` | List locations for a fisher | Bearer |
| Locations | GET | `/locations/fisher/{fisher_id}/latest` | Get the latest location for a fisher | Bearer |
| Locations | GET | `/locations/trip/{trip_id}` | List locations for a trip | Bearer |
| Alerts | GET | `/api/v1/alerts/` | List alerts | Bearer |
| Alerts | POST | `/api/v1/alerts/` | Trigger an alert | Bearer |
| Alerts | POST | `/api/v1/alerts/trigger` | Trigger an SOS | Bearer |
| Alerts | GET | `/api/v1/alerts/fisher/{fisher_id}` | List alerts for a fisher | Bearer |
| Alerts | GET | `/api/v1/alerts/{alert_id}` | Get an alert | Bearer |
| Alerts | POST | `/api/v1/alerts/{alert_id}/acknowledge` | Acknowledge an alert | Bearer |
| Alerts | POST | `/api/v1/alerts/{alert_id}/resolve` | Resolve an alert | Bearer |
| Alerts | DELETE | `/api/v1/alerts/{alert_id}` | Delete an alert | Bearer |
| Alert responders | GET | `/api/v1/alert-responders/` | List responders | Bearer |
| Alert responders | POST | `/api/v1/alert-responders/` | Record a responder | Bearer |
| Alert responders | GET | `/api/v1/alert-responders/alert/{alert_id}` | List responders for an alert | Bearer |
| Alert responders | GET | `/api/v1/alert-responders/alert/{alert_id}/closest` | Get the closest responder | Bearer |
| Alert responders | GET | `/api/v1/alert-responders/fisher/{fisher_id}` | List responders for a fisher | Bearer |
| Alert responders | GET | `/api/v1/alert-responders/{alert_responder_id}` | Get a responder | Bearer |
| Alert responders | POST | `/api/v1/alert-responders/{alert_responder_id}/arrived` | Mark a responder as arrived | Bearer |
| Alert responders | DELETE | `/api/v1/alert-responders/{alert_responder_id}` | Delete a responder | Bearer |

## Conventions

| Topic | Convention |
| --- | --- |
| Format | JSON request and response bodies. |
| Identifiers | Path and body IDs are UUIDs. |
| Timestamps | ISO 8601 `date-time` strings. |
| Pagination | List endpoints take `skip` (default 0) and `limit`. Default `limit` is 100, except Islands and Locations (500). The spec declares no maximum. |
| Paths | Use paths exactly as written. Collection paths such as `/api/fishers/` and `/trips/` end with `/`. |
| Success codes | `200` for reads, updates and actions. `201` for creates. `204` for deletes (no body). |

---

## System

### Health check

`GET /health`

| | |
| --- | --- |
| Auth | None declared |
| Response `200` | JSON object whose values are strings |

---

## Authentication

Full flows, examples and client notes are in [Authentication](./authentication.md).

### Sign up

`POST /auth/signup` · None declared

| | |
| --- | --- |
| Body | [`StationOperatorSignup`](./schemas.md#stationoperatorsignup) |
| Response `200` | [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) |

### Log in (step 1)

`POST /auth/login` · None declared

| | |
| --- | --- |
| Body | [`LoginRequest`](./schemas.md#loginrequest) |
| Response `200` | [`MessageResponse`](./schemas.md#messageresponse) |

### Request a code

`POST /auth/request-code` · None declared

| | |
| --- | --- |
| Body | [`RequestCodeRequest`](./schemas.md#requestcoderequest) |
| Response `200` | [`MessageResponse`](./schemas.md#messageresponse) |

### Verify a one-time code

`POST /auth/verify-otp` · None declared

| | |
| --- | --- |
| Body | [`VerifyOTPRequest`](./schemas.md#verifyotprequest) |
| Response `200` | Body not declared in the spec |

### Request a password reset code

`POST /auth/password-reset/request-code` · None declared

| | |
| --- | --- |
| Body | [`RequestCodeRequest`](./schemas.md#requestcoderequest) |
| Response `200` | [`MessageResponse`](./schemas.md#messageresponse) |

### Verify a password reset code

`POST /auth/password-reset/verify-code` · None declared

| | |
| --- | --- |
| Body | [`VerifyOTPRequest`](./schemas.md#verifyotprequest) |
| Response `200` | [`PasswordResetTokenResponse`](./schemas.md#passwordresettokenresponse) |

### Confirm a password reset

`POST /auth/password-reset/confirm` · None declared

| | |
| --- | --- |
| Body | [`PasswordResetConfirmRequest`](./schemas.md#passwordresetconfirmrequest) |
| Response `200` | [`MessageResponse`](./schemas.md#messageresponse) |

### Log out

`POST /auth/logout` · Bearer

| | |
| --- | --- |
| Response `200` | [`MessageResponse`](./schemas.md#messageresponse) |

---

## Operators

All Operators endpoints require Bearer.

### Get the current operator profile

`GET /operators/me`

| | |
| --- | --- |
| Response `200` | [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) |

### Update the current operator

`PATCH /operators/me`

| | |
| --- | --- |
| Body | [`StationOperatorUpdate`](./schemas.md#stationoperatorupdate) |
| Response `200` | [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) |

### List operators

`GET /operators`

| Query | Type | Default | Constraint |
| --- | --- | --- | --- |
| `skip` | integer | 0 | Minimum 0 |
| `limit` | integer | 100 | Minimum 1 |

| | |
| --- | --- |
| Response `200` | Array of [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) |

### Get an operator by ID

`GET /operators/{operator_id}`

| Path | Type |
| --- | --- |
| `operator_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`StationOperatorResponse`](./schemas.md#stationoperatorresponse) |

---

## Fishers

All Fishers endpoints require Bearer.

### List fishers

`GET /api/fishers/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 100 |

| | |
| --- | --- |
| Response `200` | Array of [`FisherRead`](./schemas.md#fisherread) |

### Create a fisher

`POST /api/fishers/`

| | |
| --- | --- |
| Body | [`FisherCreate`](./schemas.md#fishercreate) |
| Response `201` | [`FisherRead`](./schemas.md#fisherread) |

```json
{
  "full_name": "John Mwangi",
  "phone_number": "+254700000000"
}
```

### Get a fisher

`GET /api/fishers/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`FisherRead`](./schemas.md#fisherread), which includes the fisher's `trips` and `sos_alerts` |

### Update a fisher

`PATCH /api/fishers/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Body | [`FisherUpdate`](./schemas.md#fisherupdate) (all fields optional) |
| Response `200` | [`FisherRead`](./schemas.md#fisherread) |

### Delete a fisher

`DELETE /api/fishers/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `204` | No body |

---

## Islands

No Islands endpoint declares authentication in the spec.

### List islands

`GET /api/islands/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 500 |

| | |
| --- | --- |
| Response `200` | Array of [`IslandRead`](./schemas.md#islandread) |

### Create an island

`POST /api/islands/`

| | |
| --- | --- |
| Body | [`IslandCreate`](./schemas.md#islandcreate) |
| Response `201` | [`IslandRead`](./schemas.md#islandread) |

```json
{
  "island_name": "Kisite",
  "island_latitude": -4.7167,
  "island_longitude": 39.3667
}
```

### Get an island

`GET /api/islands/{island_id}`

| Path | Type |
| --- | --- |
| `island_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`IslandRead`](./schemas.md#islandread) |

### Update an island

`PATCH /api/islands/{island_id}`

| Path | Type |
| --- | --- |
| `island_id` | UUID |

| | |
| --- | --- |
| Body | [`IslandUpdate`](./schemas.md#islandupdate) (all fields optional) |
| Response `200` | [`IslandRead`](./schemas.md#islandread) |

### Delete an island

`DELETE /api/islands/{island_id}`

| Path | Type |
| --- | --- |
| `island_id` | UUID |

| | |
| --- | --- |
| Response `204` | No body |

---

## Trips

No Trips endpoint declares authentication in the spec. Trip `status` is `active` or `completed`.

### List trips

`GET /trips/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 100 |

| | |
| --- | --- |
| Response `200` | Array of [`TripRead`](./schemas.md#tripread) |

### Create a trip

`POST /trips/`

| | |
| --- | --- |
| Body | [`TripCreate`](./schemas.md#tripcreate) |
| Response `201` | [`TripRead`](./schemas.md#tripread) |

```json
{
  "fisher_id": "a1b2c3d4-0000-4000-8000-123456789abc",
  "total_fishers": 3
}
```

### List trips for a fisher

`GET /trips/fisher/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `200` | Array of [`TripRead`](./schemas.md#tripread) |

### Get a trip

`GET /trips/{trip_id}`

| Path | Type |
| --- | --- |
| `trip_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`TripRead`](./schemas.md#tripread) |

### Update a trip

`PATCH /trips/{trip_id}`

| Path | Type |
| --- | --- |
| `trip_id` | UUID |

| | |
| --- | --- |
| Body | [`TripUpdate`](./schemas.md#tripupdate) (all fields optional) |
| Response `200` | [`TripRead`](./schemas.md#tripread) |

### Check in

`POST /trips/checkin`

Both values are **query parameters**, not a request body.

| Query | Type | Required |
| --- | --- | --- |
| `fisher_id` | UUID | Yes |
| `total_fishers` | integer | Yes |

| | |
| --- | --- |
| Response `201` | [`TripRead`](./schemas.md#tripread) |

### Check out

`POST /trips/{trip_id}/checkout`

| Path | Type |
| --- | --- |
| `trip_id` | UUID |

| | |
| --- | --- |
| Body | None |
| Response `200` | [`TripRead`](./schemas.md#tripread) |

---

## Wristbands

All Wristbands endpoints require Bearer. The assign and unassign endpoints take their IDs in the **request body**, not in the path.

### List wristbands

`GET /api/v1/wristbands/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 100 |

| | |
| --- | --- |
| Response `200` | Array of [`WristbandRead`](./schemas.md#wristbandread) |

### Create a wristband

`POST /api/v1/wristbands/`

| | |
| --- | --- |
| Body | [`WristbandCreate`](./schemas.md#wristbandcreate) |
| Response `201` | [`WristbandRead`](./schemas.md#wristbandread) |

```json
{
  "rfid_tag": "RFID-000123"
}
```

### Get a wristband

`GET /api/v1/wristbands/{wristband_id}`

| Path | Type |
| --- | --- |
| `wristband_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`WristbandRead`](./schemas.md#wristbandread) |

### Assign a wristband

`POST /api/v1/wristbands/assign`

| | |
| --- | --- |
| Body | [`WristbandAssignRequest`](./schemas.md#wristbandassignrequest) |
| Response `200` | [`WristbandRead`](./schemas.md#wristbandread) |

```json
{
  "wristband_id": "3f2a9c1d-5b7d-4e8a-9c21-7d4e5f6a8b90",
  "fisher_id": "a1b2c3d4-0000-4000-8000-123456789abc"
}
```

### Unassign a wristband

`POST /api/v1/wristbands/unassign`

| | |
| --- | --- |
| Body | [`WristbandUnassignRequest`](./schemas.md#wristbandunassignrequest) |
| Response `200` | [`WristbandRead`](./schemas.md#wristbandread) |

```json
{
  "wristband_id": "3f2a9c1d-5b7d-4e8a-9c21-7d4e5f6a8b90"
}
```

---

## Locations

All Locations endpoints require Bearer. There are no create, update or delete endpoints for locations.

### List locations

`GET /locations/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 500 |

| | |
| --- | --- |
| Response `200` | Array of [`LocationRead`](./schemas.md#locationread) |

### Get a location

`GET /locations/{location_id}`

| Path | Type |
| --- | --- |
| `location_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`LocationRead`](./schemas.md#locationread) |

### List locations for a fisher

`GET /locations/fisher/{fisher_id}`

| Parameter | In | Type | Required | Default |
| --- | --- | --- | --- | --- |
| `fisher_id` | path | UUID | Yes | |
| `limit` | query | integer | No | 500 |

| | |
| --- | --- |
| Response `200` | Array of [`LocationRead`](./schemas.md#locationread) |

### Get the latest location for a fisher

`GET /locations/fisher/{fisher_id}/latest`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`LocationRead`](./schemas.md#locationread) |

### List locations for a trip

`GET /locations/trip/{trip_id}`

| Path | Type |
| --- | --- |
| `trip_id` | UUID |

| | |
| --- | --- |
| Response `200` | Array of [`LocationRead`](./schemas.md#locationread) |

---

## Alerts

All Alerts endpoints require Bearer.

### List alerts

`GET /api/v1/alerts/`

| Query | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `skip` | integer | No | 0 | |
| `limit` | integer | No | 100 | |
| `status_filter` | string | No | None | Allowed values are not declared in the spec. |

| | |
| --- | --- |
| Response `200` | Array of [`AlertRead`](./schemas.md#alertread) |

### Trigger an alert

`POST /api/v1/alerts/`

| | |
| --- | --- |
| Body | [`AlertCreate`](./schemas.md#alertcreate) |
| Response `201` | [`AlertRead`](./schemas.md#alertread) |

```json
{
  "fisher_id": "a1b2c3d4-0000-4000-8000-123456789abc",
  "location_id": "9e8d7c6b-0000-4000-8000-bbbbbbbbbbbb"
}
```

### Trigger an SOS

`POST /api/v1/alerts/trigger`

| | |
| --- | --- |
| Body | [`SOSPayload`](./schemas.md#sospayload) |
| Response `201` | Body not declared in the spec |

```json
{
  "fisher_id": "a1b2c3d4-0000-4000-8000-123456789abc",
  "latitude": -4.0435,
  "longitude": 39.6682
}
```

### List alerts for a fisher

`GET /api/v1/alerts/fisher/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `200` | Array of [`AlertRead`](./schemas.md#alertread) |

### Get an alert

`GET /api/v1/alerts/{alert_id}`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`AlertRead`](./schemas.md#alertread) |

### Acknowledge an alert

`POST /api/v1/alerts/{alert_id}/acknowledge`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Body | None |
| Response `200` | [`AlertRead`](./schemas.md#alertread) |

### Resolve an alert

`POST /api/v1/alerts/{alert_id}/resolve`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Body | None |
| Response `200` | [`AlertRead`](./schemas.md#alertread) |

### Delete an alert

`DELETE /api/v1/alerts/{alert_id}`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Response `204` | No body |

---

## Alert responders

All Alert responders endpoints require Bearer.

### List responders

`GET /api/v1/alert-responders/`

| Query | Type | Default |
| --- | --- | --- |
| `skip` | integer | 0 |
| `limit` | integer | 100 |

| | |
| --- | --- |
| Response `200` | Array of [`ResponderRead`](./schemas.md#responderread) |

### Record a responder

`POST /api/v1/alert-responders/`

| | |
| --- | --- |
| Body | [`ResponderCreate`](./schemas.md#respondercreate) |
| Response `201` | [`ResponderRead`](./schemas.md#responderread) |

`search_radius_m` must be 5000, 10000, 15000 or 20000.

```json
{
  "alert_id": "0c1d2e3f-0000-4000-8000-aaaaaaaaaaaa",
  "responder_fisher_id": "a1b2c3d4-0000-4000-8000-123456789abc",
  "distance_m": 1850.5,
  "search_radius_m": 5000
}
```

### List responders for an alert

`GET /api/v1/alert-responders/alert/{alert_id}`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Response `200` | Array of [`ResponderRead`](./schemas.md#responderread) |

### Get the closest responder

`GET /api/v1/alert-responders/alert/{alert_id}/closest`

| Path | Type |
| --- | --- |
| `alert_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`ResponderRead`](./schemas.md#responderread) |

### List responders for a fisher

`GET /api/v1/alert-responders/fisher/{fisher_id}`

| Path | Type |
| --- | --- |
| `fisher_id` | UUID |

| | |
| --- | --- |
| Response `200` | Array of [`ResponderRead`](./schemas.md#responderread) |

### Get a responder

`GET /api/v1/alert-responders/{alert_responder_id}`

| Path | Type |
| --- | --- |
| `alert_responder_id` | UUID |

| | |
| --- | --- |
| Response `200` | [`ResponderRead`](./schemas.md#responderread) |

### Mark a responder as arrived

`POST /api/v1/alert-responders/{alert_responder_id}/arrived`

| Path | Type |
| --- | --- |
| `alert_responder_id` | UUID |

| | |
| --- | --- |
| Body | None |
| Response `200` | [`ResponderRead`](./schemas.md#responderread) |

### Delete a responder

`DELETE /api/v1/alert-responders/{alert_responder_id}`

| Path | Type |
| --- | --- |
| `alert_responder_id` | UUID |

| | |
| --- | --- |
| Response `204` | No body |