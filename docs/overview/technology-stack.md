# Technology Stack

| Component | Technology | Purpose | Verification |
|---|---|---|---|
| Frontend | Next.js, JavaScript/JSX, CSS | Web dashboard | Check `package.json` and lockfile |
| Backend | FastAPI, Python | HTTP API and server-side processing | Check Python project metadata |
| Validation | Pydantic | Request/response schemas | Check installed version and schemas |
| ORM | SQLAlchemy | Database mapping and queries | Check model and session setup |
| Database | PostgreSQL | Persistent records | Confirm environment topology |
| Testing | pytest | Backend tests | Inspect configured test commands |
| Linting | Ruff | Python linting/formatting | Inspect `pyproject.toml` |
| Environment | uv | Python dependencies/environment | Inspect lockfile and README |
| SMS | sms Leopard | Outbound SMS integration | Confirm SDK/API version |
| Station controller | ESP32 | Intended device control | Confirm exact board/firmware |
| Identification | RFID | Intended station identification | Confirm reader/tag type |
| Radio | LoRa | Intended field communication | Confirm frequency and protocol |

