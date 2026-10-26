# Code Repositories

The MvuviGo platform is split into multiple distinct repositories to separate concerns, allow independent deployment, and maintain a clean architecture. 

This section outlines the structure, technologies, and setup of each repository.

## Explore Repositories

* **[Backend Repo](/repository/backend-repo)** - The FastAPI application, PostgreSQL database, and authentication logic.
* **[Frontend Repo](/repository/frontend-repo)** - The Next.js web dashboard used by station operators.
* **[IoT Server Repo](/repository/iot-server-repo)** - The Node.js/Fastify server that handles MQTT telemetry and hardware data.

### Repository Map

![MvuviGo Data Interaction](/images/flow.png)