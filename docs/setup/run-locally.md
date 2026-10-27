
---

# Run Locally

To run the MvuviGo platform, you need to start all three servers simultaneously. It is recommended to use the three terminal windows you opened during installation.

## Terminal 1: FastAPI Backend

cd pixels-backend
uv run --no-sync uvicorn main:app --reload