# Access Control

MvuviGo enforces strict access control to ensure that only authorized station operators can view live maps, manage fishers, and coordinate rescues.

## Authentication Flow (2-Step Login)
Because the system manages emergency responses, a standard email/password login is not secure enough. We implemented a 2-step authentication process:

1. **Password Verification:** The operator enters their email and password. The FastAPI backend verifies the Argon2 password hash.
2. **One-Time Password (OTP):** If the password is correct, the backend generates a 6-digit OTP and sends it to the operator's email. The operator must enter this OTP to receive their session token.

## JSON Web Tokens (JWT)
Once the 2-step login is complete, the backend generates a JWT. 
* **Stateless:** The backend does not store sessions in memory. The token itself contains the user's identity and expiration time.
* **Encryption:** We use the RS256 algorithm (Asymmetric RSA). The token is signed with a Private Key and verified by the frontend/backend using the Public Key.
* **Expiration:** Tokens expire after 60 minutes. The frontend detects this expiration and redirects the user to the login screen.

## Rate Limiting
To prevent brute-force attacks and API abuse, we use `slowapi` on the backend:
* Login attempts are limited to 5 per minute per IP.
* OTP generation requests are limited to 5 per minute per IP.
* If an attacker tries to guess a password or spam the email service, they receive a `429 Too Many Requests` error.