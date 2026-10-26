# Database

MvuviGo stores everything in a **PostgreSQL** database named `MvuviGo`. The backend (`pixels-backend`) talks to it through **SQLAlchemy** models, and the schema is versioned with **Alembic** migrations.

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

## Working with the database locally

The local database runs on `localhost:5432`. To create or update the tables, run the migrations from the backend repo:

```bash
alembic upgrade head
```

If you get an error such as `relation "islands" already exists`, the tables were created before Alembic was set up on your machine. Either drop and recreate your local database, or mark the existing schema as up to date with `alembic stamp head` and then upgrade.

Every change to a SQLAlchemy model needs a new migration. Do not edit the database by hand and leave the models behind.