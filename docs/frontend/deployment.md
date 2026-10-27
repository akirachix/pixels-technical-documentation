# Deployment

For infrastructure and backend deployment, see the top-level `docs/deployment` section. This page covers the frontend.

## Pipeline

1. Merge approved changes into the main branch through a pull request.
2. Install dependencies with `npm install`.
3. Build with `npm run build`.
4. Serve the build with `npm run start`, or publish it on the hosting platform.
5. Check the release with the smoke test below.

## Configuration per environment

| Environment | `NEXT_PUBLIC_API_URL` |
| --- | --- |
| Local | `http://localhost:8000` |
| Staging | The staging backend URL |
| Production | The production backend URL |

The value is read at build time, so rebuild after changing it. The backend must allow requests from the frontend origin (CORS).

## Smoke test after release

- [ ] `/login` loads and sign-in works.
- [ ] The Dashboard shows its counts and the map.
- [ ] A test alert appears on Live Incidents.
- [ ] Responders and Messages loads.

## Rollback

Redeploy the previous successful build. Because the app keeps only a token in the browser, no data migration is needed on the frontend.

