
---

# IoT Server Repository (`pixels-iot`)

The IoT server is a lightweight Node.js application that acts as the bridge between the physical hardware (wristbands and landing stations) and the PostgreSQL database. 

**Technology Stack:**
*   **Runtime:** Node.js
*   **Framework:** Fastify (chosen for high performance and low overhead)
*   **Protocol:** MQTT (via `mqtt` package) using TLS
*   **Database:** PostgreSQL (via `pg` Pool)

## Directory Structure

| Directory / File | Description |
| :--- | :--- |
| `pixels-iot/` | |
| `├── isrgrootx1.pem` | Root certificate for secure MQTT connection |
| `├── server.js` | Main application code (MQTT listener & DB logic) |
| `├── seed.js` | Script to populate test hardware data |
| `└── package.json` | Dependencies |