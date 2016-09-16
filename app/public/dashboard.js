
    $( document ).ready(function() {

        var thermostat = new Thermostat();

        $("#temperature").text(thermostat._temperature);
        displayWeather('London');

        function displayWeather(city) {
          var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
          var apiKey = '&appid=6c66c4f026618a28e24f3fbbc492da5d';
          var units = '&units=metric';
          $.get(url + city + apiKey + units, function(data) {
          $('#current-temperature').text(data.main.temp);
          $('#city').text(city);
            });
        }


        $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
        });

        $("#temperature-up").click(function() {
          thermostat.increase();
          updateTemperature();
        });

        $("#temperature-down").click(function () {
          thermostat.decrease();
          updateTemperature();
        });

        $("#temperature-reset").click(function () {
          thermostat.resetTemp();
          updateTemperature();
        });

        $("#powersaving-on").click(function () {
          thermostat.turnPowerSavingOn();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

        $("#powersaving-off").click(function () {
          thermostat.turnPowerSavingOff();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

        function updateTemperature() {
          $('#temperature').text(thermostat._temperature);
          // $('#temperature').attr('class', thermostat.colour());
          $('.den').css("background", thermostat.colour());

        }

    });
