describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temperature).toBe(20);
  });
});

describe('Up', function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Increases temperature by one degree', function() {
    thermostat.up();
    expect(thermostat.temperature).toBe(21);
  });

  it('will not increase temperature past 25 degrees if power saving is on', function(){
    for(var i=1; i <= 5; i++){
      thermostat.up();
    };
     thermostat.powerSaving = true;
    expect( function() {thermostat.up(); } ).toThrow("Maximum temperature in power saving mode is 25 degrees");
  });

  it('will not increase temperature past 32 if power saving is off', function() {
    thermostat.powerSaving = false;
    for(var i=1; i <=12; i++){
      thermostat.up();
    };
      expect( function() {thermostat.up(); } ).toThrow("Maximum temperature is 32 when power saving off");
  });
});

  describe('Down', function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });

    it('Decreases temperature by one degree', function(){
      thermostat.down();
      expect(thermostat.temperature).toBe(19)
    });

    it('Will not decrease the temperature below 10 degrees', function(){
      for(var i=1; i <= 10; i++){
        thermostat.down();
      };
      expect( function() {thermostat.down(); } ).toThrow("Minimum temperature is 10 degrees");
    });
  });

  describe('Reset', function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });

    it('resets temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toBe(20)
    });
  });
