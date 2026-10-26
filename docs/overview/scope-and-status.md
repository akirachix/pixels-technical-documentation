# Scope and Status

This page states what MvuviGo includes, what it deliberately excludes, what it relies on, and where it is limited. Read it before relying on any claim elsewhere in the documentation.

## Status labels

| Label | Meaning |
|---|---|
| **MVP** | Part of the current MVP design |
| **Planned** | Intended for a later version. **Not** part of the MVP |
| **Excluded** | Deliberately outside the product |
| **Unverified** | An assumption or benefit not yet demonstrated |


## What is in the MVP

| Capability | Status |
|---|---|
| Fisher registration and device pairing, with RFID identification | MVP |
| SOS button with GPS location capture | MVP |
| Long-range radio transmission to the landing station | MVP |
| Alerts to nearby participating fishers, with their location sharing | MVP |
| Emergency dashboard with boat locations and distances | MVP |
| AI-generated responder directions | MVP |
| Direction delivery by feature-phone message, refreshed every 30 seconds | MVP |
| Operator coordination by phone and incident recording | MVP |


## System boundaries

MvuviGo does **not**:

| It does not... | Because... |
|---|---|
| Forecast weather or issue weather warnings | The MVP focuses on emergencies and response, not prediction |
| Steer or control boats | Rescue decisions stay with the people on the water |
| Dispatch rescue teams or make final decisions | The AI guides; people decide |
| Provide its own voice-calling service | Operators use the normal phone network |
| Keep a person afloat or prevent drowning | It signals and guides; it is not safety equipment |
| Track boats continuously | Location is shared on SOS, to protect fishers' privacy |
| Replace formal search and rescue | It is a local first-response layer that complements formal services |

