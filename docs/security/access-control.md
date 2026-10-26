# Access Control

MvuviGo enforces strict access control to ensure that only authorized station operators can view live maps, manage fishers, and coordinate rescues.

## 1. Authentication Mechanism
We use a **2-Step Authentication** process to prevent unauthorized access, even if a password is compromised.

1. **Password Verification:** The operator submits their email and password. The backend verifies the Argon2 hash.
2. **One-Time Password (OTP):** A 6-digit code is generated and sent to the operator's email. The code is stored in memory (hashed) and expires after 3 minutes. 
3. **Session Issuance:** Upon successful OTP verification, the backend issues a JSON Web Token (JWT).

### Credential Handling & Password Storage
*   Passwords are **never** stored in plain text.
*   We use **Argon2** (specifically the Argon2id variant) for password hashing. Argon2 is memory-hard and protects against GPU-based brute-force attacks.
*   OTPs are hashed using **SHA-256** before being temporarily stored in memory. 

## 2. Sessions & Tokens
*   **Stateless JWT:** The backend does not store sessions. The JWT contains the user's identity (`sub`) and is signed using the **RS256 (RSA)** algorithm. 
*   **Expiration:** Access tokens expire after **60 minutes**. When a token expires, the frontend receives a `401 Unauthorized` and redirects the operator to the login screen.
*   **Logout:** Logging out removes the token from the browser's `localStorage`. 
*   **Account Recovery:** Operators can recover their accounts via the "Forgot Password" flow. This uses the same secure OTP mechanism (sent to their email) and issues a short-lived password reset token.

## 3. Authorization & Roles
*   **Roles:** There is currently one user role in the web application: **Station Operator**. (Fishers and Responders do not have web accounts).
*   **Permissions:** Station Operators are authorized to register fishers, view the live map, view alerts, and acknowledge/resolve SOS incidents.
*   **Enforcement:** Authorization is enforced at the route level using FastAPI dependencies (`Depends(get_current_operator)`). If a valid JWT is missing, the backend returns `401`. If the user is authenticated but not found in the database, it returns `403 Forbidden`.
*   **Protected Resources:** All endpoints under `/operators/me`, `/api/fishers`, `/api/trips`, and `/api/alerts` are protected and require a valid Bearer token.