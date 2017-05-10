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
     thermostat.powerSaving = true
    expect( function() {thermostat.up(); } ).toThrow("Maximum temperature in power saving mode is 25 degrees");
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
