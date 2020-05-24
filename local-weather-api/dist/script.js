console.clear();

async function displayWeather() {
   if (navigator.geolocation) {
     await navigator.geolocation.getCurrentPosition(await function (position) {
     let lat =  position.coords.latitude;
     let long =  position.coords.longitude;
     getWeather(lat,long);
      }
    );
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

async function getWeather(lat,long){
  let URL = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long;
     console.log(URL);
     let response = await fetch(URL);
  let myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  document.getElementById("Humidity").innerHTML = myJson.main.humidity;
  document.getElementById("Pressure").innerHTML = myJson.main.pressure;
  document.getElementById("Temperature").innerHTML = myJson.main.temp;
  document.getElementById("Icon").innerHTML = '<img src="' + myJson.weather[0].icon + '" height="40%" />'
}