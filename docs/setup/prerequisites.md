# Prerequisites

Before you can run MvuviGo locally, you need the following tools installed on your machine.

## Required Software

1. **Python 3.11+**
   * Required for the FastAPI backend.
   * You also need `uv` installed for fast Python package management. (`curl -LsSf https://astral.sh/uv/install.sh | sh`)
2. **Node.js (v20 or v22)**
   * Required for both the Next.js frontend and the Node.js IoT server.
   * `npm` comes pre-installed with Node.js.
3. **PostgreSQL**
   * Required for the main database.
   * Ensure the PostgreSQL service is running on your machine (usually on port 5432).
4. **Git**
   * Required to clone the repositories.

## Optional Tools
* **Postman**: For testing the FastAPI endpoints manually.
* **MqttX**: A desktop client for publishing and subscribing to MQTT topics to simulate hardware devices.
* **OpenSSL**: Required to generate the RSA keys for JWT authentication (usually pre-installed on Linux/macOS).

## Hardware Requirements
* At least 8GB of RAM is recommended, as running PostgreSQL, Next.js, FastAPI, and Node.js simultaneously can be resource-intensive.