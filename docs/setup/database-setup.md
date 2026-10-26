
---
# Database Setup

MvuviGo uses PostgreSQL. The FastAPI backend handles the database schema and migrations using Alembic, while the IoT server only reads and writes data.

## 1. Create the Database
Ensure PostgreSQL is running, then open your terminal and create an empty database:

psql -h localhost -U postgres -c "CREATE DATABASE mvuvigo