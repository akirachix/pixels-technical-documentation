# LoRa Relay and Mesh

LoRa (Long Range) is a radio technology that allows devices to communicate over long distances without relying on mobile networks. It is the backbone of MvuviGo's emergency alert system.

## Why LoRa?
The research shows that fishers often rely on basic phones, and network coverage on the water is unmeasured. Because mobile coverage is unreliable, MvuviGo uses LoRa to ensure the initial emergency alert does not depend on cellular networks.

## Transmission Architecture
When a fisher presses the SOS button, the device transmits the emergency through LoRa to the landing station and nearby participating boats. 

The system requires a specific architecture to work:
* **Point-to-Point LoRa:** Direct transmission from the device to the station.
* **Mesh or LoRaWAN Relay:** Direct device-to-device alerts need point-to-point LoRa or a mesh network to function effectively.

## Range Challenges
While LoRa links have been measured at over 15 km on land and close to 30 km on water under good conditions, the reality on small boats is different. A low-cost prototype in Indonesia reached only about 2 km from shore. The exact range on Lake Victoria from small boats remains untested, which is a key technical risk for the system.