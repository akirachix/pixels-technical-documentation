# Failure Handling and Incident Response

MvuviGo supports a safety-critical workflow, but it does not replace the landing site's approved emergency procedures or formal search-and-rescue services. During an active SOS, human safety and communication take priority over restoring software. This checklist is a documentation-level guide; the system owner must validate it with the landing-site operator, security/privacy owner and service operators before adopting it as an operational runbook.

## Documented failure behavior

The existing system documentation describes the following behaviors. Confirm each against the current service code, device tests and deployed configuration before relying on it in an emergency.

### Database failures

- **FastAPI:** the architecture documentation describes SQLAlchemy reconnecting after a dropped PostgreSQL connection. Verify retry behavior and limits in the backend implementation.

- **Node.js gateway:** the repository documentation describes handling database query errors without terminating the server. Verify queueing, retry, duplicate handling and message-loss behavior in the IoT implementation.

### Network failures

- **Landing station offline:** the architecture documentation describes locally storing GPS/SOS packets and forwarding them when internet connectivity returns. Verify storage capacity, power-loss behavior, replay ordering and duplicate suppression on the actual hardware before treating this as a guarantee.

- **Dashboard disconnected:** the frontend documentation describes presenting an error rather than crashing. An error display does not prove that an SOS was received or that a location is current. Switch to the site's approved human coordination fallback.

### Email and one-time-code failures

If the configured email provider is unavailable, operator authentication or account recovery may fail. For local development only, the docs describe `EMAIL_DELIVERY=console` as a way to print one-time codes. Never enable console OTP delivery in production or expose authentication codes in shared logs.

## Active SOS: operator checklist

1. **Use the local emergency procedure first.** Acknowledge the report through the approved operator process and use normal phone/radio channels to coordinate people. Do not wait for an AI direction, dashboard refresh or successful software recovery before acting.

1. **Record what is known and how fresh it is.** Note the incident identifier, time received, source, latest available position and its timestamp/age if known. Clearly label missing, stale or simulated locations; never present an old position as current.

1. **Confirm the human fallback.** If the dashboard, internet, MQTT, SMS or automated directions are unavailable, contact the relevant people using the landing site's established communication method and escalate to formal rescue services according to local procedure.

1. **Do not create duplicate live alerts to test recovery.** Use a designated test environment for troubleshooting. Preserve existing incident records and follow the approved process for corrections.

1. **After service returns, reconcile cautiously.** Confirm which events were received, delayed or lost before replaying queued messages. Replay only under a documented process that prevents duplicate alerts and database records.

1. **Close the operational record.** Record response actions, communications, service interruptions, outcome and follow-up owner in the approved incident record. Do not put unnecessary personal data in general-purpose technical logs.

## Security or privacy incident checklist

1. **Recognize and report.** Record when and where the issue was noticed, affected service/environment, and a brief description. Notify the designated security/privacy owner using the contact path in the approved incident plan.

1. **Protect people and preserve evidence.** Keep an active response moving through human channels. Preserve relevant logs and timestamps with access restricted; do not delete, edit or broadly copy evidence to troubleshoot.

1. **Contain with the service owner.** If credentials are exposed, revoke or rotate them through the owning system and assess what they could access. Isolate a component only when the responsible operator has assessed the safety impact and the human fallback is active.

1. **Limit personal and location data.** Share only the minimum necessary information with authorized responders. Do not paste access tokens, passwords, phone numbers or precise fisher locations into tickets, chat, screenshots or public issue reports.

1. **Recover and verify.** Restore from a known-good configuration or backup using the service's approved runbook. Check service health, database integrity, authentication and event processing in a test environment before returning it to operational use.

1. **Document and review.** Record the timeline, affected data/services, containment and recovery actions, decision owners and follow-up tasks. The responsible organization must determine any required external notifications under its incident policy and applicable law.

## Complete before operational use

This documentation archive does not identify named on-call contacts or a formal incident plan. The service owner must add and maintain the following in an access-controlled operational runbook:

- primary and backup operator/security/privacy contacts and escalation path;

- local emergency and formal rescue escalation procedure for each deployment site;

- approved degraded-mode procedure when internet, dashboard, radio, MQTT or SMS fails;

- who can rotate secrets, restore databases and approve message replay;

- log access, retention, backup/restore ownership and incident record location;

- a safe, scheduled test of fallback communications and backup restoration.