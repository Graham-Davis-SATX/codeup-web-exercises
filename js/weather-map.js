$(document).ready(function() {
    "use strict";

    // this is the button that activates the ajax request
    $('#submitWeather').click(function(){

        // gets the value of the input field
        var city = $('#city').val();

        //check to see if input field is empty
        if(city != ''){

            $.ajax({ //city is passed in from the input field above
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial' + '&APPID=7f8e3aa0aad113510e0c1eaafd1c17b8',
                type: 'GET',
                dataType: 'jsonp',
                //request has been sent and the return info is stored in the 'data' callback
                success: function(weatherData){
                    console.log(weatherData);
                    var widgetToday = showToday(weatherData);
                    var widgetTomorrow = showTomorrow(weatherData);
                    var widgetDayThree = showDayThree(weatherData);

                    $('#today').html(widgetToday);
                    $('#tomorrow').html(widgetTomorrow);
                    $('#day-three').html(widgetDayThree);

                    //empty the input field after button submission
                    $('#city').val('');
                }
            });
            dayOfWeek();

        } else {
            $('#error').html('Field cannot be empty!');
        }

    });

    function dayOfWeek() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var today = weekday[d.getDay()];
        $('#todayDate').html(today)
        var tomorrow = weekday[d.getDay() + 1];
        $('#tomorrowDate').html(tomorrow)
        var thirdDay = weekday[d.getDay() + 2];
        $('#thirdDayDate').html(thirdDay)
    }

    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    function hpaInches(num) {
        var val = (num * .030);
        return val.toFixed(2)
    }

    function showToday(weatherData){
        return  '<div class="container"><div class="row">' +
            '<div class="col"><h6 class="description"><strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[0].weather[0].icon +'.png">' + weatherData.list[0].weather[0].description + '</strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[0].weather[0].icon +'.png">' + '</h6></div></div>' +
            '<div class="row"><div class="col-6"><p><strong>High</strong>:<br> '+ weatherData.list[0].main.temp_max +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Low</strong>:<br> '+ weatherData.list[0].main.temp_min +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Wind Speed</strong>:<br> '+ weatherData.list[0].wind.speed +' mph' + '</p></div>' +
            '<div class="col-6"><p><strong>Wind Direction</strong>:<br> '+ degToCompass(weatherData.list[0].wind.deg) + '</p></div>' +
            '<div class="col"><p><strong>Humidity</strong>:<br> '+ weatherData.list[0].main.humidity +' %</p></div>' +
            '<div class="col"><p><strong>Barrometer</strong>:<br> '+ hpaInches(weatherData.list[0].main.pressure) +' inches</p></div>';
    }

    function showTomorrow(weatherData){
        return  '<div class="container"><div class="row">' +
            '<div class="col"><h6 class="description"><strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[8].weather[0].icon +'.png">' + weatherData.list[8].weather[0].description + '</strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[8].weather[0].icon +'.png">' + '</h6></div></div>' +
            '<div class="row"><div class="col-6"><p><strong>High</strong>:<br> '+ weatherData.list[8].main.temp_max +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Low</strong>:<br> '+ weatherData.list[8].main.temp_min +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Wind Speed</strong>:<br> '+ weatherData.list[8].wind.speed +' mph' + '</p></div>' +
            '<div class="col-6"><p><strong>Wind Direction</strong>:<br> '+ degToCompass(weatherData.list[8].wind.deg) + '</p></div>' +
            '<div class="col"><p><strong>Humidity</strong>:<br> '+ weatherData.list[8].main.humidity +' %</p></div>' +
            '<div class="col"><p><strong>Barrometer</strong>:<br> '+ hpaInches(weatherData.list[8].main.pressure) +' inches</p></div>';
    }

    function showDayThree(weatherData){
        return  '<div class="container"><div class="row">' +
            '<div class="col"><h6 class="description"><strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[16].weather[0].icon +'.png">' + weatherData.list[16].weather[0].description + '</strong>' + '<img src="http://openweathermap.org/img/w/' + weatherData.list[16].weather[0].icon +'.png">' + '</h6></div></div>' +
            '<div class="row"><div class="col-6"><p><strong>High</strong>:<br> '+ weatherData.list[16].main.temp_max +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Low</strong>:<br> '+ weatherData.list[16].main.temp_min +' &degF</p></div>' +
            '<div class="col-6"><p><strong>Wind Speed</strong>:<br> '+ weatherData.list[16].wind.speed +' mph' + '</p></div>' +
            '<div class="col-6"><p><strong>Wind Direction</strong>:<br> '+ degToCompass(weatherData.list[16].wind.deg) + '</p></div>' +
            '<div class="col"><p><strong>Humidity</strong>:<br> '+ weatherData.list[16].main.humidity +' %</p></div>' +
            '<div class="col"><p><strong>Barrometer</strong>:<br> '+ hpaInches(weatherData.list[16].main.pressure) +' inches</p></div>';
    }


    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }


}); //ends the doc.ready func