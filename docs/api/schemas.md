# Schemas

Request and response models, grouped like the endpoints.

**Notation:** `UUID` and `date-time` are strings in those formats. `email` is a string in email format. **Required: No** means the field can be left out of a request or can be `null` in a response. `...Update` models make every field optional, so send only what changes.

## Shared

### HTTPValidationError

Body of every `422` response.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `detail` | array of `ValidationError` | No | One entry per invalid field |

### ValidationError

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `loc` | array of string or integer | Yes | Path to the invalid field, for example `["body", "email"]` |
| `msg` | string | Yes | Human-readable message |
| `type` | string | Yes | Error type |
| `input` | any | No | The rejected value |
| `ctx` | object | No | Extra context |

### MessageResponse

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `message` | string | Yes | |

## Authentication and operators

### StationOperatorSignup

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `first_name` | string | Yes | 1 to 100 characters |
| `last_name` | string | Yes | 1 to 100 characters |
| `email` | email | Yes | Unique per operator |
| `password` | string | Yes | 1 to 128 characters. Stored hashed |

### LoginRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `email` | email | Yes | |
| `password` | string | Yes | 1 to 128 characters |

### RequestCodeRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `email` | email | Yes | |

### VerifyOTPRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `email` | email | Yes | |
| `code` | string | Yes | 4 to 16 letters or digits (`^[A-Za-z0-9]{4,16}$`) |

### PasswordResetTokenResponse

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `reset_token` | string | Yes | Send as `token` to the confirm endpoint |
| `token_type` | string | No | Default `bearer` |

### PasswordResetConfirmRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `token` | string | Yes | The `reset_token` from the verify step |
| `new_password` | string | Yes | 1 to 128 characters |

### StationOperatorUpdate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `first_name` | string | No | 1 to 100 characters |
| `last_name` | string | No | 1 to 100 characters |

### StationOperatorResponse

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `operator_id` | UUID | Yes | |
| `first_name` | string | Yes | |
| `last_name` | string | Yes | |
| `email` | string | Yes | |
| `created_at` | date-time | Yes | |
| `updated_at` | date-time | Yes | Last change to the account |

## Fishers

### FisherCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `full_name` | string | Yes | 1 to 100 characters |
| `phone_number` | string | Yes | 7 to 20 characters. Used to send SMS to and call a rescuer |

### FisherUpdate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `full_name` | string | No | |
| `phone_number` | string | No | |

### FisherRead

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `fisher_id` | UUID | Yes | |
| `operator_id` | UUID | Yes | Operator who registered the fisher |
| `full_name` | string | Yes | 1 to 100 characters |
| `phone_number` | string | Yes | 7 to 20 characters |
| `created_at` | date-time | Yes | |
| `updated_at` | date-time | Yes | |
| `trips` | array of `FisherTripRead` | No | Default empty |
| `sos_alerts` | array of `SOSAlertRead` | No | Default empty |

### FisherTripRead

