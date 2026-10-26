# Frontend

The MvuviGo dashboard is the screen station operators use to watch for distressed fishers and coordinate help. It lives in the `pixels-frontend` repository and is built with **Next.js** (App Router), React in **JSX**, Tailwind CSS and the Nunito font.

## What operators can do

- Register an operator account, sign in and sign out.
- See fishers in distress on a live map (**Live Incidents**) and the headline numbers on the **Dashboard**.
- See the nearest responders to an alert and the SMS messages sent to them (**Responders and Messages**), in either map view or list view.
- Register fishers and look them up (**Fishers**).
- See which wristbands are available and assign them to fishers (**Wristbands**).
- Review past incidents, response times and download a report (**Reports**).
- Reset the operator password and change a fisher's phone number (**Settings**).

Everything except the login and register pages requires a valid session.

## At a glance

| Area | Summary | Details |
| --- | --- | --- |
| Framework and language | Next.js (App Router), React, JSX | [Architecture](./architecture.md) |
| Styling | Tailwind CSS, Nunito font | [Architecture](./architecture.md) |
| State management | Plain React state and hooks, no global store | [State management](./state-management.md) |
| Routing | App Router with a `(dashboard)` route group | [Routing](./routing.md) |
| Pages and workflows | Nine screens, each with a documented workflow | [Pages and components](./pages-and-components.md) |
| Forms and validation | Login, register, add fisher, assign wristband, settings | [Forms and validation](./forms-and-validation.md) |
| Authentication | Token in the browser, sent on every request | [Authentication](./authentication.md) |
| API integration | One shared client, `lib/api.js` | [API integration](./api-integration.md) |
| Maps and real-time | Red SOS pins, popups, refreshing alerts | [Maps and real-time](./maps-and-real-time.md) |
| Build tooling and process | npm scripts, environment variables | [Build and tooling](./build-and-tooling.md) |
| Testing | Manual checklist and automated test notes | [Testing](./testing.md) |
| Deployment | Build, configure, release | [Deployment](./deployment.md) |

## In this section

- [Architecture](./architecture.md): how the app is structured, the project layout and how it reaches the backend.
- [Routing](./routing.md): every URL, the page behind it and who can open it.
- [Pages and components](./pages-and-components.md): the screens, their workflows and the building blocks they use.
- [State management](./state-management.md): how sign-in and data loading are handled, including loading and error states.
- [Forms and validation](./forms-and-validation.md): every form, its fields and its validation rules.
- [Authentication](./authentication.md): login, logout, token handling, protected routes, expiry and errors.
- [API integration](./api-integration.md): base URL, request client, auth header, response and error handling.
- [Maps and real-time](./maps-and-real-time.md): how alerts reach the map and what happens when a pin is clicked.
- [Build and tooling](./build-and-tooling.md): scripts, environment variables and the build process.
- [Testing](./testing.md): what is tested and how to test the main workflows.
- [Deployment](./deployment.md): how the frontend is built and released.

![Dashboard architecture](../assets/frontend-architecture.svg)

