var lon ="";
var lat ="";


function weather(){
  // for (let i = 0; i < array.length; i++) {
  var titleEl= "";
  var tempEl= "";
  var windEl= "";
  var humidityEl= "";

  var weatherToday = document.createElement('section')
  weatherToday.innerHTML = `
            <h2>title</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          `;
  document.getElementById('today').append(weatherToday)
    
  // }
}



function forecast(days) {
  // for (let i = 0; i < array.length; i++) {
    console.log(days)
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

  // }
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("forecast").innerHTML = "";

  var search = document.getElementById("searchBar").value;

  var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=f7469905dc510624a4d06798128d3ada`;

  fetch(weatherUrl)
    .then(function (request) {
      return request.json();
    })
    .then(function (data) {
      console.log(data);
      var days = data.list;
      weather(days);
    });
});


document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('forecast').innerHTML = "";

  var search = document.getElementById('searchBar').value;

  var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=f7469905dc510624a4d06798128d3ada`;

  fetch(weatherUrl)
    .then(function (request){
      return request.json();
    })
    .then(function(data){
      console.log(data);
      var days = data.list;
      forecast(days);
    })

})

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