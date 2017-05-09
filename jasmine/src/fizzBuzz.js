// function Fizzbuzz() {
//   this.array = [0..100]
// };

function Fizzbuzz() {
};
//  var Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 == 0)
  {return true}
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 == 0)
  {return true}
};

Fizzbuzz.prototype.isDivisiblebyThreeAndFive = function(number) {
  if (number % 5 == 0 && number % 3 == 0)
  {return true}
};
var arrayFizz = []
var fizzbuzz = new Fizzbuzz();
Fizzbuzz.prototype.runNumbers = function() {
    for (i = 0; i < 100; i++) {

    if (fizzbuzz.isDivisiblebyThreeAndFive(i)) {
      console.log("FizzBuzz");
      arrayFizz.push("FizzBuzz");
    }
    else if (fizzbuzz.isDivisibleByThree(i)) {
      console.log("Fizz");
      arrayFizz.push("Fizz");
    }
    else if (fizzbuzz.isDivisibleByFive(i)) {
      console.log("Buzz");
      arrayFizz.push("Buzz");
    }
    else {
      console.log(i);
      arrayFizz.push(i);
    }
   }
   };
//
//   else if (fizzbuzz.isDivisibleByFive(number)) {
//     console.log("Buzz")
//   };
//
//   else if (fizzbuzz.isDivisibleByThree(number)) {
//     console.log("Fizz")
//   };
//)
