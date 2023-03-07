var searchHistory = {lat:null, lon:null};
var weatherApi = 'https://api.openweathermap.org';
var weatherKey = 'f7469905dc510624a4d06798128d3ada'

function weather(){
  for (let i = 0; i < array.length; i++) {
    
    var weatherToday = document.createElement('article')
    weatherToday.innerHTML = `
            <h2>${title}</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
          `;
      document.getElementById('today').append(weatherToday)
    
  }
}

function forecast() {
  for (let i = 0; i < array.length; i++) {
    var forecast5 = document.createElement("section");
    forecast5.className = "row m-3";
    forecast5.innerHTML = `
        
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
}

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('today').innerHTML = "";

  var search = document.getElementById('searchBar').value;
  var searchLat = location;
  var searchLon = location;
  var weatherUrl = `${weatherApi}/data/2.5/forecast?lat=${searchLat}&lon=${searchLon}&units=imperial&appid=${weatherKey}`;

  fetch(weatherUrl)
    .then(function (request){
      return request.json();
    })
    .then(function(data){
      console.log(data);
      

    })

})