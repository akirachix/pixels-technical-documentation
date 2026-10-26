# Routing

The app uses the Next.js **App Router**. Each folder under `app/` with a `page.jsx` becomes a URL. Folders in parentheses, such as `(dashboard)`, group pages that share a layout without adding to the URL.

## Routes

| URL | Page | Access | Main data |
| --- | --- | --- | --- |
| `/login` | Welcome back (sign in) | Public | Operator credentials |
| `/register` | Create Your Account | Public | New operator details |
| `/dashboard` | Operations Dashboard | Signed in | Alert counts, fisher count, responder availability, map |
| `/incidents` | Live Incidents | Signed in | `alerts`, incident details and response timeline |
| `/fishers` | Fishers | Signed in | `fishers` |
| `/wristbands` | Wristbands | Signed in | Wristbands and their assignments |
| `/responders` | Responders and Messages | Signed in | `alert-responders`, SMS messages |
| `/reports` | Incident Reports & History | Signed in | Past incidents, response times |
| `/settings` | System Settings | Signed in | Operator account, fisher phone numbers |


## Navigation

The `Sidebar` links to the seven signed-in pages in this order: Dashboard, Incidents, Fishers, Wristbands, Responders, Reports, Settings. The active page is highlighted. Inner pages also show a **Back to Dashboard** link above the page title.

On small screens the `TopBar` calls `onMenuClick` to open and close the sidebar.

## Protected routes

Every route inside `(dashboard)` needs a valid session. The layout checks for the token and sends signed-out users to `/login`. See [Authentication](./authentication.md) for the full behaviour.

## Redirects

| Situation | Result |
| --- | --- |
| Signed-out user opens a dashboard URL | Redirected to `/login` |
| Successful sign-in | Redirected to the dashboard |
| Successful registration | Redirected to `/login` |
| Sign out | Token cleared, redirected to `/login` |
