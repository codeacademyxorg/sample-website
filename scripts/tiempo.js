
function kelvinToCelsius(temperatureInKelvin) {
    var temperatureInCelsius = temperatureInKelvin - 273.15
    return temperatureInCelsius.toFixed(2);
}

function displayData(data) {
    'use strict';

    $("#weather").empty();
    
    $("#weather")
        .append($("<p></p>").text(data.weather[0].main))
        .append($("<p></p>").text(data.weather[0].description))
        .append($("<p></p>").text("Temperatura: " + kelvinToCelsius(data.main.temp) + " graus."));
}

function getWeather() {

    $.get("http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=5c6970a8066072402931cb2aa47fb136", function( data ) {
        //alert( JSON.stringify(data));
        displayData(data)
    });
}