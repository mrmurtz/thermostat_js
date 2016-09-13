function Thermostat() {
  this.temperature = 20;
  this.powerMode = true;
  this._maxTemp = {true: 25, false: 32};
};

Thermostat.prototype = {
  increase: function () {
    if (this.temperature >= this._maxTemp[this.powerMode]) {
        throw new Error("Max temperature reached");
    }
    else {
      this.temperature+=1;
    }
  },

  decrease: function() {
    if (this.temperature <= 10 ) {
      throw new Error("Min temperature reached");
    }
    else {
      this.temperature-=1;
    }
  },

  switchMode: function() {
    this.powerMode=!this.powerMode;
  },

  reset: function() {
    this.temperature = 20;
  },

  usage: function() {
    if (this.temperature < 18) {
      return "low";
    }
    else if (this.temperature < 25) {
      return "medium";
    }
    else {
      return 'high';
    }
  }
};


//  let's play with jquery

$(document).ready(function(){
  thermostat = new Thermostat();
  document.getElementById("current_temp").innerHTML = thermostat.temperature;
  document.getElementById('power_mode').innerHTML = thermostat.powerMode;

  $("#increase").click(function(){
    thermostat.increase();
  });

  $("#decrease").click(function(){
    thermostat.decrease();
  });

  $("#powermode").click(function(){
    thermostat.switchMode();
  });

  $("#reset").click(function(){
    thermostat.reset();
  });

  $("input[name=get_weather]").click(function(){
      var city = $("input[name=city]").val();
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&mode=html&APPID=3a84c4df6fb1e4c07a803fb0a4cec88e&units=metric",
        data: {
          format: "html"
        },
        success: function(data) {
          document.getElementById("main_temp").innerHTML = data;
        },
        error: function() {
          document.getElementById("main_temp").innerHTML = 'Not A Known City';
        }
      });
  });

  //  loadup

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&mode=html&APPID=3a84c4df6fb1e4c07a803fb0a4cec88e&units=metric",
    data: {
      format: "html"
    },
    success: function(data) {
      document.getElementById("main_temp").innerHTML = data;
    }
  });

});

$(document).click(function(){
  document.getElementById("current_temp").innerHTML = thermostat.temperature;
  document.getElementById("power_mode").innerHTML = thermostat.powerMode;
  document.getElementById("indicator").value = thermostat.temperature;
});


$(document).click(function(){
    if (thermostat.usage() == 'high') {

      $("#thermostat").css("background-color", "red");
    }
    else if (thermostat.usage() == 'low') {
      $("#thermostat").css("background-color", "yellow");
    }
    else {
      $("#thermostat").css("background-color", "#ff9900");
    }
});
