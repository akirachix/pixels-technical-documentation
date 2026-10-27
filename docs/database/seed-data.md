# Seed Data

Seed data is the information a fresh database needs before the system is useful. Everything else is created by people using the dashboard and by the wristbands and stations.

## What needs seeding

| Table | Why | Needed in production |
| --- | --- | --- |
| `islands` | Reference data for the fishing areas: `island_name`, `island_latitude` and `island_longitude`. | Yes |
| `station_operators` | At least one operator must exist to log in and register fishers. The password is stored as a hash, never in plain text. | Yes, the first operator only |
| `fishers`, `wristbands`, `trips`, `locations` | Sample records for local development and demos. | No |
| `distressed_fisher_alerts`, `alert_responders` | Sample alerts for local development and demos. | No |

The list of islands to load: **TO CONFIRM**.

## How seed data is loaded

**TO CONFIRM:** whether seed data is loaded by a script, by a migration or by hand, and the exact command. Document it here once decided, for example:

```bash
# TO CONFIRM: replace with the real command
python <seed-script>
```

If there is no seed mechanism yet, state "none" here and list how the first operator and the islands are created.

## Rules

- A seed script must be safe to run twice. Check for existing rows before inserting.
- Never load development sample data into production.
- Sample data uses invented names and phone numbers, never real people.
- Do not commit real passwords or real operator accounts. Create the first production operator through a secured step and store its credentials in the host's secret store.
- Backend tests create their own data and roll it back, so they do not depend on seed data.