Trip summary nested in `FisherRead` (named `schemas__fishers__TripRead` in the spec). Not the same as [`TripRead`](#tripread).

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `trip_id` | UUID | Yes | |
| `checkin_at` | date-time | Yes | |
| `checkout_at` | date-time or null | Yes | Null while the trip is active |
| `total_fishers` | integer or null | Yes | |

### SOSAlertRead

Alert summary nested in `FisherRead`.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `alert_id` | UUID | Yes | |
| `triggered_at` | date-time | Yes | |
| `status` | string | Yes | `triggered`, `acknowledged` or `resolved` |
| `location_name` | string or null | No | |
| `response_time` | string or null | No | |

## Islands

### IslandCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `island_name` | string | Yes | 1 to 100 characters |
| `island_latitude` | number | Yes | -90 to 90 |
| `island_longitude` | number | Yes | -180 to 180 |

### IslandUpdate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `island_name` | string | No | |
| `island_latitude` | number | No | -90 to 90 |
| `island_longitude` | number | No | -180 to 180 |

### IslandRead

All [`IslandCreate`](#islandcreate) fields, plus:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `island_id` | UUID | Yes | |

## Trips

### TripCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `fisher_id` | UUID | Yes | |
| `total_fishers` | integer | Yes | Minimum 1. Number of fishers on the trip |
| `status` | string | No | `active` or `completed`. Default `active` |
| `checkin_at` | date-time or null | No | |

### TripUpdate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `total_fishers` | integer or null | No | Minimum 1 |
| `checkout_at` | date-time or null | No | |
| `status` | string or null | No | `active` or `completed` |

### TripRead

Named `schemas__trip__TripRead` in the spec.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `trip_id` | UUID | Yes | |
| `fisher_id` | UUID | Yes | |
| `total_fishers` | integer | Yes | Minimum 1 |
| `status` | string | No | `active` or `completed`. Default `active` |
| `checkin_at` | date-time | Yes | |
| `checkout_at` | date-time or null | No | Null until check-out |

## Wristbands

### WristbandCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `rfid_tag` | string | Yes | 3 to 100 characters. Unique |

### WristbandAssignRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `wristband_id` | UUID | Yes | |
| `fisher_id` | UUID | Yes | |

### WristbandUnassignRequest

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `wristband_id` | UUID | Yes | |

### WristbandRead

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `wristband_id` | UUID | Yes | |
| `rfid_tag` | string | Yes | 3 to 100 characters |
| `status` | string | Yes | Assigned or not assigned |
| `fisher_id` | UUID or null | No | Null when unassigned |
| `assigned_at` | date-time or null | No | |
| `created_at` | date-time | Yes | |

## Locations

### LocationRead

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `location_id` | UUID | Yes | |
| `fisher_id` | UUID | Yes | |
| `trip_id` | UUID or null | No | Null if the fisher had no active trip |
| `latitude` | number | Yes | -90 to 90 |
| `longitude` | number | Yes | -180 to 180 |
| `recorded_at` | date-time | Yes | |

## Alerts

### AlertCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `fisher_id` | UUID | Yes | |
| `location_id` | UUID | Yes | Location the alert refers to. One alert per location |
| `triggered_at` | date-time or null | No | |

### SOSPayload

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `fisher_id` | UUID | Yes | |
| `latitude` | number | Yes | |
| `longitude` | number | Yes | |

### AlertRead

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `alert_id` | UUID | Yes | |
| `fisher_id` | UUID | Yes | |
| `location_id` | UUID | Yes | |
| `triggered_at` | date-time | Yes | |
| `status` | string | Yes | Read-only. Worked out from the timestamps below |
| `acknowledged_at` | date-time or null | No | |
| `acknowledged_by_operator_id` | UUID or null | No | |
| `resolved_at` | date-time or null | No | |
| `fisher_name` | string or null | No | |
| `latitude` | number or null | No | |
| `longitude` | number or null | No | |
| `number_of_fishers` | integer or null | No | |

## Alert responders

### ResponderCreate

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `alert_id` | UUID | Yes | |
| `responder_fisher_id` | UUID | Yes | The rescuer. A rescuer can be recorded once per alert |
| `distance_m` | number | Yes | Metres from the rescuer to the alert location |
| `search_radius_m` | integer | Yes | One of 5000, 10000, 15000 or 20000 |
| `received_at` | date-time or null | No | |

### ResponderRead

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `alert_responder_id` | UUID | Yes | |
| `alert_id` | UUID | Yes | |
| `responder_fisher_id` | UUID | Yes | |
| `distance_m` | number | Yes | Metres |
| `search_radius_m` | integer | Yes | One of 5000, 10000, 15000 or 20000 |
| `received_at` | date-time | Yes | When the rescuer's wearable received the SOS |
| `arrived_at` | date-time or null | No | Null until the responder arrives |
| `responder_name` | string or null | No | |
| `responder_phone` | string or null | No | |
| `latitude` | number or null | No | |
| `longitude` | number or null | No | |
