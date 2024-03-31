// // Intro to Algorithms - Reading

// /*
//   INTRO TO ALGORITHMS:

//     - algorithm: an algorithm is a set of instructions or steps
//     you take to accomplish a specific task.

//     Every day things that you do as a person, like getting to
//     work in the morning, or making lunch, etc; the steps you
//     take to accomplish these things are all algorithms.

//     - algorithm (computer science): set of steps a computer takes
//     to accomplish a task. We tell computers what to do by writing
//     code, so an algorithm is the code that accomplishes a certain
//     task.

//     Let's take a look at a simple algorithm:
// */

// console.log("Hello World!");

// // Here is one that sums up every number in an array:
// const sumNumbers = function(array) {
//   let sum = 0;
//   for (number of array) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(sumNumbers);

// This algorithm appends jazz hands to the end of every word in a string
const jazzify = function(sentence) {
  let words = sentence.split(' ');
  for (const index in words) {
    words[index] = `${words[index]}🤗`;
  }
  return words.join(' ');
};
console.log(jazzify('Time to jazzify me!'));

/* 
  OTHER EXAMPLES OF ALGORITHMS:

    - Google finding you the fastest route home.
    - How a Tesla car drives you home.
    - How a Skype transfers live video and audio.
    - How Pied Piper compresses all that 3D video?

  Algorithms are everywhere!

  Not all are created equal, some are faster and some are much
  slower.
*/

/*
  HAVARD CS50 INTRO TO ALGORITHMS - VIDEO NOTES

    - Video Reference: https://www.youtube.com/watch?v=nHxnvrvfLsA&t=201s
*/
