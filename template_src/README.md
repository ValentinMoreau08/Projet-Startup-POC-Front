# Projet-Statup-POC-Front

## Installation
- Clone repository : `git clone https://github.com/ValentinMoreau08/Projet-Startup-POC-Front.git`
- Navigate into cloned folder : `cd Projet-Startup-POC-Front`
- Use latest branch : `git checkout master`
- Install with npm : `npm install`
  
 ## Start
#### WEB
* Inside Projet-Startup-POC-Front/template_src use command : `cordova run browser -- --live-reload`
#### Mobile (Android)
* Connect your android phone to your computer
* Run command `adb reverse tcp:8180 tcp:8180` so that you can access your api from your localhost:8180 
* Inside Projet-Startup-POC-Front/template_src use command : `cordova run android`
* Note: You can also find the apk in the root of the project
