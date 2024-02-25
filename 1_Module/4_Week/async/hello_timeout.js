// setTimeout Practice

// Let's play a bit with setTimeout to get comfortabel with asynchronous control flow.

/*
  Challenge 1:

  First let's start with simple exercise.

  Have our file print out these three words 4311o th3r3 w0r1d three seconds
  after the file is run.

  All of these words can appear at the same time.
*/

// setTimeout(() => {
//   console.log("4311o th3r3 w0r1d");
// }, 3000);

/*
  Challenge #2:

  Instead of printign the entire sentence together, have our code print out each of the
  three words one at a time, 1 second apart.

  It's okay if each of the words appears on a separate line, due to console.log
*/

// setTimeout function for "4311o"
setTimeout(() => {
  console.log("4311o");
  // setTimeout function for "th3r3"
  setTimeout(() => {
    console.log("th3r3");
    // setTimeout function "w0r1d"
    setTimeout(() => {
      console.log("w0r1d");
      // sets "4311o" to be called in 1 second (1000 ms)
    }, 1000);
    // sets "th3r3" to be called in 1 second (1000 ms)
  }, 1000);
  // sets "w0r1d" to be called in 1 second (1000 ms)
}, 1000);
