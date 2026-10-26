# Logging and Monitoring

To ensure the system is running smoothly and to investigate issues during rescue operations, MvuviGo implements structured logging.

## Backend Logging (FastAPI)
* Every request is logged with its HTTP method, path, and response status code.
* When an OTP is generated, a log is printed (in development mode) so developers can test without an email server.
* Rate limit violations are logged automatically.

## IoT Server Logging (Node.js)
The Node.js server uses Fastify's built-in logger (Pino). It logs:
* `MQTT connected to HiveMQ`: When the server connects to the broker.
* `Trip started/completed`: When a fisher checks in or out via RFID.
* `SOS alert triggered`: When a panic button is pressed, including the Fisher ID and GPS coordinates.

## Alert Monitoring
When an SOS is triggered, the Node.js server immediately logs the event and inserts it into the `distressed_fisher_alerts` table. The Web Dashboard polls the FastAPI backend, which highlights the active alert on the map in red, ensuring operators do not miss it.