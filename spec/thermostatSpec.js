describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start at 20degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature to 21", function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease temperature to 19", function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should raise an error if trying to decrease at 10degrees", function(){
    for (var i = 0; i < 10; i++) {thermostat.decrease();}
    expect(function() {thermostat.decrease();}).toThrowError("Min temperature reached");
  });


  describe("Power mode", function(){

    it("should have power saving mode on by default", function(){
      expect(thermostat.powerMode).toEqual(true);
    });

    it("should have a max temp of 25degrees if power saving is true", function(){
      for (var i = 0; i < 5; i++) {thermostat.increase();}
      expect(function() {thermostat.increase();}).toThrowError("Max temperature reached");
    });

    it("should be able to switch off power saving mode", function(){
      thermostat.switchMode();
      expect(thermostat.powerMode).toEqual(false);
    });

    it("should have a max temp of 32 degrees if power saving is false", function(){
      thermostat.switchMode();
      for (var i = 0; i < 12; i++) {thermostat.increase();}
      expect(function() {thermostat.increase();}).toThrowError("Max temperature reached");
    });
  });

  describe("Reset", function(){

    it("should reset temp to 20degrees", function(){
      thermostat.increase();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Usage colouring', function(){
    it("should return low-usage if under 18degrees", function(){
      for (var i = 0; i < 3; i++) {thermostat.decrease();}
      expect(thermostat.usage()).toEqual('low');
    });

    it("should return medium-usage if under 25degrees", function(){
      expect(thermostat.usage()).toEqual('medium');
    });

    it("otherwise it should return high", function(){
      thermostat.switchMode();
      for (var i = 0; i < 6; i++) {thermostat.increase();}
      expect(thermostat.usage()).toEqual('high');
    });
  });
});
