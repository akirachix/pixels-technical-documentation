# Trip Tracking Workflow

This workflow describes how a fisher's journey is recorded from the moment they leave the shore to the moment they return.

## Step-by-Step Flow

### 1. Check-In
* A fisher approaches the Landing Station and scans their RFID wristband.
* The Landing Station reads the RFID tag and sends an MQTT message (`{ "type": "rfid", "rfid_id": "RFID-123" }`).
* The Node.js IoT Server receives the message, looks up the fisher in the database, and creates a new row in the `trips` table with the status `active`.

### 2. Active Tracking (GPS)
* While on the lake, the fisher's hardware device sends GPS coordinates via LoRa to the Landing Station.
* The Landing Station forwards this via MQTT (`{ "type": "gps", "fisher_id": "123", "latitude": -1.2, "longitude": 33.4 }`).
* The Node.js server receives this and inserts it into the `location_logs` table.
* The Web Dashboard periodically fetches this data from FastAPI and updates the fisher's pin on the live map.

### 3. Check-Out
* When the fisher returns to the shore, they scan their RFID wristband again.
* The fisher then presses the checkout button at the station
* The Landing Station sends an MQTT message.
* The Node.js server finds the active trip for that fisher and updates the `checkout_at` time and sets the status to `completed`.