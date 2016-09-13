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

  $("input[name=city]").click(function(){

    var city = $("input[name=city]:checked").val();

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&mode=json&APPID=3a84c4df6fb1e4c07a803fb0a4cec88e&units=metric",
      data: {
        format: "jsonp"
      },
      success: function(data) {
        document.getElementById("main_temp").innerHTML = data.main.temp;
      }
    });

  });


  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&mode=json&APPID=3a84c4df6fb1e4c07a803fb0a4cec88e&units=metric",
    data: {
      format: "jsonp"
    },
    success: function(data) {
      document.getElementById("main_temp").innerHTML = data.main.temp;
    }
  });

});

$(document).click(function(){
  document.getElementById("current_temp").innerHTML = thermostat.temperature;
  document.getElementById("power_mode").innerHTML = thermostat.powerMode;
  document.getElementById("indicator").value = thermostat.temperature;
});
