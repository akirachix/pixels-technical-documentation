# Data Protection

Protecting the personal information of fishers and the security of the station operators is a core requirement.

## Password Hashing
We never store plain-text passwords. 
* When an operator creates an account, the FastAPI backend uses **Argon2** to hash the password with a unique salt.
* Argon2 is memory-hard and resistant to GPU brute-force attacks.

## OTP Hashing
Verification codes (OTP) are short (6 digits) and easy to guess if intercepted.
* The backend does not store the plain OTP in memory.
* It stores a SHA-256 hash of the OTP. When the user enters the code, the backend hashes it and compares the hashes using `hmac.compare_digest` to prevent timing attacks.

## Database Security
* **Parameterized Queries:** Both the FastAPI backend (via SQLAlchemy) and the Node.js IoT server use parameterized queries. This prevents SQL Injection attacks.
* **Environment Variables:** Database URLs, SMTP passwords, and JWT Private Keys are never hardcoded in the source code. They are stored in `.env` files (locally) and config vars (in production).

## Transport Security
* In production (Heroku), all communication between the web dashboard, the FastAPI backend, and the Node.js server is forced over **HTTPS**.
* MQTT communication between the hardware devices and the Node.js server uses **TLS/SSL** (MQTTS) for encryption.