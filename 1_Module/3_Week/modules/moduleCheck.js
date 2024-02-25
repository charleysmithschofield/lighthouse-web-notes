console.log(module);

// Run this file using node to discover that module contains info about this
// file.

// Output:
Module {
  id: '.',
  path: '/Users/charleysmithschofield/Documents/lighthouse/lighthouse-web-notes/Week_3',
  exports: {},
  filename: '/Users/charleysmithschofield/Documents/lighthouse/lighthouse-web-notes/Week_3/moduleCheck.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/charleysmithschofield/Documents/lighthouse/lighthouse-web-notes/Week_3/node_modules',
    '/Users/charleysmithschofield/Documents/lighthouse/lighthouse-web-notes/node_modules',
    '/Users/charleysmithschofield/Documents/lighthouse/node_modules',
    '/Users/charleysmithschofield/Documents/node_modules',
    '/Users/charleysmithschofield/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

// Each file that Node runs is actually considered a separate module!

/*
  EXPORTING MODULES:

  Taking naother look at the module output from our test file, we see a key
  aspect of modules: exports: {}

  A JS file must "export" the part that it wants to be require-able (aka
  "importable"). Files usually export an object (or a function, which in
  JS is an object anyway).

  Take for instance, the file myModule.js mentioned earlier.

  Let's hop over to that file for a moment...
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

const sayHelloTo = require('./myModule');

// * Common convention omits the .js extension, since it is redundant.

// The imported object gets assigned to the variable, sayHelloTo in the above
// example.

/*
  We learned that in Node,

  modules are its way of organizing code into individual files
  every js file in node is implicitly a module
  we can console.log(module) and see its details
  module.exports tells node what to export from a file
  it defaults to {}
  we can use require with relative paths (like ./myModule)
  it doesn't need the .js extension, as that is implied
  With this knowledge, we can now start to DRY up our Lotide project!
/*