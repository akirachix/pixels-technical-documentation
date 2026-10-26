# SOS Alert Flow
This workflow is the most critical in the system. It outlines the exact path a distress signal takes from the hardware to the operator's screen.

## Step-by-Step Flow

### 1. Hardware Trigger
* A fisher presses the SOS button on their wearable device.
* The device captures the current GPS coordinates and sends a LoRa packet flagged as an emergency to the Landing Station.

### 2. Node.js Ingestion
* The Landing Station publishes the packet via MQTT.
* The Node.js IoT Server receives the SOS message (`{ "type": "sos", "fisher_id": "123", "latitude": -1.2, "longitude": 33.4 }`).
* The server immediately inserts a location log and creates a new record in the `distressed_fisher_alerts` table.

### 3. SMS Broadcast
* Upon receiving the SOS, the system triggers the SMS Leopard integration to send text messages to the feature phones of nearby registered fishers.

### 4. Dashboard Display
* The Web Dashboard (Next.js) is polling the FastAPI backend for active alerts.
* Within seconds, the dashboard receives the new alert data.
* The UI turns the fisher's map pin red, plays a notification sound, and lists the alert in the Incident Panel with a status of `Action` (Pending).