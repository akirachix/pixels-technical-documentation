# MvuviGo API

The MvuviGo API is the JSON REST interface of the Fisher Safety & Alert System. It gives the station dashboard and the AI Service access to fisher registration, trip tracking, wristband assignment, GPS locations, SOS alerts and rescuer coordination.


## How the API fits into the system

Wearable devices send the fisher's RFID ID, GPS position and SOS alerts to the station device. The station device publishes them to the MQTT broker, and the Mvuvi IoT Server writes them to the database. The MvuviGo API reads and updates that data for the Fisher Management dashboard and the AI Service.

The AI Service uses the API to fetch phone numbers and map data (islands), then sends SMS directions to rescuers.

The system currently serves a single landing station with one group of station operators.

## Quick start

1. Log in to get an access token (see [Authentication](./authentication.md)).
2. Send the token on every protected request:

```http
GET /api/fishers/?skip=0&limit=100 HTTP/1.1
Authorization: Bearer <access_token>
Content-Type: application/json
```

3. Handle errors using the formats in [Error codes](./error-codes.md).

## Conventions

| Topic | Convention |
| --- | --- |
| Base URL | Set per environment. All paths in this documentation are relative to it. |
| Format | JSON request and response bodies. |
| Authentication | HTTP Bearer token. See [Authentication](./authentication.md). |
| Identifiers | UUIDs. |
| Timestamps | ISO 8601 date-time strings. |
| Pagination | List endpoints take `skip` (default 0) and `limit`. Default `limit` is 100, except Islands and Locations (500). |
| Trailing slashes | Collection paths end with `/` (for example `/api/fishers/`). `/operators` and `/health` do not. Use paths exactly as documented. |
| Path prefixes | Fishers and Islands use `/api/`. Alerts, Alert Responders and Wristbands use `/api/v1/`. Trips, Locations, Auth and Operators have no prefix. |

## Documentation map

| Page | Contents |
| --- | --- |
| [Authentication](./authentication.md) | Login, one-time codes, tokens, password reset, operator accounts |
| [Endpoints](./endpoints.md) | Every endpoint, grouped by resource |
| [Schemas](./schemas.md) | Request and response models, and how they map to the data model |
| [Error codes](./error-codes.md) | Status codes and error response formats |

## Resources

| Resource | Purpose | Base path |
| --- | --- | --- |
| Operators | Station operator accounts | `/operators`, `/auth` |
| Fishers | Registered fishers, who are also the rescuers | `/api/fishers/` |
| Islands | Reference landmarks used in SMS directions | `/api/islands/` |
| Trips | Fishing trips from check-in to check-out | `/trips/` |
| Wristbands | RFID wristbands and their assignment to fishers | `/api/v1/wristbands/` |
| Locations | GPS positions recorded for fishers | `/locations/` |
| Alerts | SOS alerts raised by distressed fishers | `/api/v1/alerts/` |
| Alert responders | Rescuers linked to an alert, with distance and arrival | `/api/v1/alert-responders/` |
| System | Health check | `/health` |