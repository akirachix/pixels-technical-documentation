# Data Flow Diagram

The data flow diagram follows a single SOS alert from the boat to the coordinator's screen. Steps 1 to 6 show how data is captured and stored. Steps 7 and 8 show how stored data is read back and displayed. The text on each arrow is the data being passed.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 940" width="1000" height="940" font-family="Nunito, sans-serif">
<defs><marker id="b" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs>
<rect width="1000" height="940" fill="#ffffff"/>

<circle cx="80" cy="62" r="18" fill="#334155"/><text x="80" y="68" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">1</text>
<rect x="130" y="30" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="57" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Fisher Device</text>
<text x="300" y="77" text-anchor="middle" font-size="13" fill="#334155">Reads GPS fix, detects SOS press</text>
<line x1="500" y1="34" x2="500" y2="90" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="50" font-size="13" fill="#334155">The GPS module reads the boat's position. If the fisher</text>
<text x="514" y="68" font-size="13" fill="#334155">presses the SOS button, the packet is flagged as an</text>
<text x="514" y="86" font-size="13" fill="#334155">emergency before it is sent.</text>
<line x1="300" y1="94" x2="300" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="124" font-size="12" fill="#334155">LoRa packet: device ID, position, SOS flag</text>

<circle cx="80" cy="178" r="18" fill="#334155"/><text x="80" y="184" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">2</text>
<rect x="130" y="146" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="173" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Landing Station</text>
<text x="300" y="193" text-anchor="middle" font-size="13" fill="#334155">Receives and decodes the radio packet</text>
<line x1="500" y1="150" x2="500" y2="206" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="166" font-size="13" fill="#334155">Decodes the packet and shows its status on the LCD.</text>
<text x="514" y="184" font-size="13" fill="#334155">RFID ties the data to a registered fisher, then the</text>
<text x="514" y="202" font-size="13" fill="#334155">station forwards it to the server side.</text>
<line x1="300" y1="210" x2="300" y2="262" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="240" font-size="12" fill="#334155">MQTT message: position, SOS status, device ID</text>

<circle cx="80" cy="294" r="18" fill="#334155"/><text x="80" y="300" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">3</text>
<rect x="130" y="262" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="289" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">MQTT Broker</text>
<text x="300" y="309" text-anchor="middle" font-size="13" fill="#334155">Routes the message to subscribers</text>
<line x1="500" y1="266" x2="500" y2="322" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="289" font-size="13" fill="#334155">Receives the published message on its topic and</text>
<text x="514" y="309" font-size="13" fill="#334155">delivers a copy to every service subscribed to it.</text>
<line x1="300" y1="326" x2="300" y2="378" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="356" font-size="12" fill="#334155">Message delivered to the subscriber</text>

<circle cx="80" cy="410" r="18" fill="#334155"/><text x="80" y="416" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">4</text>
<rect x="130" y="378" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="405" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Node.js IoT Server</text>
<text x="300" y="425" text-anchor="middle" font-size="13" fill="#334155">Validates and classifies the data</text>
<line x1="500" y1="382" x2="500" y2="438" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="405" font-size="13" fill="#334155">Checks the message format and values, discards bad data,</text>
<text x="514" y="425" font-size="13" fill="#334155">and marks SOS alerts as high priority.</text>
<line x1="300" y1="442" x2="300" y2="494" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="472" font-size="12" fill="#334155">Validated record: position, time, alert level</text>

<circle cx="80" cy="526" r="18" fill="#334155"/><text x="80" y="532" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">5</text>
<rect x="130" y="494" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="521" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">FastAPI Backend</text>
<text x="300" y="541" text-anchor="middle" font-size="13" fill="#334155">Applies rules and saves the record</text>
<line x1="500" y1="498" x2="500" y2="554" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="521" font-size="13" fill="#334155">Applies business logic to the record and writes it</text>
<text x="514" y="541" font-size="13" fill="#334155">to the database through the API layer.</text>
<line x1="300" y1="558" x2="300" y2="610" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="588" font-size="12" fill="#334155">Insert / update query</text>

<circle cx="80" cy="642" r="18" fill="#334155"/><text x="80" y="648" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">6</text>
<rect x="130" y="610" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="637" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Database</text>
<text x="300" y="657" text-anchor="middle" font-size="13" fill="#334155">Stores boat tracks and SOS events</text>
<line x1="500" y1="614" x2="500" y2="670" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="637" font-size="13" fill="#334155">Keeps the full history of positions, alerts and fisher</text>
<text x="514" y="657" font-size="13" fill="#334155">records so they can be queried later.</text>
<line x1="300" y1="674" x2="300" y2="726" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="704" font-size="12" fill="#334155">Stored records, read when the dashboard asks</text>

<circle cx="80" cy="758" r="18" fill="#0f766e"/><text x="80" y="764" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">7</text>
<rect x="130" y="726" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="753" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">FastAPI Backend</text>
<text x="300" y="773" text-anchor="middle" font-size="13" fill="#334155">Serves the latest data on request</text>
<line x1="500" y1="730" x2="500" y2="786" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="753" font-size="13" fill="#334155">When the dashboard asks, reads the latest positions and</text>
<text x="514" y="773" font-size="13" fill="#334155">alerts from the database and formats the response.</text>
<line x1="300" y1="790" x2="300" y2="842" stroke="#334155" stroke-width="2" marker-end="url(#b)"/>
<text x="314" y="820" font-size="12" fill="#334155">REST API response (JSON): positions and alerts</text>

<circle cx="80" cy="874" r="18" fill="#0f766e"/><text x="80" y="880" text-anchor="middle" font-weight="bold" font-size="16" fill="#ffffff">8</text>
<rect x="130" y="842" width="340" height="64" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
<text x="300" y="869" text-anchor="middle" font-weight="bold" font-size="16" fill="#0f172a">Web Dashboard</text>
<text x="300" y="889" text-anchor="middle" font-size="13" fill="#334155">Shows boats and alerts to coordinators</text>
<line x1="500" y1="846" x2="500" y2="902" stroke="#cbd5e1" stroke-width="2"/>
<text x="514" y="869" font-size="13" fill="#334155">Updates the live map and highlights SOS alerts so</text>
<text x="514" y="889" font-size="13" fill="#334155">responders can act quickly.</text>
</svg>