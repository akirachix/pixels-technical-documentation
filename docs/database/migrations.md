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
2. Run `alembic revision --autogenerate -m "describe the change"`.
3. Open the new file and check the `upgrade` and `downgrade` steps.
4. Run `alembic upgrade head` on your local database.
5. Run `alembic downgrade -1` and then `alembic upgrade head` again to prove both directions work.
6. Run the backend tests (`pytest`).
7. Commit the model change and the migration together.
8. Update [Key entities](./key-entities.md), [Constraints](./constraints.md) and the [entity relationship diagram](./er-diagram.md) if the schema changed.

## Common problems

| Symptom | Cause | Fix |
| --- | --- | --- |
| `relation "islands" already exists` | The tables were created before Alembic was set up on your machine. | Drop and recreate the local database, or run `alembic stamp head` and then `alembic upgrade head`. |
| Adding a unique constraint fails | The table already contains duplicate values. | Clean the duplicates first, for example in the migration itself, then upgrade again. |
| The app and the migrations disagree about the data | Alembic and the application are connected to different databases. | Make sure the connection setting in `.env` and the default in the application's database code name the same database. |

PostgreSQL treats names that differ only in capitals, such as `MvuviGo` and `mvuvigo`, as different databases when the name was created with quotes. The documented name is `MvuviGo`. **TO CONFIRM** the exact spelling every environment must use, and use it everywhere.

## Production

- Take a database backup before every production migration.
- Run `alembic upgrade head` on every deploy, after the backup and before the new backend starts.
- Follow [Rollback and recovery](../deployment/deployment.md#rollback-and-recovery) if a migration has to be undone.
