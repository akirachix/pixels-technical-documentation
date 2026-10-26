# Architecture Principles

This document explains the main rules we followed when building the MvuviGo platform. These rules make sure the system is reliable, safe, and works well even in tough ocean environments.

## 1. Works Without Internet (Edge-First)
**Rule:** The system must keep working even when there is no cellular network.
**How we do it:**
* The physical devices use LoRa radio signals to talk to each other and to the shore.
* If the shore station loses internet, it saves the data locally. It only sends data to the cloud when the connection comes back.

## 2. Stateless Cloud Servers
**Rule:** Our cloud servers should not hold onto temporary memory to work.
**How we do it:**
* All important data is saved immediately to the database.
* User logins are handled by secure tokens (JWT), not by the server remembering them.
* Because of this, if one server gets too busy, we can easily add another server to share the work.

## 3. Different Apps for Different People
**Rule:** Each type of user needs a different way to use the system.
**How we do it:**
* **Station Operators** use a full Web Dashboard to see maps, register fishers, and manage rescue missions.
* **Rescue Responders** get simple text messages on basic phones (using SMS Leopard). They don't need an app.
* **Fishers** only use physical devices (RFID wristbands and SOS buttons). They don't need to use software at all.

## 4. Fast and Asynchronous Data
**Rule:** Sending GPS locations and emergency alerts should never slow down the system.
**How we do it:**
* We use a messaging system called **MQTT**. 
* The **Node.js server** processes these messages in the background. This means a sudden flood of SOS alerts or GPS pings won't crash the main website.

## 5. Emergency Alerts Come First
**Rule:** An SOS signal is a life-or-death event. It must be handled instantly.
**How we do it:**
* When an SOS is received, the system skips the normal queue and immediately triggers the SMS service to alert nearby rescuers.
* The database keeps a strict record of every alert from the moment it is pressed until it is marked "Resolved", so no calls for help are ever lost.

## 6. Hardware Independence
**Rule:** The cloud software should not break if we change the physical hardware.
**How we do it:**
* The hardware (ESP32) sends simple text data (JSON) to the cloud.
* As long as the hardware sends the Fisher ID, GPS location, and SOS status, the backend doesn't care what type of chip or battery the device uses. This makes it easy to upgrade the hardware later.