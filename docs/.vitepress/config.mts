import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MvuviGo Technical Documentation",
  base: '/pixels-technical-documentation/',
  description: "Technical architecture and system design for the MvuviGo maritime safety platform",
  
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/overview/" },
    ],

    sidebar: [
      {
        text: "Overview",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/overview/" },
          { text: "Product Definition", link: "/overview/product-definition" },
          { text: "System Overview", link: "/overview/system-overview" },
          { text: "Key Features", link: "/overview/key-features" },
          { text: "Scope and Status", link: "/overview/scope-and-status" },
          { text: "Technology Stack", link: "/overview/technology-stack" },
          { text: "Glossary", link: "/overview/glossary" },
        ],
      },
      {
        text: "Architecture",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/architecture/" },
          { text: "Architecture Principles", link: "/architecture/architecture-principles" },
          { text: "System Architecture", link: "/architecture/system-architecture" },
          { text: "Component Diagram", link: "/architecture/component-diagram" },
          { text: "Data Flow", link: "/architecture/data-flow" },
        ],
      },
      {
        text: "API Reference",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/api/" },
          { text: "Authentication", link: "/api/authentication" },
          { text: "Endpoints", link: "/api/endpoints" },
          { text: "Schemas", link: "/api/schemas" },
          { text: "Error Codes", link: "/api/error-codes" },
        ],
      },
      {
        text: "Database Design",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/database/" },
          { text: "Key Entities", link: "/database/key-entities" },
          { text: "ER Diagram", link: "/database/er-diagram" },
        ],
      },
      {
        text: "Repository",
        collapsed: true,
        items: [
          { text: "Repositories", link: "/repository/" },
          { text: "Backend Repository", link: "/repository/backend-repo" },
          { text: "Frontend Repository", link: "/repository/frontend-repo" },
          { text: "IoT Server Repository", link: "/repository/iot-server-repo" },
        ],
      },
      {
        text: "Communication Systems",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/communication/" },
          { text: "RFID and Station Hardware", link: "/communication/rfid-and-station-hardware" },
          { text: "LoRa Relay and Mesh", link: "/communication/lora-relay-and-mesh" },
          { text: "SMS Integration", link: "/communication/sms-integration" },
          { text: "GPS Tracking", link: "/communication/gps-tracking" },
        ],
      },
      {
        text: "Frontend",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/frontend/" },
          { text: "Architecture", link: "/frontend/architecture" },
          { text: "Pages and Components", link: "/frontend/pages-and-components" },
          { text: "State Management", link: "/frontend/state-management" },
          { text: "Maps and Real-time", link: "/frontend/maps-and-real-time" },
        ],
      },
      {
        text: "Security and Reliability",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/security/" },
          { text: "Access Control", link: "/security/access-control" },
          { text: "Data Protection", link: "/security/data-protection" },
          { text: "Logging and Monitoring", link: "/security/logging-and-monitoring" },
          { text: "Failure Handling", link: "/security/failure-handling" },
        ],
      },
      {
        text: "Setup & Deployment",
        collapsed: true,
        items: [
          { text: "Deployment", link: "/deployment/deployment" },
          { text: "Installation", link: "/setup/installation" },
          { text: "Run Locally", link: "/setup/run-locally" },
          { text: "Database Setup", link: "/setup/database-setup" },
          { text: "Environment Variables", link: "/setup/environment-variables" },
        ],
      },
      {
        text: "Workflows",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/workflows/" },
          { text: "Trip Tracking", link: "/workflows/trip-tracking" },
          { text: "SOS Alert Flow", link: "/workflows/sos-alert-flow" },
          { text: "Rescue Coordination", link: "/workflows/rescue-coordination" },
        ],
      },
      {
        text: "Testing and Troubleshooting",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/testing/" },
          { text: "Backend Tests", link: "/testing/backend-tests" },
          { text: "Frontend Build", link: "/testing/frontend-build" },
          { text: "Postman Examples", link: "/testing/postman-examples" },
          { text: "Common Issues", link: "/testing/common-issues" },
        ],
      },
    ],
  },
})
