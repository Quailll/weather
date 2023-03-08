var lon ="";
var lat ="";
var currentWeather = "";
var currentForecast = "";

function weather(currentWeather) {
  document.getElementById("today").innerHTML = "";
  console.log(currentWeather);
  var titleEl = currentWeather.name;
  var tempEl = currentWeather.main.temp;
  var windEl = currentWeather.wind.speed;
  var humidityEl = currentWeather.main.humidity;
  var img = currentWeather.weather[0].icon;
  var weatherToday = document.createElement("section");
  weatherToday.innerHTML = `
              <h2>${titleEl}</h2>
              <img src="https://openweathermap.org/img/wn/${img}@2x.png">
              <p>Temp:${tempEl}</p>
              <p>Wind:${windEl}mph</p>
              <p>Humidity:${humidityEl}</p>
            `;
  document.getElementById("today").append(weatherToday);
  console.log;
}



function forecast(currentForecast) {
  document.getElementById("forecast").innerHTML = "";
  for (let i = 0; i < currentForecast.length; i+=8) {
    
    var titleEl = currentForecast[i].dt_txt;
    var tempEl = currentForecast[i].main.temp;
    var windEl = currentForecast[i].wind.speed;
    var humidityEl = currentForecast[i].main.humidity;
    var img = currentForecast[i].weather[0].icon;
    var forecast5 = document.createElement("section");
    forecast5.className = "row card m-3";
    forecast5.innerHTML = `
          
          
            <h3>${titleEl}</h3>
            <img src="https://openweathermap.org/img/wn/${img}@2x.png">
            <p>Temp:${tempEl}F</p>
            <p>Wind:${windEl}mph</p>
            <p>Humidity:${humidityEl}</p>
          
          
          `;
    document.getElementById("forecast").appendChild(forecast5);
  }
  
  
};

function weatherFetch() {
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7469905dc510624a4d06798128d3ada`;
 
  fetch(weatherUrl)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      var currentWeather = data;
      weather(currentWeather);
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
function forecastFetch() {
  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=f7469905dc510624a4d06798128d3ada`;
  fetch(forecastUrl)
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
 };   



document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  
  var search = document.getElementById("searchBar").value.trim();
  if (!search) {
    return;
  }
  cityNameList.push(search);
  var locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=f7469905dc510624a4d06798128d3ada`;

  city(locationUrl)
  var historyButton= document.createElement('button')
    historyButton.className = "historyBtn row"
    historyButton.textContent = search
    historyButton.addEventListener('click', function(event){
    city(locationUrl)});
  document.getElementById('savedcities').append(historyButton)
  
  localStorage.setItem("cityList", JSON.stringify(cityNameList));
});

function city(Url) {
  fetch(Url)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      lon = data[0].lon;
      lat = data[0].lat;

      forecastFetch();
      weatherFetch();
    })
    .catch(function (error) {
      console.log(error);
    });
}


var cityNameList = JSON.parse(localStorage.getItem("cityList")) || [];
function createHistory(name){
  var historyButton = document.createElement("button");
  historyButton.className = "historyBtn row";
  historyButton.textContent = name;
  var locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=f7469905dc510624a4d06798128d3ada`;
  console.log(JSON.stringify(name));
  historyButton.addEventListener("click", function (event) {
    city(locationUrl);
    console.log(JSON.stringify(name));
  });

  document.getElementById("savedcities").append(historyButton);
}
function savedHistory() {
  for (let i = 0; i < cityNameList.length; i++) {
    var search = cityNameList[i];
    createHistory(search);
    
  }
}
savedHistory()


// var searchedCities 
  // var myvar = JSON.parse(localStorage.getItem('itemName')) || []
  // if (){

  // }
//want a usable variable that will be an array 
//var searchedCities
//if cities exist searchedCities will be the result of getting local storage
//myvar.push('someString')
//else it will be an empty array
  

 
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