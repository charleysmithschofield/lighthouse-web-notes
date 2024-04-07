// Search Analysis - Assignment

const { middle } = require("@csmithschofield/lotide");

// Linear Search function
const search = function(array, item) {
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }
  return index;
};

/*
  This algorithm loops through every element in the array
  in order, comparing it with the target number till it
  finds it, then it breaks out of the loop.

  When determining the complexity for an algorithm like this,
  we are only concerned with the worst case scenario.

  We want to know, in the worse possible situation, how long
  will it take to complete?

  The worst case scenario is when the target number doesn't
  exist in the array, the alorithm gets no opportunity to
  break out of its loop early.

  So what's the worst case running time of this algorithm?
*/

/*
    ALGORITHM COMPONENT BREAK DOWN:

  * 1 = operations that take a fixed amount of time
  * (n + 1) = operations that rely on 1 variable
  * (n) = operations that reply on the input size
    (If we don't know how many time it will execute this
    Ex: loops)
*/

const search = function(array, item) {
  let index = null; // 1

  for (let i = 0; i < array.length; i++) { // 1, (n + 1), n
    if (item === array[i]) { // n
      index = i; // only happens once if found, so not counting for worst case
      break;
    }
  }
  return index; // 1
};

// Run time: 1 + 1 + (n + 1) + n + n + 1
// Run Time: 3n + 4


/*
  If we call this function with an array of 10 items and a
  number that isn't in the array, how many total operations
  will get executed?
*/
search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);

/*
  Here is n = 10 so it will be a total of (3 * 10) + 4
  operations, or 34 operations. So in this case it will
  have a running time of 34.

  How many operations would it be for an array size of
  1000 items?

  3 * 1000 + 4 = 3,0004

  If we take advantage of the fact that our array is ordered
  we cna make this algorithm a lot faster.
*/

// Binary Search
// Let's refacotr our search algorithm to use binary search:

const search = function (array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max)/2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      // Found it
      return middleIndex;
    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;
    } else {
      // Look at the left side
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
}

/*
  Let's figure out the running time for this algorithm.

  Remember that every time we check a number, we cut the
  array in half. So our loop will run log n times instead
  of n times.
*/

function search(array, item) {
  let min = 0; // 1
  let max = array.length - 1; // 1

  while (true) { // lg n
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex/2.0; // lg n
    const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = array[middleIndex]; // lg n

    if (currentItem === item) { // lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 1
    }
  }
}

// Sum:
// 1 * 3
// lg n * 9
// 9log(n) + 3

/*
  This is a small gain compared to linear search, but what
  happens if we increase the size of the array?

  What if have an array of 1,000 items? Only 93 operations,
  wow that is a lot less than with the linear search which
  was 3,0004.

  Let's see what happens when we increase the size of the
  array again. 

  What if our array contained 1,000,000,000 items?
  If our array contained 1,000,000,000 items, the running
  binary would only be 273!! 🤯
*/

/*
  When an algorithm's complexity grows logarithmically,
  our input may get very, very large and yet the number
  of elementary operations will remain relatively small.
*/

/*
  When the number of items in the array is doubled, the
  running time of linear search will also double, while
  the running time of binary search will only be increm-
  ented by 1.

  Ex:
  n = 1, log n = 0
  n = 2, log n = 1
  n = 4, log n = 2
  n = 8, log n = 3
  n = 16, lon n = 4
*/

/*
  To put this in perspective, assume each comparisons takes
  0.01 seconds to compute. If we search an array a million
  items in it, how many seconds would linear search take and
  how many seconds would binary search take in the worst case
  scenario?

    - linear search: 30,000.04 seconds (that's almost 8.5 hours!)
    - binary search: 1.44 seconds
*/

/*
  How to Calculate Base-2 Logarithms aka log₂

    1. Take your starting number and divide it by 2 until you reach 1.

    2. Count how many divisions you made.

    Ex:
    32 / 2 = 16
    16 / 2 = 8
    8 / 2 = 4
    4 / 2 = 1

    So log₂(32) = 5
*/