
---

# Frontend Repository (`pixels-frontend`)

The frontend repository is the web dashboard used by Station Operators. It provides a real-time map, incident management panels, and the authentication screens (Signup/Login).

**Technology Stack:**
*   **Framework:** Next.js 14 (App Router)
*   **Styling:** Tailwind CSS
*   **Forms:** React Hook Form (for robust client-side validation)
*   **Maps:** React-Leaflet / OpenStreetMap
*   **State Management:** React Context & Local Storage (for tokens)

## Directory Structure

| Directory / File | Description |
| :--- | :--- |
| `pixels-frontend/` | |
| `├── app/` | Next.js App Router pages |
| `│   ├── (dashboard)/` | Protected operator views (map, fishers) |
| `│   ├── signin/` | 2-step login page |
| `│   ├── signup/` | OTP registration page |
| `│   └── forgot-password/` | Password reset flow |
| `├── components/` | Reusable UI elements (Buttons, Fields, Modals) |
| `├── lib/` | API client (`api.js`) |
| `├── public/` | Static assets (images, icons) |
| `└── package.json` | Dependencies |