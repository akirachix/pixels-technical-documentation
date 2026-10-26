# Constraints

This page lists the rules the database enforces on its data. Items marked **TO CONFIRM** must be checked against the real schema before this page is treated as final.

To inspect the real constraints of a table, connect with `psql` and run:

```sql
\d fishers
```

Use `\d+` with no table name to list every table. Update this page whenever a migration adds, changes or removes a constraint.

## Primary keys

Every table has a single primary key. It is the bold column in the [entity relationship diagram](./er-diagram.md).

## Foreign keys

| Table | Column | References | Meaning |
| --- | --- | --- | --- |
| `fishers` | `operator_id` | `station_operators` | The operator who registered the fisher. |
| `wristbands` | `fisher_id` | `fishers` | The fisher the wristband is assigned to. |
| `trips` | `fisher_id` | `fishers` | The fisher taking the trip. |
| `locations` | `trip_id` | `trips` | The trip the GPS point belongs to. |
| `locations` | `fisher_id` | `fishers` | The fisher the GPS point belongs to. |
| `distressed_fisher_alerts` | `fisher_id` | `fishers` | The fisher in distress. |
| `distressed_fisher_alerts` | `location_id` | `locations` | Where the fisher was when the alert was raised. |
| `distressed_fisher_alerts` | `acknowledged_by_operator_id` | `station_operators` | The operator who acknowledged the alert. |
| `alert_responders` | `alert_id` | `distressed_fisher_alerts` | The alert being responded to. |
| `alert_responders` | `responder_fisher_id` | `fishers` | The nearby fisher asked to help. |

`islands` and `alembic_version` have no foreign keys.

## Unique constraints

| Table | Column(s) | Purpose | Status |
| --- | --- | --- | --- |
| `fishers` | `phone_number` | No two fishers share a phone number. Adding this constraint to a database that already holds duplicates fails, so clean the data first. | **TO CONFIRM** |
| `wristbands` | `rfid_tag` | One physical tag maps to one wristband record. | **TO CONFIRM** |
| `station_operators` | `email` | One account per email address, used to log in. | **TO CONFIRM** |
| `alert_responders` | `alert_id`, `responder_fisher_id` | A fisher is asked to respond to a given alert only once. | **TO CONFIRM** |

## Required and optional columns

| Column | Rule |
| --- | --- |
| `station_operators.password_hash` | Required. Passwords are stored only as hashes, never in plain text. |
| `distressed_fisher_alerts.resolved_at` | Empty while the alert is open. Setting it closes the alert. |
| `distressed_fisher_alerts.acknowledged_by_operator_id`, `acknowledged_at` | Empty until an operator acknowledges the alert. **TO CONFIRM** |
| `alert_responders.arrived_at` | Empty until the responder reaches the fisher in distress. **TO CONFIRM** |
| `trips.checkout_at` | Empty until the trip ends. **TO CONFIRM** |
| All other columns | **TO CONFIRM** which are required. |

## Allowed values

| Column | Allowed values | Enforced by |
| --- | --- | --- |
| `wristbands.status` | **TO CONFIRM** | **TO CONFIRM** (database enum or check, or application only) |
| `trips.status` | **TO CONFIRM** | **TO CONFIRM** |

## Deletion behaviour

**TO CONFIRM:** what happens to dependent rows when a fisher, trip or operator is deleted (cascade, restrict or set null). Alerts, locations and responder records are emergency history, so deleting a fisher should not silently remove them. Prefer restricting deletes on rows that alerts depend on.

## Indexes

**TO CONFIRM** which indexes exist beyond the primary keys. Lookups worth indexing are the latest location per fisher (`locations` by `fisher_id` and `recorded_at`) and open alerts (`distressed_fisher_alerts` where `resolved_at` is empty).

## Rules the application enforces

Some rules live in the backend rather than the database:

- An alert is open until `resolved_at` is set.
- Nearest responders and response status are calculated from the timestamps, not stored.
- Passwords are hashed before they reach the database.
