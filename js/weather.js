var dis_temp = document.getElementById('dis_temp');
// Require the module 
var Forecast = require('forecast');
var Locx = localStorage.getItem("x")
var Locy = localStorage.getItem("y")

 
// Initialize 
var forecast = new Forecast({
  service: 'darksky',
  key: '55defc1ac8ce0557a6c6cd69028a83a1',
  units: 'fahrenheit',
  cache: true,      // Cache API requests 
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
    minutes: 27,
    seconds: 45
  }
});
// Retrieve weather information from coordinates (Sydney, Australia) 
forecast.get([localStorage.getItem("userLocation")], function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather.currently.temperature);
  let currentTemp = weather.currently.temperature;
  dis_temp.innerHTML = currentTemp.toString().slice(0,-3) + "F";
});
 
// Retrieve weather information, ignoring the cache 
forecast.get([-33.8683, 151.2086], true, function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather);
});
