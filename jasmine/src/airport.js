function Airport() {
  this.landingStrip = []
};

Airport.prototype.land = function(plane){
  this.landingStrip.push(plane);
};
