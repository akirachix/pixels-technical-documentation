# Security and Reliability

The MvuviGo platform handles life-critical data. The security architecture is designed to protect fisher identities, ensure only authorized station operators can access the dashboard, and maintain system availability even when parts of the network fail.

## System Security Zones

The platform is divided into three distinct security zones to prevent unauthorized access and contain potential breaches.

![MvuviGo Secure System Architecture Diagram](/images/ssad.png)

### 1. Perimeter Layer
*   **Devices (Fisher & Responders):** Communicate via secure channels (LoRa and SMS). The SMS Gateway and MQTT Broker act as the first point of entry.
*   **Web Application Firewall (Cloudflare):** Filters malicious traffic before it reaches the API Gateway.
*   **API Gateway:** Handles Rate Limiting and Token Validation. It ensures no unauthenticated request reaches the application logic.

### 2. Application Zone
*   **FastAPI Backend:** Hosts the core business logic (Fishers, Alerts, Locations).
*   **Node.js IoT Server:** Handles high-throughput MQTT messages.
*   **Auth Service:** Strictly isolates login and JWT generation.
*   **Background Workers:** Handle asynchronous tasks like sending SMS alerts without blocking the main API.

### 3. Data Zone
*   **Primary Database (PostgreSQL):** Hosted in a private subnet, inaccessible from the public internet.
*   **Read Replicas:** Used for heavy dashboard queries so that real-time SOS inserts are never slowed down.
*   **Data Sync:** Ensures high availability and disaster recovery.

This architecture ensures that even if an attacker breaches the perimeter, they cannot directly access the database. All traffic must pass through the API Gateway and authentication layers.

## Explore Security Topics

* **[Access Control](/security/access-control)** - How authentication, 2-step login, and JWT tokens work.
* **[Data Protection](/security/data-protection)** - How sensitive data is hashed, stored, and secured in transit.
* **[Logging and Monitoring](/security/logging-and-monitoring)** - How the system tracks events, errors, and SOS alerts.
* **[Failure Handling](/security/failure-handling)** - How the system gracefully handles network drops, database failures, and device disconnects.