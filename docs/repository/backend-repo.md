# Backend Repository (`pixels-backend`)

The backend repository contains the core API, database models, and business logic for the MvuviGo platform. It is responsible for serving data to the dashboard, managing fishers, tracking alerts, and handling operator authentication.

**Technology Stack:**
*   **Framework:** Python 3.11 / FastAPI
*   **Database:** PostgreSQL (via SQLAlchemy ORM)
*   **Migrations:** Alembic
*   **Authentication:** Argon2 (passwords), RS256 JWT (sessions)
*   **Testing:** Pytest (in-memory SQLite for speed)

## Directory Structure

| Directory / File | Description |
| :--- | :--- |
| `pixels-backend/` | |
| `├── alembic/` | Database migration scripts |
| `├── core/` | Configuration, security, and rate limiting |
| `├── models/` | SQLAlchemy database schemas |
| `├── repositories/` | Database access layer (SQL queries) |
| `├── routers/` | FastAPI endpoints (auth, fishers, alerts) |
| `├── schemas/` | Pydantic validation schemas |
| `├── services/` | Business logic and email sending |
| `├── tests/` | Pytest suite |
| `├── main.py` | Application entry point |
| `└── pyproject.toml` | Dependencies and project metadata |