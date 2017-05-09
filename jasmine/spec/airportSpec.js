describe('Airport', function(){

  beforeEach(function() {
    airport = new Airport();
  });

  describe('airport has an empty landing array', function(){
    it ('expects airport to have an emopty landing strip', function() {
      expect(airport.landingStrip).toEqual([]);
    });
  });

  describe('airport can land a plane', function() {
    it ('is expected to land a plane with the array', function(){
      airport.land('plane');
      expect(airport.landingStrip).toEqual(['plane'])
    });
  });


});
