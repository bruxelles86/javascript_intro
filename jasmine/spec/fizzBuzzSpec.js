describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by both 3 and 5', function() {
      expect(fizzbuzz.isDivisiblebyThreeAndFive(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(5)).not.toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(7)).not.toBe(true);
    });

    it('divisible by both 3 and 5', function() {
      expect(fizzbuzz.isDivisiblebyThreeAndFive(14)).not.toBe(true)
    });
  });

  describe('iterates through numbers and outputs appropriate string', function() {
    it('array contains fizz', function() {
      fizzbuzz.runNumbers();
      expect(arrayFizz[0]).toEqual("FizzBuzz");
    });
  });

//   describe ('prints Fizz when numbers are divisible by 3', function() {
//     expect(fizzbuzz.Run).
//   });
});
