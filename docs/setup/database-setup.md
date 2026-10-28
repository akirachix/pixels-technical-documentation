# Database Setup

The backend uses PostgreSQL and Alembic migrations. Use a **throwaway local development database** for these steps. Never run database creation, seed or migration commands against a production or shared database unless an authorized release procedure explicitly requires it.

## 1. Start PostgreSQL and create a local database

Ensure the PostgreSQL service is running. The example below assumes a local PostgreSQL role named `postgres` and a database named `mvuvigo`:

```bash
psql -h localhost -U postgres -c "CREATE DATABASE mvuvigo;"
```

If your local role is different, substitute it. If `mvuvigo` already exists, do not create it again; verify that it is the intended local database before proceeding.

## 2. Set the backend connection string

In `pixels-backend/.env`, configure the `DATABASE_URL` using the local username and password. The documented SQLAlchemy URL format is:

```
DATABASE_URL=postgresql+psycopg://local_user:local_password@localhost:5432/mvuvigo
```

Replace `local_user` and `local_password` with the local PostgreSQL role and password. URL-encode reserved characters in a password if required by the connection-string parser. Use the backend repository's own configuration documentation as authoritative. Do not paste a real password into source files or commit the `.env` file.

## 3. Verify the database is reachable

```bash
psql -h localhost -U local_user -d mvuvigo -c "SELECT 1;"
```

A successful check returns a one-row result containing `1`. Replace `local_user` with your local PostgreSQL role. If the command fails, confirm PostgreSQL is running, the role/password are correct, and the database name in this command matches `DATABASE_URL`.

## 4. Apply migrations

From the backend repository root, after installing its dependencies and configuring its local environment, run:

```bash
uv run alembic upgrade head
```

The migration command must target the same local database as the backend. Check the backend's README and Alembic configuration if the command differs in the checked-out version. To inspect the migration state, the documented commands are:

```bash
uv run alembic current
uv run alembic history --verbose
```

## Existing schema or migration errors

If Alembic reports that a table already exists, the schema may have been created outside the migration history. For a disposable local database, the safest option is usually to recreate that local database and apply migrations from the beginning. `alembic stamp head` only records a migration version; it does **not** create or validate tables. Use it only when you have independently verified that the existing schema exactly matches the migration at that revision.

Do not drop a database or stamp migration state in a shared environment. See [Database Migrations](../database/migrations.md) for the project migration workflow.