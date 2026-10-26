# Data Protection

Protecting the personal information of fishers and the security of the station operators is a core requirement.

## 1. Sensitive Data
The system stores Personally Identifiable Information (PII) such as fisher names, phone numbers, and live GPS coordinates. This data is strictly protected.

## 2. Encryption
*   **Encryption in Transit:** All communication between the Next.js frontend and the FastAPI backend is encrypted using **HTTPS/TLS**. MQTT traffic between the hardware devices and the Node.js server is encrypted using **MQTTS** (TLS).

## 3. Secret Management
*   **Environment Variables:** We do not hardcode secrets in the source code. Database URLs, SMTP passwords, JWT private keys, and MQTT credentials are loaded from `.env` files locally and environment config vars in production.
*   **Key Storage:** The JWT RS256 private key is stored as a PEM file locally or as a Heroku config var in production.

## 4. Database Protection
*   **SQL Injection Prevention:** Both the FastAPI backend (using SQLAlchemy ORM) and the Node.js server (using parameterized queries) prevent SQL injection. User input is never concatenated directly into SQL strings.
*   **Database Isolation:** The database is not exposed to the public internet. It only accepts connections from the backend servers on the private network.