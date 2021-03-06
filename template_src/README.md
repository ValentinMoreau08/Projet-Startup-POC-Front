![template logo](logo_v2.png "../template logo")

# Projet-Statup-POC-Front

This project uses:
* [Framework7 5](https://framework7.io)
* [Vue 2](https://vuejs.org/)
* [Vuex](https://github.com/vuejs/vuex)
* [Webpack 4](https://webpack.github.io/)
* [Cordova](https://cordova.apache.org/)
* [FontAwesome 5](http://fontawesome.io/)
* [Babel Loader 7](https://github.com/babel/babel-loader)


## Minimum Requirements
* **Cordova:** _6.0.0_
* **Node.js:** _6.5.0_ (Supports ES6)


## Installation
- Clone repository : `git clone https://github.com/ValentinMoreau08/Projet-Startup-POC-Front.git`
- Navigate into template cloned folder : `cd Projet-Startup-POC-Front/template_src`
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
