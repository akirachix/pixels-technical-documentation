# System Overview

This page explains how MvuviGo works at the level of components and flow. It does not describe code or deployment.

## Components

| Component | Where it is | What it does |
|---|---|---|
| **Fisher device** | On the boat | Captures GPS location, sends the SOS by radio, receives alerts, and identifies the fisher |
| **Landing station** | At the landing site | Receives radio transmissions from devices and passes them on |
| **Backend and database** | Hosted online | Stores fisher, device, emergency and incident information; calculates the distance of each boat from the distressed boat; generates the automated direction messages |
| **Dashboard** | On the operator's screen | Shows the emergency, boat locations and distances |
| **Feature-phone messaging** | Phone network | Delivers direction messages to responders without needing a smartphone |

## Emergency flow

Setup happens once, in advance. The other four phases run during an emergency.

<style>
.flow { --accent: #0B7285; margin: 24px 0; }
.flow-card { border: 1px solid var(--vp-c-divider); border-left: 4px solid var(--accent); border-radius: 6px; padding: 14px 18px; margin-bottom: 12px; background: var(--vp-c-bg-soft); }
.flow-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; margin-bottom: 8px; }
.flow-title { font-size: 1.05rem; font-weight: 700; color: var(--accent); }
.flow-who { font-size: 0.85rem; color: var(--vp-c-text-2); }
.flow-step { position: relative; padding-left: 16px; margin: 5px 0; font-size: 0.95rem; color: var(--vp-c-text-1); }
.flow-step::before { content: "\203A"; position: absolute; left: 3px; color: var(--accent); font-weight: 700; }
.flow-loop { margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--vp-c-divider); font-size: 0.88rem; color: var(--vp-c-text-2); }
.flow-note { margin-top: 4px; font-size: 0.9rem; color: var(--vp-c-text-2); }
</style>

<div class="flow">
<div class="flow-card">
<div class="flow-head"><span class="flow-title">Setup</span><span class="flow-who">Operator · before fishing</span></div>
<div class="flow-step">Registers the fisher and pairs a unique device</div>
<div class="flow-step">RFID links the fisher to the device</div>
</div>
<div class="flow-card">
<div class="flow-head"><span class="flow-title">Alarm</span><span class="flow-who">Fisher in distress · on the water</span></div>
<div class="flow-step">Presses the SOS button</div>
<div class="flow-step">Device captures the latest available GPS location</div>
<div class="flow-step">Alert is sent by long-range radio, with no mobile coverage needed</div>
</div>
<div class="flow-card">
<div class="flow-head"><span class="flow-title">Alert</span><span class="flow-who">Landing station and nearby boats</span></div>
<div class="flow-step">Landing station receives the alert</div>
<div class="flow-step">Nearby participating boats are alerted at the same time</div>
<div class="flow-step">Nearby boats share their current locations</div>
</div>
<div class="flow-card">
<div class="flow-head"><span class="flow-title">Guide</span><span class="flow-who">Backend · automated</span></div>
<div class="flow-step">Calculates each boat's distance from the distressed boat</div>
<div class="flow-step">Generates a direction message for each responder</div>
<div class="flow-step">Sends the messages to responders' feature phones</div>
<div class="flow-loop">Repeats every 30 seconds with the latest locations, so directions follow the boats as they move.</div>
</div>
<div class="flow-card">
<div class="flow-head"><span class="flow-title">Coordinate</span><span class="flow-who">Operator · landing site</span></div>
<div class="flow-step">Dashboard shows the distressed boat, nearby boats and distances</div>
<div class="flow-step">Coordinates responders by normal phone call</div>
<div class="flow-step">Records the incident, responses and outcome</div>
</div>
<div class="flow-note">Guide and Coordinate run at the same time: the backend keeps sending directions while the operator coordinates and records the incident.</div>
</div>


1. The operator registers the fisher and pairs a device in advance.
2. The fisher presses SOS. The device captures the latest available location.
3. The alert travels over long-range radio to the landing station and nearby participating boats.
4. Nearby boats share their current locations.
5. The backend calculates each responding boat's distance from the distressed boat.
6. The dashboard shows the distressed boat, nearby boats and distances.
7. The backend automatically sends direction messages to responders' feature phones, and refreshes them every 30 seconds as boats move.
8. The operator monitors the emergency and coordinates by normal phone call.
9. The operator records the incident, responses and outcome.


## When something fails

The system is designed so that failures are visible and a person can always take over.

| If this fails | What should happen |
|---|---|
| GPS cannot give a usable location | The system says so. An old or invalid location is never shown as current |
| A responder's location is missing or out of date | The system says so and does not treat it as current |
| Automated direction messages stop | The operator continues using the locations and distances on the dashboard |
| Message delivery fails | The operator coordinates responders by normal phone call |
| The dashboard is unavailable | Phone calls remain available for coordination |
| The landing site loses internet | The radio alert may still arrive, but dashboard updates and direction messages may be delayed or unavailable. The loss is flagged |

## System boundary

**Inside MvuviGo:** the fisher device, landing station, backend and database (including distance calculation and automated direction messages), dashboard, feature-phone messaging and the incident record.

**Outside MvuviGo:** weather forecasting, life-saving equipment, formal search and rescue, boat control, and the voice calls themselves, which use the ordinary phone network. See [Scope and Status](scope-and-status.md#system-boundaries) for what the system deliberately does not do.