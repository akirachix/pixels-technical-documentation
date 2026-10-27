# Application Security

This document outlines the controls implemented to protect the application from abuse and common web vulnerabilities.

## 1. Input Validation
*   **Backend (Pydantic):** FastAPI uses Pydantic schemas to validate every incoming request. If a request is missing required fields (like an email or password) or uses the wrong data type, the backend rejects it with a `422 Unprocessable Entity`.
*   **Frontend (React Hook Form):** The UI uses React Hook Form to validate inputs (like checking for valid email formats and strong passwords) before they are even sent to the server.
*   **File Uploads:** There are currently no file upload features in MvuviGo, eliminating the risk of malicious file execution.

## 2. Rate Limiting
To prevent brute-force attacks, credential stuffing, and denial-of-service (DoS), we use the `slowapi` library on the FastAPI backend:
*   Login attempts are limited to **5 per minute** per IP.
*   Requesting a verification code is limited to **5 per minute** per IP.
*   If an attacker exceeds these limits, they receive a `429 Too Many Requests` error.

## 3. CORS (Cross-Origin Resource Sharing)
*   The FastAPI backend is configured with `CORSMiddleware`. 
*   In development, it allows origins like `http://localhost:3000` and `http://localhost:5173`. 
*   In production, it strictly allows the frontend's live domain, preventing malicious websites from making requests on behalf of the user.

## 4. CSRF (Cross-Site Request Forgery)
*   MvuviGo is immune to traditional CSRF attacks because it does not use cookie-based sessions. 
*   Authentication relies entirely on a `Bearer` token stored in `localStorage` and sent via the `Authorization` header. Attackers cannot force a user's browser to automatically send this header.

## 5. Error Disclosure
*   In production, FastAPI is configured to hide detailed tracebacks from the end-user. 
*   If the server crashes (e.g., a database disconnection), the frontend only sees a generic `500 Internal Server Error`. Detailed stack traces are only printed to the secure backend server logs.

## 6. Integrations & External Services
*   **MQTT Broker:** The Node.js server authenticates with the HiveMQ broker using a unique username and password. The connection uses TLS.
*   **SMS:** API keys for the SMS gateway are stored securely in environment variables. 
*   **Dependency Risks:** We use `uv` for Python and `npm` for Node.js. Dependencies are audited (e.g., using `npm audit`) to check for known vulnerabilities in libraries like FastAPI, React, or MQTT.js.