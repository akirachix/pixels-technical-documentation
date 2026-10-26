# Rescue Coordination Workflow

Once an SOS alert is active on the dashboard, the Station Operator must coordinate the rescue.

![Incidents Screen](/images/incidents.png)

## Step-by-Step Flow

### 1. Acknowledgment
* The Station Operator sees the red SOS alert on the screen.
* The operator clicks the alert and selects "Acknowledge".
* The frontend sends a request to FastAPI to update the alert record. It sets the `acknowledged_at` timestamp and logs the operator's ID.

### 2. Responder Tracking
* Nearby fishers who received the SMS start moving toward the distressed fisher's last known GPS location.
* If those responders have wristbands, the operator can track their live approach on the map.

### 3. Resolution
* Once the fisher is safely recovered, the Station Operator clicks "Resolve" on the dashboard.
* The frontend sends a request to FastAPI to update the alert.
* The backend marks the `resolved_at` timestamp.
* The alert is removed from the active incident list and the map pin turns green, returning the system to a normal monitoring state.