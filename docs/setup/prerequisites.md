# Prerequisites

Install the tools needed by the component you intend to work on. The version requirements below reflect the current project documentation; confirm them against the relevant repository's README and dependency files before upgrading or changing a shared development environment.

## Required for the platform

| Tool | Used by | Documented requirement or check |
| --- | --- | --- |
| Git | All repositories | `git --version` |
| Python | `pixels-backend` | Python 3.11 or newer; check with `python3 --version` |
| `uv` | `pixels-backend` | Python package/environment manager; check with `uv --version` |
| Node.js and npm | `pixels-frontend`, `pixels-iot` and this docs site | The current docs specify Node.js 20 or 22; check with `node --version` and `npm --version`. Confirm the active repository's `engines` field if present. |
| PostgreSQL | Backend persistence | A local development service reachable by the backend; check with `psql --version` |

The backend README or project metadata is authoritative for its Python and `uv` requirements. The frontend and IoT repository lockfiles and `package.json` scripts are authoritative for their Node.js commands.

## Optional tools

- **Postman** for manual API requests; see [Postman Examples](../testing/postman-examples.md).

- **MQTTX** or another MQTT client to inspect or simulate messages only when the IoT repository documents the required broker, topics and payloads. Do not publish test data to a production broker.

- **OpenSSL** if the backend's setup instructions require local RSA key generation. Do not generate or reuse production keys for local development.

## Hardware and integration testing

A laptop-only setup can validate the API and dashboard, but it cannot prove the full device-to-rescue path. Testing LoRa, RFID, GPS, MQTT, SMS delivery or an SOS response may require the appropriate device, test broker, gateway credentials, provider sandbox or a project-approved simulator. Use a test environment and test identities only.

## Resource guidance

Running PostgreSQL, the backend, dashboard and IoT gateway together uses more memory than running one service. The project documentation recommends at least 8 GB of RAM for the complete local stack; a smaller setup may still run selected services individually.