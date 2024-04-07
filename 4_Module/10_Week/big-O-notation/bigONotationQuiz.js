// Big O Notation - Quiz

// Question 1:
// What is the runtime of this in big O notation?
const largestAndSmallest = function(array) {
  let largest = -Infinity;
  let smallest = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log(smallest, largest);
};

/*
  Answer: 0(n)

  Reason: Increasing the data set by 1 increases the
  time by cosntant time. The running time is 2n which
  is linear therefore 0(n).
*/

// Question 2: What is the runtime of this in Big O notation?
const uniqueElements = function(array) {
  let uniques = [];

  for (let i = 0; i < array.length; i++) {
    let unique = true;
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (array[i] === array[j]) {
        unique = false;
      }
    }
    if (unique) {
      uniques.push(array[i]);
    }
  }
  return uniques;
};
/*
  Answer: 0(n^2)

  Reason: n^2 is the most dominant term after dropping
  all constants and constant multipliers.
*/


// Question 3: What is the runtime of this in Big O notation?
const duplicateElements = function(array) {
  let duplicates = [];

  for (let i = 0; i < array.length; i++) {

    for (let j = i; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (array[i] === array[j]) {
        duplicates.push(array[i]);
        continue;
      }
    }
  }
  return duplicates;
};
/*
  Answer: 0(n^2)

  Reason: It remains n^2 since that remains the most
  dominant term regarless of the minor optimizations.
*/


// Question 4: What is the runtime of this in Big O notation?
const printOneThousandTimes =  function(string) {
  for (int i = 0; i < 1000; i++) {
    console.log(string);
  }
};
/*
  Answer: 0(1)

  Reason: The loop does not iterate more than 1000
  times which makes this algorithm have constant
  time (growth = 0).
*/