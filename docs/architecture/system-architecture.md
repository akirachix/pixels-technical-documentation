# System Architecture

This section outlines the high-level physical and software architecture of the MvuviGo platform. It illustrates how the physical edge devices, communication layers, and cloud infrastructure connect to form a complete end-to-end system.

## System Architecture Diagram

![MvuviGo System Architecture Diagram](/images/sad.png)

## Architecture Flow

The system operates across four primary layers, bridging the physical maritime environment with the central cloud infrastructure:

### 1. Hardware & Edge Layer (Field)
* **Fisher Wearables:** RFID wristbands and panic buttons worn by fishers to transmit SOS alerts and GPS coordinates.
* **Landing Station:** The shore-based reader that scans RFID tags, receives LoRa transmissions, and forwards the data to the cloud.
* **Rescue Responders:** Other fishers equipped with wearables who receive directions and alerts on their feature phones via SMS.

### 2. Communication & Routing Layer
* **MQTT Broker:** Acts as the central messaging hub, receiving distress signals and location data from the landing stations.
* **SMS Leopard:** The external SMS gateway used to deliver critical directions and alerts directly to the feature phones of rescue responders.

### 3. Cloud & API Layer (Backend)
* **MvuviGo API & Node.js IoT Server:** Processes incoming telemetry, manages the database (storing fishers, location logs, and alerts), and handles the logic for notifying eligible nearby rescuers.
* **Database:** The central relational store for all fisherman details, trip maps, and SOS data.

### 4. Client & Dashboard Layer
* **Station Operator Dashboard:** The web interface used by operators to register fishers, update trips, view live GPS locations, and acknowledge/resolve active SOS alerts.