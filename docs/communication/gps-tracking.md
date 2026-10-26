# GPS Tracking

Knowing the exact location of a boat in trouble is essential for rescue. However, GPS is not just about tracking boats at all times but about sharing the location when an emergency happens.

## How Locations are Mapped
The fisher device is equipped with a GPS receiver. The system uses GPS to get the coordinates of the boats, which are tied to the specific island locations where the fishers are operating.

## When is Location Sent?
MvuviGo is designed with privacy in mind. The system does not continuously track fishers to avoid fears of enforcement. 
* **SOS Activation:** When a fisher presses the SOS button, the device obtains the latest available GPS location (island coordinates).
* **Responder Locations:** Participating boats receiving the alert also provide their current island coordinates through their MvuviGo devices.

## Backend Calculations
Once the SOS and responder locations are received by the landing station, the backend system calculates the distance between the distressed fisher's island coordinates and the rescue fisher's island coordinates. This calculation is displayed on the dashboard so the operator can coordinate the closest boat to respond.