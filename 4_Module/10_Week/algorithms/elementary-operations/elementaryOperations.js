// Elementary Operations - Reading

/*
  ALGORITHM COMPONENT BREAK DOWN:

  * 1 = operations that take a fixed amount of time 
  * (n + 1) = operations that rely on 1 variable
  * (n) = operations that reply on the input size (If we don't know how many time it will execute this. Ex: loops)
*/

/*
  Elementary Operations:

  An elementary operation is any operation that takes a fixed amount of time
  to perform, no matter what the data is.
*/


// The following operation adds two numbers together:
number1 + number2;

/*
  This operation relies on 2 variables number1 and number2.

  This takes a fixed amount of time b/c no matter what the two
  numbers are, this will always take the same amount of time.

  1+2 will take the same amount of time as 1234+5678.

  There is elementary operation here, so the running time is 1.
*/

console.log(someString);

/*
  This operation relies on 1 variable, someString. This takes a
  fixed amount of time b/c it will always take the same amount
  of time to executre, no mater what someString is.

  There is 1 elementary operation here, so the running time is 1.
*/

let result = 0;
result += number1;
result += number2;
console.log(result);

/*
  How about this algorithm? 

  How long will it take to execute?

  This algorithm is performing 4 different operations. It also
  relies on 2 variables, number1 and number2; but no matter what
  number1 and number2 are, these 4 operations will always take
  the same amoubnt of time.

  There are 4 elementary operations happening, so the running time
  is 4.
*/

// Take a look at this algorithm that sums all the numebrs in an array:
let result = 0;

for (let i = 0; i < array.length; i++) {
  let number = array[i];
  result += number;
}

console.log(result);

/* 
  This algorithm relies on 1 variable, the array.

  What do you think the running time would be?

  In order to determine this we can reorganize the algorithm
  a bit. It's common to use n to represent the length of the
  array, so we will start using n when an operation get exe-
  cuted array.length times.
*/

let result = 0; // 1

for (
  let i = 0; // 1
  i < array.length; // n + 1
  i++; // n
) {
  let number = array[i]; // n
  result += number; // n
}
console.log(result); // 1


// Now lets look at the same example but not deconstructed:
for (let i = 0; i < array.length; i++) { // 1 + (n + 1) + n
  let number = array[i]; // n
  result += number; // n
}
console.log(result); // 1


/*
  i < array.length gets executed n + 1 times (an extra time)
  b/c there is an extra check at the end in order to stop the
  loop, when it goes over the length.

  Some of the operations in this algorithm will always take a
  fixed amount of time to execute, no matter what array is.
  
  Other operations' running times will depend on the size of array.
  For example, every operation that gets executed inside the for loop
  will get called n times, once for each item in the array.

  If we add them all together, we can get the running time of the
  entire algorithm:

  3 + (n * 3) + n + 1

  This can be simplified to:
  4n + 4
*/

// What is the running time for the following algorithm?
const array = [1, 2, 3, 4, 5]; // 1
let largest = 0; // 1
for (let i = 0; i < array.length; i++) { // 1 + (n + 1) + n
  const element = array[i]; // n
  if (element > largest) { // n
    largest = element; // n (n b/c it isn't necessarily going to execute every time b/c it will only execute when the element is greater than the largest)
  }
}
// Answer: 1 + 1 + 1 + (n + 1) + n + n + n + n
// n * 5 
// 1 * 4
// Correct answer: 5n + 4


/*
  Conclusion:
  
  - An algorithm is any piece of code that performs a particular
  task or solves a particular problem.

  - Time complexity is commonly estimated by counting the number
  of elementary operations performed by an algorithm. It takes a
  fixed amount of time to perform an elementary operation.

  - Time complexity is often referred to as running time.

  - Algorithms that don't deal with dynamic data, like loops,
  usually take constant time (no n involved).

  - Algorithms that iterate over data, involve using n based on
  the size of the data.
*/
