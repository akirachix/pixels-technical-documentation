# Setup & Installation

Welcome to the MvuviGo setup guide. The MvuviGo platform consists of three separate applications that work together:
1. **The Backend (`pixels-backend`)**: The FastAPI core API.
2. **The Frontend (`pixels-frontend`)**: The Next.js operator dashboard.
3. **The IoT Server (`pixels-iot`)**: The Node.js MQTT gateway.

To have the full system running locally, you will need to set up all three.

## Setup Guides
Follow these guides in order to get your local environment ready:

* **[Prerequisites](/setup/prerequisites)** - What you need installed on your computer before starting.
* **[Installation](/setup/installation)** - How to clone the repositories and install dependencies.
* **[Environment Variables](/setup/environment-variables)** - How to configure the `.env` files for each service.
* **[Database Setup](/setup/database-setup)** - How to initialize PostgreSQL and run migrations.
* **[Run Locally](/setup/run-locally)** - How to start all three servers and view the dashboard.