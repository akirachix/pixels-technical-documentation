# Security and Reliability

The MvuviGo platform handles life-critical data. The security architecture is designed to protect fisher identities, ensure only authorized station operators can access the dashboard, and maintain system availability even when parts of the network fail.

## System Security Zones

![MvuviGo Secure System Architecture Diagram](/images/ssad.png)

The platform is divided into three distinct security zones to prevent unauthorized access and contain potential breaches:

1. **Perimeter Layer:** Handles public internet traffic. A Web Application Firewall and API Gateway protect the backend. Unauthenticated traffic is dropped here.
2. **Application Zone:** Contains the FastAPI backend, Node.js IoT server, and Auth Services. 
3. **Data Zone:** A private subnet where the PostgreSQL database resides. It is completely inaccessible from the public internet and only accepts connections from the Application Zone.

## Incident Handling & Monitoring
Because MvuviGo is a safety-critical system, detecting and responding to incidents is a core requirement.

*   **Logging:** Both FastAPI and Node.js use structured JSON logging. Every request, authentication attempt, and MQTT payload is logged with a timestamp and IP address.
*   **Detection:** The system monitors for unusual patterns, such as repeated `401 Unauthorized` responses (indicating a brute-force attack) or invalid MQTT payloads.
*   **Response:** If the database goes offline, the API returns a `503 Service Unavailable` to protect data integrity. If an SOS alert fails to process, it is logged as a `CRITICAL` incident for immediate manual review.
*   **Credential Rotation:** All database passwords, SMTP credentials, and JWT private keys are stored in environment variables (`.env` or Heroku Config Vars). They can be rotated without changing a single line of code.
*   **Recovery:** Database backups are handled via the hosting provider (e.g., Heroku Postgres automated backups) to ensure data can be restored in the event of corruption.

## Explore Security Topics

* **[Access Control](/security/access-control)** - Authentication, JWT tokens, and session expiration.
* **[Data Protection](/security/data-protection)** - Password hashing, encryption in transit, and database protection.
* **[Application Security](/security/application-security)** - Rate limiting, CORS, input validation, and integration security.
* **[Failure Handling](/security/failure-handling)** - How the system gracefully handles network drops and device disconnects.