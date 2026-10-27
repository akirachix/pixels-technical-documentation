# Product Definition

## The problem

Lake Victoria supports the livelihoods of many small-scale fishers who spend long hours on the water in small boats. Storms, strong winds, high waves and accidents can place them in danger quickly, often far from the landing site, and at night.

When that happens, three things go wrong:

1. **The fisher has no dependable way to call for help.** Many fishers do not have a reliable way to raise an alarm, and mobile coverage on the water cannot be assumed.
2. **Nobody nearby knows where the boat is.** Other fishers and the landing site may not learn that help is needed, or where.
3. **Response is slow and informal.** Rescue depends on fellow fishers noticing and having a boat and fuel available. Searches can take a long time, and little is recorded afterward.

Other measures address parts of the problem but not this gap:

| Measure | What it does | What it leaves open |
|---|---|---|
| Weather forecasts and alerts | Warn areas of dangerous conditions | Do not tell anyone a specific boat is in trouble |
| Life jackets and safety training | Reduce the risk of drowning | Do not summon help |
| Satellite emergency beacons | Alert distant national authorities | Costly, and do not alert nearby fishers |
| Government rescue centres | Coordinate formal rescue | Not yet within quick reach of every landing site |
| Informal community rescue | Uses fishers already on the water | Slow, with no way to locate the boat |

## Purpose

MvuviGo shortens the delay between **a boat getting into trouble** and **someone nearby knowing where it is and acting**.

It does this by combining four capabilities:

- a one-button **alarm** that works without mobile coverage;
- an immediate **alert** to the landing site and to the nearby fishers best placed to help;
- **guidance** that helps responders find the distressed boat as it and they move;
- **coordination and a record** managed by a person at the landing site.

The product boundary is **emergency detection, local notification, response coordination and incident recording**.

## Target users

| User | Who they are | What they need from MvuviGo | Constraints that shape the design |
|---|---|---|---|
| **Fisher in distress** | A small-scale fisher who may be far from shore | Raise an alarm quickly, with a usable location, without a smartphone | Cannot rely on mobile coverage. Location is shared on SOS, not continuously |
| **Responding fisher** | A participating fisher on a nearby boat | Know that someone needs help, where they are, and how to reach them as positions change | Often has only a basic feature phone, so guidance arrives as simple messages |
| **Landing-site operator** | The person at the landing site who runs the station | One view of the emergency, who is nearby and how far away, and a way to record the outcome | Coordinates by phone. Needs to be available when boats are out |

Others are affected but are not direct users: boat owners and landing-site organisations (who are likely to provide and support devices), fishers' families, and rescue agencies that may use incident information.

## Main use cases

| # | Use case | What happens | Outcome |
|---|---|---|---|
| 1 | **Raise an alarm** | A fisher in danger presses the SOS button. The device captures the latest available GPS location and sends the alert over radio | The landing site and nearby participating fishers know that help is needed and where |
| 2 | **Respond to an alarm** | A nearby fisher is alerted, their position is shared, and they receive directions to the distressed boat. Directions refresh every 30 seconds as boats move | The responder can decide whether and how to help and adjust their route |
| 3 | **Coordinate from shore** | The operator sees the distressed boat, nearby boats and distances on a dashboard, then contacts responders by normal phone call | Response is organised by a person with the full picture |
| 4 | **Record the incident** | The operator records the incident, responses, status and outcome | A record exists for follow-up and for improving safety |
| 5 | **Set up participation** | The operator registers a fisher and pairs a device to them | Alerts are tied to the right person |

## Core functionality in one paragraph

A fisher carries a device. Pressing its button sends an SOS with the fisher's identity and latest location by long-range radio to the landing station and nearby participating devices. Nearby boats share their positions. The landing-site dashboard shows the distressed boat, nearby boats and distances, and AI-generated directions are sent to responders' feature phones, refreshed as positions change. The operator coordinates the response and records the outcome. See [System Overview](system-overview.md) for how this works step by step.
