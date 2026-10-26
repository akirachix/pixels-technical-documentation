# System Architecture

Welcome to the architecture documentation for MvuviGo. 

MvuviGo is built as a distributed, event-driven system designed to operate reliably in harsh Lake Victoria environments where cellular networks are often unreliable. The architecture bridges physical IoT hardware on the water with a modern cloud backend on land.

## Architectural Overview

The system is divided into three main layers:

1. **The Edge & Hardware Layer:** Wearable devices and shore-based landing stations that communicate over long-range LoRa radio frequencies.
2. **The Communication & Routing Layer:** MQTT brokers and SMS gateways that move data from the edge to the cloud.
3. **The Cloud & Application Layer:** FastAPI, Node.js, and PostgreSQL services that process telemetry, store data, and serve the operator dashboard.

## Explore the Architecture

Use the links below to dive deeper into specific parts of the system:

* **[Architecture Principles](/architecture/architecture-principles)** - The core rules and design philosophies guiding our development.
* **[System Architecture](/architecture/system-architecture)** - The high-level physical diagram showing how hardware and cloud connect.
* **[Component Diagram](/architecture/component-diagram)** - The logical software components and how they interact.
* **[Data Flow](/architecture/data-flow)** - The step-by-step journey of an SOS signal from the boat to the dashboard.