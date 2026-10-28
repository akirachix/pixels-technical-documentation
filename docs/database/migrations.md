# Migrations

The schema is versioned with **Alembic** in `pixels-backend`. The SQLAlchemy models describe what the database should look like, and migrations are the steps that get a database there. The current version is recorded in the `alembic_version` table.

## Rules

- Every change to a SQLAlchemy model needs a new migration.

- Never edit the database by hand and leave the models behind.

- Keep one concern per migration, and keep it in the same PR as the model change.

- Read every generated migration before committing it. Autogenerate can miss renames and constraints.

- Write a working `downgrade` for every migration so it can be undone.

## Commands

Run these from the backend repository.

| Task | Command |
| --- | --- |
| Apply all migrations | `alembic upgrade head` |
| Show the current version | `alembic current` |
| List the history | `alembic history --verbose` |
| Create a migration from model changes | `alembic revision --autogenerate -m "describe the change"` |
| Undo the last migration | `alembic downgrade -1` |
| Mark an existing schema as up to date | `alembic stamp head` |

Migration files live in the Alembic `versions` folder (**TO CONFIRM** the path in `pixels-backend`).

## Adding a migration

1. Change the model in `pixels-backend`.

1. Run `alembic revision --autogenerate -m "describe the change"`.

1. Open the new file and check the `upgrade` and `downgrade` steps.

1. Run `alembic upgrade head` on your local database.

1. Run `alembic downgrade -1` and then `alembic upgrade head` again to prove both directions work.

1. Run the backend tests (`pytest`).

1. Commit the model change and the migration together.

1. Update [Key entities](./key-entities.md), [Constraints](./constraints.md) and the [entity relationship diagram](./er-diagram.md) if the schema changed.

## Common problems

| Symptom | Cause | Fix |
| --- | --- | --- |
| `relation "islands" already exists` | The tables were created before Alembic was set up on your machine. | Drop and recreate the local database, or run `alembic stamp head` and then `alembic upgrade head`. |
| Adding a unique constraint fails | The table already contains duplicate values. | Clean the duplicates first, for example in the migration itself, then upgrade again. |
| The app and the migrations disagree about the data | Alembic and the application are connected to different databases. | Make sure the connection setting in `.env` and the default in the application's database code name the same database. |

For local development, use the lower-case database name `mvuvigo` consistently in the database creation command and `DATABASE_URL`. PostgreSQL folds unquoted identifiers to lower case; a database created with a quoted mixed-case name is a different name and requires a matching connection string. Confirm the target database before running any migration.

Do not use `alembic stamp head` as a general fix for migration errors. It changes Alembic's recorded version without applying or validating the schema. Use it only after verifying that the existing database exactly matches the target revision; otherwise, recreate a disposable local database and apply migrations from the beginning. Never use this shortcut on a shared or production database.

## Production

- Take a database backup before every production migration.

- Run `alembic upgrade head` on every deploy, after the backup and before the new backend starts.

- Follow [Rollback and recovery](../deployment/deployment.md#rollback-and-recovery) if a migration has to be undone.
