// Quadratic - Assignment

/*
  Learning Outcomes:

    * Can understand how more nested for loops make algorithms
    more complex

  Goal:
    Write out our algorithm from the last reading as code,
    analyzing it further.
*/

/*
  Array Contains Sum

  Write a function that accepts two parameters:

  1. An ordered array of numbers. Ex: [0, 2, 4, 7, 9, 10]
  2. Any number. Ex: 6

  This function should check if any two numbers in that array
  can be added together to equal the input number.

  Have a function return true if two numbers in that array can
  be added together to equal that number.
  Otherwise, return false.
*/

/*
  Examples:

  Input Array: [0, 2, 4, 7, 9, 10]
  Input Number: 6
  Result: true
  Reason: 2 + 4 = 6

  Input Array: [0, 2, 4, 7, 9, 10]
  Input Number: 15
  Result: false
  Reason: no two numbers can be added to equal 15
*/
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
  This algorithm is similar to our first approach of finding
  the sum in the list of numbers. We check every number in
  the array with every other number in the array until we find
  the sum.

  Let's evaluate the running time.
*/
const arrayContainsSum = function(array, sum) {

  for (let i = 0; i < array.length; i++) { // 1, (n+1), n
    const element1 = array[i]; // n

    for (let ii = 0; ii < array.length; ii++) { // n, (n + n^2), n^2

      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) { // n^2
        return true;
      }
    }
  }
  return false; // 1
};

// 1 * 3 = 3
// n * 5 = 5n
// n^2 * 4 = 4n^2
// sum = 3 + 5n + 4n^2

/*
  The n^2 part of the algorithm causes the high growth curve
  on the graph, you know the kind that startup founders love
  to show to investors.

  What causes the n^2 and how do we avoid it?
*/

// We solve it with nested for loops!
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// If we loop through the array again inside that loop, the
// inner loop will execute the code inside of it n^2 times:
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  for (let ii = 0; ii < array.length; ii++) {
    console.log(array[ii]);
  }
}

/* 
  Every time we nest another loop, the number executions
  in the inner loop will be multiplied by n. This example
  becomes n^3.
*/
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // n
  for (let ii = 0; ii < array.length; ii++) {
    console.log(array[ii]); // n^2
    for (let iii = 0; iii < array.length; iii++) {
      console.log(array[iii]); // n^3
    }
  }
}

// It's this nesting of loops that adds so many extra operations
// to our algorithm.

/*
  Not that looping through a single array twice is different
  from looping through two separate arrays.
*/

// Same Array:
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // n
    for (let ii = 0; ii < array.length; ii++) {
      console.log(array[ii]); // n^2
    }
  }

// Separate Arrays:
for (let i = 0; i < arrayA.length; i++) {
  console.log(arrayA[i]); // a
  for (let ii = 0; ii < arrayB.length; ii++) {
    console.log(arrayB[ii]); // a*b
  }
}

/*
  The same array will run in n^2 time while the separate arrays
  will run in a * b time.

  If an array has 4 items in it, and there's a nested loop
  against that same array, it will be 4 * 4 or 4^2 operations.
  With two separate arrays, one with 4 items and one with 6
  items, we do 4 * 6 operations.
*/

/*
  Linear:

  Time to make our algorithm more efficient! Let's get rid of
  that nested for loop to increase efficiency.

  Replace your current function with the following:
*/

const arrayContainsSum = function(array, sum) {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const surrentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }
  return false;
}

/*
  This algorithm is similar to our second approach of finding
  the sum in the list of numbers, except it does exprect the
  array to be pre-sorted. We check the smallest number and the
  largest number in the array until we find the sum.

  Let's evaluate the running time:
*/
function arrayContainsSum(array, sum) {
  let i = 0; // 1
  let ii = array.length-1; // 1

  while (i <= ii) { // n + 1

    const element1 = array[i]; // n
    const element2 = array[ii]; // n
    const currentSum = element1 + element2; // n

    if (currentSum === sum) { // n
      return true;
    } else if(currentSum > sum) { // n
      ii--; // n
    } else {
      i++;
    }
  }
  return false; // 1
}
// 1 * 4
// n * 7
// sum: 7n + 4

/*
  With just one loop iterating over each element in the array,
  we get an algorithm that grows linearly. When we look at a
  linear algorithm on a graph, it's just a straight line.
*/

/*
  Conclusion:

  Quadratic algorithm have a much slower running time than
  linear algorithms as we can see by the following:

  n = 1, n^2 = 1
  n = 2, n^2 = 4
  n = 4, n^2 = 16
  n = 5, n^2 = 64

  Quadratic algorithms can be created by nesting loops which
  is common when comparing every item in an array to every
  other item in that array.
*/
