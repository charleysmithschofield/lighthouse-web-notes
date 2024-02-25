// Create a file called main.js with the following code:

// sayHelloTo('Bernie');

/*
If we were to run this file, what would be the output?

It would give us a reference error because sayHelloTo is not defined in
this file.
*/

/*
  REQUIRING A MODULE:

  Here's a basic syntax to import a module form out local filesystem using
  require:
*/
// const sayHelloTo = require('./myModule');

// This assumes that we have a file called myModule.js in the same directory
// as the file that is requiring the module.

// The file extension is not necessary, but it would also work:

// const sayHelloTo = require('./myModule');

// * Common convention omits the .js extension, since it is redundant.

// The imported object gets assigned to the variable, sayHelloTo in the above
// example.

const sayHelloTo = require('./myModule');

// Just to check the value of what we just required here
console.log('sayHelloTo: ', sayHelloTo);

sayHelloTo('Bernie');



// WE MUST EXPORT CODE BEFORE IT CAN BE REQUIRED:

// As mentioned earlier, a file must export code before it can be required.

// Therefore, we expect the above to also fail. Let's see what we get when
// we run it:

// Output:
// sayHelloTo:  {}
// TypeError: sayHelloTo is not a function

// We notice that sayHelloTo is not a function, and instead is an empty object.

// Why is this?

// When we output the value of module in myModule we say that it said exports: {}.
// We can suppose this to mean that by default, node will export an empty object
// for each file.


// EXPORTING MODULES CONTINUED:

// Instead of an empty object being exported, we need myModule to export the function.
// It looks like we didn't properly export our function. Let's complete that step.

// Let's assign the defined function to module.exports. (in the myModule.js file).


