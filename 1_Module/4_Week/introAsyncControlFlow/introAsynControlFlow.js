// Into to Async Control Flow:

/*
  Synchronous Programming:

  Executes code in a blocking maner, where one operation must complted before the
  next can begin. In synchronous programming, if a function performs a time cons-
  uming task, such as fetching data from a server or performing complext calculat-
  ions, the entire program execution halts until that task is completed.

  Example of synchronous code below:
*/
// const greet = function(name) {
//   return 'Hello, ' + name + '!';
// };

// const main = function() {
//   console.log('Start');
//   console.log(greet('Cameron'));
//   console.log('End');
// };

// main();


/*
  Asynchronour Callbacks:

  JS leverages callbacks in order to deal with time consuming tasks.

  Here is an example. Don't get too worried about the fs (file system) module
  and function being used. Our goal isn't about learing fs specifically.
*/
const fs = require("fs");

console.log('BEFORE writeFile call');

// the callback function is the anonymous functionn (error) =>
fs.writeFile("./test_async.txt", "h3ll0 file!\n", (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
  // Success!
  console.log("Successfully wrote to file");
});

console.log('AFTER writeFile call');

/*
  Notice that writeFile function takes in not only the file path and the contents
  write, but also a third parameter - a callback function.

  This callback function is executed after the file-writing is complete.

  What ouput would we expect to see? More specifically we want to know in what
  order each console.log command will execute.

  1. BEFORE writeFile call.
  2. AFTER writeFile call.
  3. Successfully wrote to file.

  This shows that the writeFile callback (fs.writeFile's third parameter which is
  the anonymous function=> ) executes later.
*/

