const chai = require('chai');  // import the chai library
const assert = chai.expect;  // establish a variable to be used in our tests
const validator = require('../javascript/groupValidator.js'); // import the file where our function lives
describe("The function groupValidator()", () => {
    // this is where we put our tests.
});

/*
  One of chai's best features is the way it uses common language to make the
  tests easy to understand.

  The describe line begins our testing block, and within its callback function,
  we will be writing our tests.

  Our tests will follow a similar pattern: a keyword, a string, a description,
  and a callback function.

  A good initial test would be to see if the function returns a true for a
  valid group.

  The following code shows what that test should look like:
*/

it("should return true if there are between 2 and 5 group members", () => {
  assert(validator.isGroupValid(["a", "b", "c"])).to.be.true
});

/*
 Let's break down the above test:

 The it line:
  - gives a description of the test, then runs a callback function.
  - that finds our validator file, then runs the groupValidator function inside
    with the parameteres we pass it.
  - since we're testing a group that should work, we've given it an array with
    three strings inside.
    
 assert / to.be.true:
  - these logically declare what they're doing. When we run the function
    isGrouValid() with an input of ["a", "b", "c"], we want chai to assert
    that the result that comes back is true.
*/

// When we run this test we should get:
// ✅ should return true if there are between 2 and 5 group members
// 1 passing (2ms)


// ** Our goal with mocha and chai is to write our code & test so well that we
//    always see green: "passing" tests.

/*
  TESTING 1, 2, 3:

  What sorts of values might you want to check to ensure that all of the conditions
  are covered?

  - On top of checking a valid array, we should check the two failure cases,
    something like ["A"] and ["A", "B", "C", "D", "E", "F"], respectively.

  - Anything less would not check all of the conditions from the function.

  What would these tests look like? Try to mimic the pattern for the two other
  conditions:
*/


it("should be false if the group has less that or equal to one group member", () => {
  assert(validator.isGroupValid(["A"])).to.be.false
});

it("should be false if the group has more than 6 group members", () => {
  assert(validator.isGroupValid(["A", "B", "C", "D", "E", "F"])).to.be.false
});


