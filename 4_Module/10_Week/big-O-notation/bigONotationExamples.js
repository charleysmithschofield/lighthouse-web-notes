// Big Notation Examples

/*
  Constant O(1)

  An algorithm that will always take the same amount of time
  to execute, no matter what the input is, runs in constant
  time.

  An example of this is directly accessing an item in an array:
*/
array[2];

// No matter how big the array is, this will always take a constant
// amount of time
array[2] + array[3] + array[4];

/*
  When we access the array multiple times like this, the time complex-
  ity is 3. This is still a constant amount of time and is therefore
  still O(1).

  Constant time algorithms run in 0(1).

  Examples:

    * Check if the last element in an array is even. Jump directly
    to the last element in the array and do some math. Even if it's
    a lot of math that takes a while, increasing the size of the
    array will not affect the amount of time this takes.

    * Tell me how many pages are in a phone book. Just open the
    last page and read the page number.
*/

/*
  Linear O(n)

    * linear time: when the number of operations an algorithm
      has to perform grows linearly relative to its input.

    Another way to see these algorithms is that when we add one
    extra element to its input, the number of operations will
    increase by a constant amount.

    The following algorithm is linear, b/c adding one more item
    to the array increases the runtime by a constant 100.
*/
for (item of array) {
  // perform 100 operations
}

// Summing every number in an array is a linear algorithm
const sumAllNumberInArray = function(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    result += number;
  }
  return result;
};

// Linear algorithm run in 0(n).

/*
  Examples:

  * Count all the even numbers in an array.
  * Find someone in a phone book by flipping through every
    page. Or two pages or three at a time.
*/

/*
  Quadratic O(n^2)

  - quadratic time: when the number of operations that an algorithm
    has to perform is directly proportional to the square of the
    size of the input.

  The following algorithm is quadratic, b/c adding one more item
  to the array increases the runtime by n*100.
*/
for (item of array) {
  for (item of array) {
    // perform 100 operations
  }
}

// Checking if an array of numbers contains a sum is a quadratic
// algorithm:

const arrayContainsSum = function(array, sum) {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) {
      const element2 = array[ii];

      if (element1 + element2 === sum) {
        return true;
      }
    }
  }
  return false;
};

/*
  Examples:

    * Find all duplicates in an array.
    * Find the first unique number in an array.
    * Manually find duplicate phone numbers written on a sheet
      of paper.
*/

/*
  Logarithmic O(log n)

    - logarithmic time: when the number of operations that
      an algorithm has to do is directly proportional to
      the logarithm of the size of the input.
*/
let i = array.length;
while(i > 0) {
  i = i / 2;
}

// Binary search is a logarithmic algorithm:
const binarySearch = function(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max)/2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
};
// Logarithmic algorithms run in 0(log n)