# Component Diagram

The component diagram shows the main hardware and software components of MvuviGo, what each one is responsible for, and the interface that connects them. 

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1150 720" width="100%" style="max-width: 1150px; display: block; margin: 0 auto; font-family: Nunito, sans-serif;">
<defs><marker id="a" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs>
<rect width="1150" height="720" fill="#ffffff"/>

<rect x="30" y="20" width="1090" height="170" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="1100" y="44" text-anchor="end" font-weight="bold" font-size="13" fill="#64748b">HARDWARE LAYER</text>

<rect x="60" y="60" width="380" height="110" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="250" y="92" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Fisher Device</text>
<text x="250" y="116" text-anchor="middle" font-size="13" fill="#334155">Arduino Pro Mini, GPS module, LoRa radio, SOS button</text>
<text x="250" y="136" text-anchor="middle" font-size="13" fill="#334155">Tracks the boat's position and transmits it;</text>
<text x="250" y="156" text-anchor="middle" font-size="13" fill="#334155">sends an emergency alert when SOS is pressed</text>

<rect x="710" y="60" width="380" height="110" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="900" y="92" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Landing Station</text>
<text x="900" y="116" text-anchor="middle" font-size="13" fill="#334155">ESP32, LoRa radio, RFID reader, LCD, buttons</text>
<text x="900" y="136" text-anchor="middle" font-size="13" fill="#334155">Receives boat signals and identifies fishers</text>
<text x="900" y="156" text-anchor="middle" font-size="13" fill="#334155">by RFID, then forwards the data to the server</text>

<line x1="440" y1="115" x2="710" y2="115" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<text x="575" y="100" text-anchor="middle" font-size="13" fill="#334155">LoRa radio</text>
<text x="575" y="136" text-anchor="middle" font-size="13" fill="#334155">SOS &amp; GPS data</text>

<path d="M900 170 V220 H140 V290" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<text x="520" y="211" text-anchor="middle" font-size="13" fill="#334155">MQTT (station publishes data)</text>

<rect x="30" y="250" width="1090" height="180" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="1100" y="274" text-anchor="end" font-weight="bold" font-size="13" fill="#64748b">SERVER LAYER</text>

<rect x="45" y="290" width="190" height="120" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="140" y="322" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">MQTT Broker</text>
<text x="140" y="346" text-anchor="middle" font-size="13" fill="#334155">Message hub that receives</text>
<text x="140" y="366" text-anchor="middle" font-size="13" fill="#334155">published messages and</text>
<text x="140" y="386" text-anchor="middle" font-size="13" fill="#334155">routes them to subscribers</text>

<rect x="335" y="290" width="190" height="120" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="430" y="322" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Node.js IoT Server</text>
<text x="430" y="346" text-anchor="middle" font-size="13" fill="#334155">Real-time processor that</text>
<text x="430" y="366" text-anchor="middle" font-size="13" fill="#334155">validates SOS and GPS data</text>
<text x="430" y="386" text-anchor="middle" font-size="13" fill="#334155">before it is stored</text>

<rect x="625" y="290" width="190" height="120" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="720" y="322" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">FastAPI Backend</text>
<text x="720" y="346" text-anchor="middle" font-size="13" fill="#334155">API and business logic:</text>
<text x="720" y="366" text-anchor="middle" font-size="13" fill="#334155">saves records and serves</text>
<text x="720" y="386" text-anchor="middle" font-size="13" fill="#334155">them to the dashboard</text>

<rect x="915" y="290" width="190" height="120" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="1010" y="322" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Database</text>
<text x="1010" y="346" text-anchor="middle" font-size="13" fill="#334155">Persistent storage for</text>
<text x="1010" y="366" text-anchor="middle" font-size="13" fill="#334155">positions, SOS events</text>
<text x="1010" y="386" text-anchor="middle" font-size="13" fill="#334155">and fisher records</text>

<line x1="235" y1="350" x2="335" y2="350" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<text x="285" y="342" text-anchor="middle" font-size="13" fill="#334155">MQTT</text>

<line x1="525" y1="350" x2="625" y2="350" stroke="#334155" stroke-width="2" marker-end="url(#a)"/>
<text x="575" y="342" text-anchor="middle" font-size="13" fill="#334155">HTTP</text>

<line x1="815" y1="350" x2="915" y2="350" stroke="#334155" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
<text x="865" y="342" text-anchor="middle" font-size="13" fill="#334155">SQL</text>

<line x1="720" y1="410" x2="720" y2="550" stroke="#334155" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
<text x="734" y="460" font-size="13" fill="#334155">REST API</text>
<text x="734" y="476" font-size="13" fill="#334155">(HTTP / JSON)</text>

<rect x="30" y="500" width="1090" height="190" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="1100" y="524" text-anchor="end" font-weight="bold" font-size="13" fill="#64748b">CLIENT LAYER</text>

<rect x="570" y="550" width="300" height="110" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="720" y="582" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Web Dashboard</text>
<text x="720" y="606" text-anchor="middle" font-size="13" fill="#334155">Live map and alerts that let</text>
<text x="720" y="626" text-anchor="middle" font-size="13" fill="#334155">coordinators monitor boats</text>
<text x="720" y="646" text-anchor="middle" font-size="13" fill="#334155">and respond to emergencies</text>
</svg>