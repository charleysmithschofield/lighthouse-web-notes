// TEST CODE W/O A TEST CAR OBJECT:

// const chai = require('chai'); // 1.
// const assert = chai.assert;

// const shouldBuyCar = require('../shouldBuyCar.js'); // 2.

// describe("#shouldBuyCar()", function() { // 3.

//   it("should return false if it's a hatchback", function() { // 4.

//   });

// });

/*
  THE TEST CODE ABOVE, WHAT IS IT DOING?

    1. Import chai so we can use it to assert out test.
    2. Import the shouldBuyCar function that we're going to test.
    3. Add a describe block for the shouldBuyCar function that we're testing.
    4. Add an expression that the function should return false if it's a hatchback.
    
    Now all that's left to do is assert that the function behaves as exprected.

    To do this, we'll call the shouldBuyCar function and pass in a car that has a
    type of hatchback. A car object has the following properties:

    car = {
      price: ,
      color: ,
      type: ,
      litersPer100km:
    }
*/

// // TEST CODE WITH A TEST CAR (HATCHBACK) OBJECT:

// const chai = require('chai'); // 1.
// const assert = chai.assert;

// const shouldBuyCar = require('../shouldBuyCar.js'); // 2.

// describe("#shouldBuyCar()", function() { // 3.

//   it("should return false if it's a hatchback", function() { // 4.
//     const car = {
//       type: "hatchback"
//     };
//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });

//  RESULT OF TEST:
// #shouldBuyCar()
// ✔ should return false if it's a hatchback


// 1 passing (2ms)

/*
THE REST OF THE TESTS:

Write a test for each of the following specifications:

Return true
 - if the car's color is pink
 - if the car's type is not a hatchback
 - or any other color or type, the car must meet these two requirements in
   order to return true:
    - litres/100km must be between 6 and 11
    &&
    - price must be under or equal to $5,000

 - Return undefined if no car gets passed into the function
*/

/*
OUR RESULTS SHOULD BE:
Once we've written out all the test code, the Mocha test results output should look like this:

// #shouldBuyCar()
//   ✓ should return true when the car is pink
//   ✓ should return false when there are no details about the car
//   ✓ should return false when the car is a hatchback
//   ✓ should return false when the car is a hatchback and pink
//   ✓ should return true when the car has 6 litres/100km and is under or equal to $5,000
//   ✓ should return true when the car has 11 litres/100km and is under or equal to $5,000
//   ✓ should return false when the car has 6 litres/100km and is over $5,000
//   ✓ should return false when the car has 11 litres/100km and is over $5,000
//   ✓ should return false when the car has 5 litres/100km and is under or equal to $5,000
//   ✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
//   ✓ should return undefined when there is no car


11 passing (8ms)
*/

/*
 ** TIPS: THE HAPPY, THE SAD AND THE EDGE CASES:
 
  1. Test the happy path and the sad path
    - ex: if we were to test if a user is 18 or older:
      - Happy path: test what happens when a user is old enough
      - Sad path: test if they are not old enough.
  2. Test the edge cases (the minimum possible and maximum possible values):
      - 18 is an edge case because the user is only just old enough.
      - 17 is an edge case because the user is just a little too young.
      - 15 is not an edge case, it's a random number under 18.

              // Happy Path
        it("should return true if the user is old enough", function() {
          const user = {
            age: 18 // Edge Case
          };
          const canSignUp = signUpUser(user);
          assert.isTrue(canSignUp);
        });

        // Sad Path
        it("should return false if the user is not old enough", function() {
          const user = {
            age: 17 // Edge Case
          };
          const canSignUp = signUpUser(user);
          assert.isFalse(canSignUp);
        });
*/


// TESTING THE REST OF THE CASES:

// Test Code: true when car is pink
const chai = require('chai'); // 1.
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2.

describe("#shouldBuyCar()", function() { // 3.
  it("should return true when the car's color is pink", function() { // 4.
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

// Test Code: false when there are no car details about the car

describe("#shouldBuyCar()", function() {

  it("should return false when there are no details about the car", function() {
    const car = {
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});


// Test Code: false when the car is a hatchback

describe("#shouldBuyCar()", function() {

  it("should return false if the car is a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});


// Test Code: false when the car is a hatchback and pink
describe("#shouldBuyCar()", function() {
  it("should return false if the car is a hatchback and pink", function() {
    const car = {
      type: "hatchback",
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

// Test Code: true when the car has 6 litres/100km and is under or equal to $5,000

describe("#shouldBuyCar()", function() {

  it("true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

// Test Code: true when the car has 11 litres/100km and is under or equal to $5,000

describe("#shouldBuyCar()", function() {

  it("true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

// Test Code: false when the car has 6 litres/100km and is over $5,000

describe("#shouldBuyCar()", function() {

  it("false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      goodLitres: 6,
      goodPrice: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

// Test Code: false when the car has 11 litres/100km and is over $5,000

describe("#shouldBuyCar()", function() {

  it("false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      goodLitres: 11,
      goodPrice: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

// Test Code: false when the car has 5 litres/100km and is under or equal to $5,000

describe("#shouldBuyCar()", function() {

  it("false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      goodLitres: 5,
      goodPrice: 4999
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

// Test Code: false when the car has 12 litres/100km and is under or equal to $5,000

describe("#shouldBuyCar()", function() {

  it("false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      goodLitres: 12,
      goodPrice:  4999
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

// Test Code: undefined when there is no car

describe("#shouldBuyCar()", function() {

  it("undefined when there is no car", function() {
    const shouldBuy = shouldBuyCar();
    assert.isUndefined(shouldBuy);
  });
});


// ALL RESULTS TOGETHER

// ✔ should return true when the car's color is pink
// ✔ should return false when there are no details about the car
// ✔ should return false if the car is a hatchback
// ✔ should return false if the car is a hatchback and pink
// ✔ true when the car has 6 litres/100km and is under or equal to $5,000
// ✔ true when the car has 11 litres/100km and is under or equal to $5,000
// ✔ false when the car has 6 litres/100km and is over $5,000
// ✔ false when the car has 11 litres/100km and is over $5,000
// ✔ false when the car has 5 litres/100km and is under or equal to $5,000
// ✔ false when the car has 12 litres/100km and is under or equal to $5,000
// ✔ undefined when there is no car


// 11 passing (4ms)