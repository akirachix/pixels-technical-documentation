# Failure Handling

In a maritime environment, network connections drop frequently. MvuviGo is designed to fail gracefully.

## Database Failures
* **FastAPI:** If the connection to PostgreSQL drops, SQLAlchemy tests and recreates the connection automatically before executing a query.
* **Node.js:** Uses a `pg.Pool`. If a database query fails, the error is caught and logged without crashing the server, allowing it to process the next MQTT message.

## Network Failures (Edge Layer)
* **LoRa Fallback:** If a landing station loses internet, it stores the GPS and SOS packets locally. Once the internet connection is restored, it flushes the stored data to the MQTT broker.
* **Offline Frontend:** If the web dashboard loses connection to the backend, the frontend displays an error toast ("Failed to fetch") rather than crashing the entire UI.

## Email Failures
* If the SMTP server is down or credentials are invalid, the `request-code` endpoint will return an error. 
* For local development, developers can set `EMAIL_DELIVERY=console` in the `.env` file to bypass SMTP entirely and read the OTP from the terminal logs.