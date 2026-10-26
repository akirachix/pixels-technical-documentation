# SMS Integration

While the landing-site operator uses a dashboard to coordinate rescues, the actual rescue is often performed by other fishers. The research shows that many fishers only have basic feature phones. 

## The SMS Leopard Gateway
To bridge the gap between our system and basic phones, MvuviGo integrates with **SMS Leopard**, an external SMS gateway service.

## How the Alerts Work
1. **SOS is Triggered:** The system identifies nearby participating boats that can respond using the backend distance calculations.
2. **Alert Generation:** The backend generates an emergency message containing the distressed boat's location.
3. **SMS Delivery:** The system sends the alert through the SMS Leopard API to the feature phones of nearby fishers.
4. **Direct Guidance:** The responding fishers receive the text message with the coordinates and navigate to the distressed boat to help.