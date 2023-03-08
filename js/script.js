var lon ="";
var lat ="";
var currentWeather = "";
var currentForecast = "";

function weather(currentWeather) {
    var titleEl = currentWeather[0].name;
    var tempEl = "";
    var windEl = "";
    var humidityEl = "";

    var weatherToday = document.createElement("section");
    weatherToday.innerHTML = `
              <h2>title</h2>
              <p>Temp:</p>
              <p>Wind:</p>
              <p>Humidity:</p>
            `;
    document.getElementById("today").append(weatherToday);
  
}



function forecast(currentForecast) {
  var titleEl = "";
  var tempEl = "";
  var windEl = "";
  var humidityEl = "";
  var forecast5 = document.createElement("section");
  forecast5.className = "row m-3";
  forecast5.innerHTML = `
          <h2>5 Day Forecast</h2>
          <section class="card">
            <h3>title</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          </section>
          <section class="card">
            <h3>title</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          </section>
          <section class="card">
            <h3>title</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          </section>
          <section class="card">
            <h3>title</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          </section>
          <section class="card">
            <h3>title</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          </section>
        </section>
          `;
  document.getElementById("forecast").append(forecast5);
}

function weatherFetch() {
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7469905dc510624a4d06798128d3ada`;

  fetch(weatherURL)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      var currentWeather = data.list;
      weather(currentWeather);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function forecastFetch() {
  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=f7469905dc510624a4d06798128d3ada`;
  fetch(weatherURL)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      var currentForecast = data.list;
      forecast(currentForecast);
    })
    .catch(function (error) {
      console.log(error);
    });
}



document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("forecast").innerHTML = "";

  var search = document.getElementById("searchBar").value.trim();
  if (!search) {
    return;
  }
  
  var locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=f7469905dc510624a4d06798128d3ada`;

  fetch(locationUrl)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data)
      lon = data[0].lon;
      lat = data[0].lat;
    
      forecast();
      weather();
    })
    .catch(function (error) {
      console.log(error);
    });
});
  

 
// var cityNameList;

// cityNameList = GetLocalStorage:

// if cityNameList
//    Then parse 
//    and use .push to put users input into array
// else
//    cityNameList = [UserInput];

//  setLocalStorage(stringify(cityNameList))

// forloop use .length with cityNameList
// create a button for each city name