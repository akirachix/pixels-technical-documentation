
---
# Environment Variables

All secrets and environment-specific configurations are stored in `.env` files. These files are gitignored and must be created manually on your local machine.

## 1. Backend (`pixels-backend/.env`)
Create a `.env` file in the `pixels-backend` root directory:

DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/mvuvigo
JWT_ALGORITHM=RS256

### Set to "console" to print OTPs to the terminal instead of sending emails
EMAIL_DELIVERY=console

### Only required if EMAIL_DELIVERY=smtp
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=your_email@gmail.com