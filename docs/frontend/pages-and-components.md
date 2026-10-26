# Pages and Components

![Dashboard component tree](../assets/component-tree.svg)

## Shared shell

Every dashboard page renders inside the `(dashboard)` layout, which provides:

- **Sidebar**: navigation between pages.
- **TopBar**: the header. It takes an `onMenuClick` prop so the sidebar can be toggled on small screens.

Pages never render their own sidebar or top bar. Doing so creates the duplicate navigation that reviewers flag.

## Live Incidents

A full map of active alerts.

- Fishers in distress appear as **red SOS pins**.
- Clicking a pin opens a popup that touches that pin. The popup does not open from anywhere else.
- Zoom buttons sit in the top-left corner of the map, matching the responders map.
- The basemap uses a Stamen-style look.

## Responders and Messages

Shows who can help and what has been sent to them.

- **Map view / List view** toggle for the nearest responders.
- A responders list that falls back to a placeholder when a responder has no name.
- An **SMS messages** table. Message data comes through the backend, which talks to the SMS provider.

## Component guidelines

| Do | Avoid |
| --- | --- |
| One component per file | Large page files that mix data, layout and map code |
| Pass data down as props | Fetching in deeply nested presentational components |
| Reuse `Sidebar` and `TopBar` | Copying them into pages |
| Show loading, error and empty states | Rendering an empty table when a request fails |