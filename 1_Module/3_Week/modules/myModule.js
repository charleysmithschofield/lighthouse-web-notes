// myModule:

// Add a function sayHelloTo our myModule file:

// const sayHelloTo = function(person) {
//   console.log(`Hello, ${person}`);
// };

// Now let's see what happend if we to require this file from another file.
// Create a file main.js in the same directory.

// Exportng Modules Continued:

// Assign the defined function to module.exports.

// myModule.js

const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}
// add this line to the end of the file.
module.exports = sayHelloTo;

// Now our myModule file exports the functions instead of {} (an empty object).

