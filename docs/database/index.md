# Database

MvuviGo stores its application data in **PostgreSQL**. For local development, this documentation uses the database name `mvuvigo`; the backend (`pixels-backend`) accesses it through **SQLAlchemy**, and the schema is versioned with **Alembic** migrations.

## What the database holds

| Area | Tables |
| --- | --- |
| People and devices | `fishers`, `wristbands`, `station_operators` |
| Fishing activity | `trips`, `locations`, `islands` |
| Emergencies | `distressed_fisher_alerts`, `alert_responders` |
| Schema tracking | `alembic_version` |

## In this section

- [Entity relationship diagram](./er-diagram.md): how the tables connect.

- [Key entities](./key-entities.md): what each table stores and how an alert moves through them.
- [Constraints](./constraints.md): keys, unique rules, required columns and allowed values.
- [Migrations](./migrations.md): how the schema is versioned and changed with Alembic.
- [Seed data](./seed-data.md): the data a fresh database needs and how it is loaded.

- [Constraints](./constraints.md): keys, unique rules, required columns and allowed values.

- [Migrations](./migrations.md): how the schema is versioned and changed with Alembic.

- [Seed data](./seed-data.md): the data a fresh database needs and how it is loaded.

## Working with the database locally

The local database runs on `localhost:5432`. To create or update the tables, run the migrations from the backend repo:

```bash
alembic upgrade head
```

If you get an error such as `relation "islands" already exists`, the tables may have been created before Alembic was set up. For a disposable local database, recreate it and apply migrations from the beginning. `alembic stamp head` only records a version; use it only after verifying that the existing schema exactly matches that revision. Never drop or stamp a shared or production database as a troubleshooting shortcut.

Every change to a SQLAlchemy model needs a new migration. Do not edit the database by hand and leave the models behind.