# Security and Reliability

The MvuviGo platform handles sensitive identity and location data in a safety-critical context. The controls on this page describe the documented security design; they are not, by themselves, evidence that a control is implemented, deployed or independently tested. Confirm actual controls in the application code, hosting configuration and operational procedures before relying on them.

## System Security Zones

<img
id="ssad-zoom" 
src="/images/ssad.png" 
alt="MvuviGo Secure System Architecture Diagram" 
style="width: 100%; cursor: zoom-in;" 
/>

<script setup>
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

onMounted(() => {
  mediumZoom('#ssad-zoom', {
    background: 'rgba(0, 0, 0, 0.8)',
    margin: 24,
  })
})
</script>

The documented architecture divides the platform into three security zones. Verify the deployed network boundaries and controls with the service owner:

1. **Perimeter Layer:** Handles public internet traffic. A Web Application Firewall and API Gateway protect the backend. Unauthenticated traffic is dropped here.

1. **Application Zone:** Contains the FastAPI backend, Node.js IoT server, and Auth Services.

1. **Data Zone:** A private subnet where the PostgreSQL database resides. It is completely inaccessible from the public internet and only accepts connections from the Application Zone.

## Incident Handling & Monitoring

Because MvuviGo is a safety-critical system, detecting and responding to incidents is a core requirement.

- **Logging:** Collect only the information needed to operate and investigate the service. Protect logs and minimize fisher identifiers and precise location data; see [Logging and Monitoring](/security/logging-and-monitoring).

- **Detection:** Define and test alerts for service failures, suspicious authentication activity and invalid device messages. The monitoring provider, alert recipients and thresholds must be confirmed for each deployment.

- **Response:** During an active SOS, use the approved human coordination fallback if the dashboard, database or messaging path fails. Follow the [Failure Handling and Incident Response checklist](/security/failure-handling).

- **Credential rotation:** Keep local secrets out of source control and production secrets in the deployment's approved secret store. Confirm the actual store, access owners and rotation procedure for each service.

- **Recovery:** Confirm backup ownership, schedule, retention and restore procedure with the database provider. Test restoration before relying on a backup; provider-specific arrangements are not established in this documentation archive.

## Explore Security Topics

- [**Access Control**](/security/access-control) - Authentication, JWT tokens, and session expiration.

- [**Data Protection**](/security/data-protection) - Password hashing, encryption in transit, and database protection.

- [**Application Security**](/security/application-security) - Rate limiting, CORS, input validation, and integration security.

- [**Failure Handling**](/security/failure-handling) - How the system gracefully handles network drops and device disconnects.