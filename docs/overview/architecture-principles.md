# Architecture Principles

These principles explain why MvuviGo is shaped the way it is. Each states its limit, so the principle is not over-read.

| Principle | What it means | Limit |
|---|---|---|
| **Peer-first response** | Nearby participating fishers are alerted directly, not only the shore | Only fishers who carry devices can be alerted |
| **No mobile coverage for the first alert** | The SOS travels by long-range radio | Directions and phone coordination still use mobile networks |
| **Feature-phone accessibility** | Guidance arrives as simple messages, not through an app | Delivery depends on coverage at the responder's position |
| **Dynamic guidance** | Directions refresh every 30 seconds from the latest positions | The refresh rate must fit radio transmission limits |
| **Decision support, not autonomy** | AI suggests, people decide. No dispatch, boat control or final decisions | Directions are not a guarantee of the safest route |
| **Human coordination** | A landing-site operator monitors and coordinates | Needs operator availability and a plan for off-hours |
| **Fail visibly** | Missing, late or old data is flagged and never shown as current | Requires clear display of how fresh each location is |
| **Human fallback** | If the dashboard, AI or messaging fails, the operator coordinates by phone | The operator must be reachable |
| **Privacy by design** | Location is shared on SOS, not continuously | Storage and access rules must still be defined and published |
| **Record keeping** | Every incident, response and outcome is recorded | Records need access control and audit |
| **Complementary, not a replacement** | MvuviGo fills the gap between trouble and local help | It does not warn before a trip or protect a person in the water |

## Cross-cutting constraints

- **Security:** authenticated and encrypted transmissions, role-based access and audit logs.
- **Compliance:** data-protection law and radio regulation in each country of use.
- **Resilience:** the device must survive immersion, and its battery and charging routine must be simple.
- **Affordability:** the device must be affordable to the people expected to pay for it.

