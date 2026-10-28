# Seed Data

Seed data is information needed to make a fresh database useful. The project documentation identifies island reference records and an initial station-operator account as potential setup needs, while sample fishers, wristbands, trips, locations and alerts are for local development or demos.


## Data categories

| Data | Documented purpose | Handling guidance |
| --- | --- | --- |
| Islands | Reference names and coordinates used by the product | Use an approved, sourced dataset. The exact list and source are not included here. |
| First station operator | Allows an authorized operator to access the dashboard | Create through the backend's secured account-creation process; never store a plaintext password in a seed file. Confirm the actual bootstrap flow in the backend repository. |
| Fishers, wristbands, trips and locations | Local development or demo records | Use invented identities and synthetic coordinates only. |
| SOS alerts and responders | Local workflow demonstration | Use synthetic events in a local/test environment; never replay test alerts to real responders. |

## Verify the seeding mechanism

From the backend repository root, before changing a database:

1. Read the repository README and inspect `pyproject.toml` for documented scripts or commands.

1. Inspect the Alembic migrations and search the repository for seed/fixture files or commands. Do not assume a filename or entry point.

1. Confirm whether reference data is created by a migration, an idempotent script, an API workflow or a manual approved process.

1. If a script exists, verify that it is safe to run more than once and that it cannot target production by accident.

1. Run it only against a disposable local/test database, then verify the resulting rows and record the exact command and source dataset here.

If the checked-out application repository has no seed mechanism, document that explicitly and describe the approved local setup path for the first operator and reference data. Keep this page synchronized with any later script or migration change.

## Rules

- Keep development seed data separate from production data.

- Use synthetic names, phone numbers and locations; do not copy real fisher records into a test environment.

- Never seed plaintext passwords, API keys, tokens or provider credentials.

- Make repeatable seed operations idempotent or clearly document that they are one-time operations.

- Backend tests should use isolated test fixtures rather than depending on a developer's local seed dataset.