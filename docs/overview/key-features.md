# Key Features

Features are grouped by the job they do and linked to the PRD's core feature IDs. For delivery status see [Scope and Status](scope-and-status.md).

## 1. Raise an alarm

| Feature | What it does | Why it exists | ID |
|---|---|---|---|
| SOS button | One press starts an emergency | Many lakeside residents did not know how to call for rescue | CF-02 |
| GPS capture | Records the latest available location with the SOS | Rescuers need to know where the boat is | CF-02 |
| LoRa transmission | Sends the SOS and location to the landing station | Avoids reliance on mobile coverage for the first alert | CF-03 |
| Buzzer and OLED | Local audible and visual feedback | Confirms the device is working | n/a |

## 2. Alert the people closest to the incident

| Feature | What it does | Why it exists | ID |
|---|---|---|---|
| Emergency notification | Alerts the landing station and nearby participating fishers | Fellow fishers are the main rescue service | CF-04 |
| Responder location | Nearby devices share their current positions | Lets the system see who can reach the boat | CF-04 |

## 3. Guide and coordinate the response

| Feature | What it does | Why it exists | ID |
|---|---|---|---|
| Emergency dashboard | Shows the emergency, the distressed boat, nearby boats and distances | The operator needs one view of the incident | CF-05 |
| Automated directions | Produces directions from each responder to the distressed boat | Helps responders find the boat, especially at night | CF-06 |
| Response coordination | Operator monitors and contacts responders by normal phone call | Rescue stays human-led | CF-08 |

## 4. Run the service

| Feature | What it does | Why it exists | ID |
|---|---|---|---|
| Fisher registration and device pairing | Operator links each fisher to a unique device | Knows who is in the network and who is in distress | CF-01 |
| RFID identification | Identifies the registered fisher during use | Ties alerts to a person | CF-01 |
| Incident recording | Logs the incident, response, status and outcome | Addresses poor incident records and supports follow-up | CF-08 |

## Design limits on these features

- **AI directions are decision support.** They do not dispatch rescue, control boats or make final decisions (OOS-02).
- **Location is shared on SOS, not continuously.** There is no trip tracking in the MVP.
- **The system does not forecast weather** (OOS-01).
- **The features cover the communication and coordination chain between trouble and local help.** They do not make a rescue happen. Whether a boat is available, able and willing to respond depends on people and equipment outside the system.