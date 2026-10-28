# Logging and Monitoring

Logs can support debugging and incident review, but MvuviGo handles identity and location data. The statements below reflect the existing technical documentation; verify actual log fields, access controls and retention against the running services before relying on them.

## Documented logging behavior

| Component | Behavior described in the current docs | Verification needed |
| --- | --- | --- |
| FastAPI backend | Request method, path and response status are logged; OTPs may be printed in development mode; rate-limit violations are logged | Confirm that secrets, bearer tokens, request bodies and personal data are excluded or appropriately redacted in each environment. Confirm who can access logs and how long they are retained. |
| Node.js IoT gateway | The docs describe MQTT connection, trip start/completion and SOS events being logged. They state SOS records may include fisher ID and GPS coordinates. | Verify the actual fields, purpose, access control and retention. Avoid exact coordinates and directly identifying fields in general-purpose logs unless necessary, authorized and protected. Prefer an incident/correlation ID and keep operational record details in the approved system. |
| Dashboard | Client errors may appear in the browser console; host/server logging depends on deployment | Ensure production errors do not expose tokens, personal records or location details to unauthorized users. |

## Safe logging requirements

- Never log passwords, private keys, full authentication tokens, one-time codes in production, or complete request bodies containing personal data.

- Minimize fisher identifiers and precise location data in application and monitoring logs. Where event correlation is needed, prefer a non-sensitive incident identifier.

- Restrict log access to personnel with an operational need. Keep access auditable and set retention through the organization's approved data-protection policy.

- Redact logs before sharing them in a ticket, pull request, chat or public issue. Avoid screenshots containing phone numbers or map coordinates.

- Treat logs as evidence during a security or SOS incident: preserve relevant records, record timestamps, and do not edit or delete them as a troubleshooting shortcut.

## Operational monitoring

The deployment documentation recommends watching service uptime, HTTP 5xx rates and response times, database capacity/connections/backup success, and build or deployment failures. The monitoring platform, alert recipients and retention periods are not identified in the supplied project archive; document the actual tools and responsible contacts in the deployment runbook before relying on automated alerting.

For an active SOS, a missing dashboard update, stale location, failed SMS or service-health alert must be treated as a possible service failure—not proof that no emergency exists. Operators should use the approved human coordination fallback in [Failure Handling and Incident Response](./failure-handling.md).

## Verification checklist

Before a release or operational trial, confirm:

- [ ] Production logging does not expose passwords, OTPs, bearer tokens or private keys.

- [ ] Location and identity fields are minimized, access-controlled and retained only as approved.

- [ ] Owners can locate relevant logs and know the retention and escalation process.

- [ ] Health checks and monitoring distinguish current, stale and missing location data.

- [ ] A human fallback remains available if monitoring, dashboard or messaging fails.