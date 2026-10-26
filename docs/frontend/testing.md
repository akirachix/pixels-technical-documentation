# Testing

For project-wide testing practice, see the top-level `docs/testing` section. This page covers the frontend.

## Levels

| Level | What it covers | Tooling |
| --- | --- | --- |
| Lint | Code style and common mistakes | `npm run lint` |
| Build check | The app compiles and every page builds | `npm run build` |
| Manual workflow checks | The main operator workflows end to end | Checklist below |
| Component and unit tests | Mappers, form validation, shared components | Not set up yet |


## Manual workflow checklist

Run against a development backend before each release.

**Authentication**

- [ ] Wrong password shows an error and stays on `/login`.
- [ ] Correct sign-in stores `mvuvi_token` and opens the dashboard.
- [ ] Opening a dashboard URL while signed out redirects to `/login`.
- [ ] Sign out clears `mvuvi_token` and returns to `/login`.
- [ ] An expired or removed token shows the session message and redirects.

**Forms**

- [ ] Register rejects mismatched passwords and empty fields.
- [ ] Settings rejects mismatched phone numbers.
- [ ] Submit buttons are disabled while a request runs.

**Pages**

- [ ] Each of the seven sidebar pages loads and shows loading, data, empty and error states.
- [ ] A request returning `401` or `403` shows an authentication message, not an empty table.

**Maps and real-time**

- [ ] A new alert appears as a red SOS pin without a page reload.
- [ ] Clicking a red pin opens the popup on that pin, and clicking elsewhere does not.
- [ ] A refresh does not reset zoom or close an open popup.
- [ ] Responders are listed nearest first, and a responder without a name shows the placeholder.

**Layout**

- [ ] No page renders its own sidebar or top bar.
- [ ] The sidebar toggles on small screens (check at 375px).
