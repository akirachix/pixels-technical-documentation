# Error codes

## Status codes

| Code | Meaning | When |
| --- | --- | --- |
| `200` | OK | Successful read, update or action |
| `201` | Created | Successful create (fishers, islands, trips, wristbands, alerts, responders, check-in, SOS trigger) |
| `204` | No Content | Successful delete. The response has no body |
| `422` | Validation Error | A path, query or body value failed validation |

The OpenAPI spec declares only the codes above. The codes below are standard FastAPI behaviour and are not declared per endpoint, so confirm them against your deployment.

| Code | Meaning | Typical cause |
| --- | --- | --- |
| `401` or `403` | Not authenticated or not allowed | Missing, invalid or expired Bearer token on a protected endpoint |
| `404` | Not found | No record exists for the ID in the path |
| `500` | Server error | Unexpected failure on the server |

## Validation errors (422)

The body is [`HTTPValidationError`](./schemas.md#httpvalidationerror). Each entry in `detail` names the invalid field in `loc`.

```json
{
  "detail": [
    {
      "loc": ["body", "phone_number"],
      "msg": "String should have at least 7 characters",
      "type": "string_too_short"
    }
  ]
}
```

Common causes:

| Cause | Example |
| --- | --- |
| Missing required field | Creating a fisher without `phone_number` |
| Length out of range | `full_name` over 100 characters, `rfid_tag` under 3 |
| Bad format | Non-UUID in a path, malformed email, `code` not 4 to 16 letters or digits |
| Value out of range | `latitude` outside -90 to 90, `total_fishers` below 1 |
| Not an allowed value | `status` other than `active` or `completed`, `search_radius_m` not 5000, 10000, 15000 or 20000 |

## Other errors

Errors raised by application logic use the standard FastAPI format with a string in `detail`:

```json
{ "detail": "Not found" }
```

Clients should read `detail` as either a string or, for `422`, an array.

## Business rules that can cause errors

These rules come from the data model. The spec does not declare which status code each returns.

| Rule | Affects |
| --- | --- |
| Operator email must be unique | `POST /auth/signup` |
| Wristband `rfid_tag` must be unique | `POST /api/v1/wristbands/` |
| A wristband cannot be held by two fishers at once | `POST /api/v1/wristbands/assign` |
| One alert per location | `POST /api/v1/alerts/` |
| A rescuer can be recorded only once per alert | `POST /api/v1/alert-responders/` |
| A fisher with an active trip is checked out, not checked in again | `POST /trips/checkin` |

## Handling errors in clients

- On `401` or `403`, clear the stored token and send the user to login.
- On `422`, show the `msg` of each `detail` entry next to the field named in `loc`.
- On `5xx`, retry reads after a short delay. Do not blindly retry `POST` requests such as assign, check-in or SOS trigger, because they may already have been applied.
- A `204` response has no body, so do not parse it as JSON.