function Thermostat(powersaving = true) {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSaving = powersaving;
};

Thermostat.prototype.up = function(){
  if(this.powerSaving == true && this.temperature < 25){
    this.temperature++;
  } else if(this.powerSaving == true && this.temperature >= 25){
    throw "Maximum temperature in power saving mode is 25 degrees";
  } else if(this.powerSaving == false && this.temperature < 32) {
    this.temperature++;
  } else {
    throw "Maximum temperature is 32 when power saving off";
  };
};

Thermostat.prototype.down = function(){
  if(this.temperature > this.minimumTemp){
    this.temperature--;
  }
  else{
    throw "Minimum temperature is 10 degrees"
  };
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
