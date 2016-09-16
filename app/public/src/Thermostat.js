function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
  this._minTemp = 10;
}

Thermostat.prototype = {
  increase: function() {
    if (this._temperature < this.maxTemp()) {
      this._temperature ++;
    }
  },

  decrease: function() {
    if (this._temperature > this._minTemp) {
      this._temperature --;
    }
  },

  turnPowerSavingOff: function() {
    this._powerSaving = false;
  },

  turnPowerSavingOn: function() {
    this._powerSaving = true;
  },

  powerSavingIndicator: function() {
    if (this._powerSaving) {
      return 'on';
    } else {
        return 'off';
      }
  },

  maxTemp: function() {
    if (this._powerSaving) {
      return 25;
    }
    else {
      return 32;
    }
  },

  resetTemp: function() {
    this._temperature = 20;
  },

  colour: function() {
    if (this._temperature < 18) {
      return 'green';
    } else if (this._temperature > 24) {
      return 'red';
    } else {
      return 'yellow';
    }
  }

  // changePowerSavingMode:
  // this._powerSaving != this._powerSaving

};
