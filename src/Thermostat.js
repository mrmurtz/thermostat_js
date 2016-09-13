function Thermostat() {
  this.temperature = 20;
  this.powerMode = true;
  this._maxTemp = {true: 25, false: 32};
}

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
