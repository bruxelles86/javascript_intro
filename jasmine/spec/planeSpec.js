describe('Plane', function() {
  describe('produces plane objects', function(){
    it ('is an instance of Plane', function(){
      var plane = new Plane()
      expect(plane).toEqual(jasmine.any(Plane));
    });
  });

});
