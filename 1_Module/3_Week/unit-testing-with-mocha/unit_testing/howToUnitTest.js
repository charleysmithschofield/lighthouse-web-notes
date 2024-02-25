// Unit Testing:

// Unit testing is just wriiting code that tests other code.

// Here's an example of a unit test for a largestNumber function:

// Example of a simple function:
function largestNumber(array) {
  return array.reduce((previousValue, currentValue) => {
    return Math.max(previousValue, currentValue);
  });
}

// Example of a test for that function:
// Example of a test for that function
const array = [1,2,3,4,5];
const largest = largestNumber(array);
assert.equal(largest, 5);


/*
  We've seen assertions before.
  Instead of assert.equal we had written our own assertion functions
  assertEqual, assertArraysEqual, and so on.

  What we're going to do now is formalize our process and structure
  for writing testing code, and also use more advanced libraries and
  tools to help us in the process.
*/