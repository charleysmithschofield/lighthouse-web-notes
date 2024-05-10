// SYNTAX ERRORS:

// Consider the following code:
var rank = "Imperator";
var name = "Furiosa";

console.log(rank name);

/* 
This code is trying to log "Imperator Furiosa" to the console. Can you figure out
why this won't happen?

If you run the code above, you would get an error message similar to this:
*/
node syntax - error.js
  / vagrant / focal / syntax - error.js: 4;
console.log(rank name);
                 ^^^^
  SyntaxError: Unexpected identifier
    at exports.runInThisContext(vm.js: 73: 16)
    at Module._compile(module.js: 443: 25)
    at Object.Module._extensions..js(module.js: 478: 10)
    at Module.load(module.js: 355: 32)
    at Function.Module._load(module.js: 310: 12)
    at Function.Module.runMain(module.js: 501: 10)
    at startup(node.js: 129: 16)
    at node.js: 814: 3


  // These messages can be frustratig to new developers, but if we learn
  // how to use them, they can help us fix our errors quickly and efficiently.

  // Let's start with the first line of the error message:
  / vagrant / focal / syntax - error.js: 4;


// This tells us that the error happened in the file called /vagrant/focal/syntax-error.js
// but more importantly, the error is on line 4 of the file. 

// Line 4 is the following:
console.log(rank name);

// Chances are our error is caused by something on this line. There are cases where this 
// will not be true, but it's not a bad assumption to start with.

// Let's see if the error message can give us any clues. Look at it's next 3 lines:
console.log(rank name);
                 ^^^^
  SyntaxError: Unexpected identifier;

// This shows us exactly where in the code they error occured and that we are dealing with 
// a syntax error There seems to be something wrong with name, which JS is calling an unex-
// pected identifier. 

// Because we are workignw ith a single file, we can be confident enough that we've learned
// enough to fix the error. It seems we are missing a comma between rank and name.

console.log(rank, name);



// STACK TRACES:

// The last bit of our error message, which would be ignore, was the following:

at exports.runInThisContext(vm.js: 73: 16)
at Module._compile(module.js: 443: 25)
at Object.Module._extensions..js(module.js: 478: 10)
at Module.load(module.js: 355: 32)
at Function.Module._load(module.js: 310: 12)
at Function.Module.runMain(module.js: 501: 10)
at startup(node.js: 129: 16)
at node.js: 814: 3;

/* 
This bit is called a stack trace, which shows the state of our program when the error
occured.
In the future, we'll discuss more technical dtails of what stack traces are and how 
they're determined.

For now, let's take a look at the file names printed out in the stack trace, in the 
parentheses at the end of each line: vm.js, module.js, node.js.

We don't know anything about them, they aren't even our code, we didn't write them!

It is possible, that the error didn't come from the exact file the error was thrown in,
but rather that it came from one of these files. However, it's a safe bet to assume the 
error is not caused by someone elses (hopefully) well-tested code but by ours - it's a 
work in progress after all.



/* TRICKIER SYNTAX ERRORS:

Other common mistake we might make lead to error messages that are harder to read. 
Consider the following code:
*/

if (5 > 10) {
  console.log("Impossible!");

  console.log("Phew, logical fallacies avoided.");

  // We expect this code to print Phew, logical fallacies avoided., but when executed
  // it simply explodes:

  /vagrant/focal / syntax - error2.js: 6;
});
 ^
  SyntaxError: Unexpected token )
    at exports.runInThisContext(vm.js: 73: 16)
    at Module._compile(module.js: 443: 25)
    at Object.Module._extensions..js(module.js: 478: 10)
    at Module.load(module.js: 355: 32)
    at Function.Module._load(module.js: 310: 12)
    at Function.Module.runMain(module.js: 501: 10)
    at startup(node.js: 129: 16)
    at node.js: 814: 3;


// This error is weird, firstly there is no line 6 in our code, we only wrote 4 lines.
// Second, it's pointint to a snippet of code that doesn't exist in our 4 lines.
});


// In this case it's hard to use the info provided by the first few lines of the error 
// message. 

// The next line, SyntaxError: Unexpected token ) is a BIG hint. In our case we're missing a }
if (5 > 10) {
  console.log("Impossible!");
}

console.log("Phew, logical fallacies avoided.");



// REFERENCE ERRORS:

// Here we have some code printing out someone's first and last names:
var firstName = "Jane";
var lastName = "Doe";

console.log(firstName, lasName);

// But it throws this error:
node reference - error.js
  / vagrant / focal / reference - error.js: 4;
console.log(firstName, lasName);
                       ^
  ReferenceError: lasName is not defined
    at Object.< anonymous > (/vagrant/focal / reference - error.js: 4: 24)
    at Module._compile(module.js: 460: 26)
    at Object.Module._extensions..js(module.js: 478: 10)
    at Module.load(module.js: 355: 32)
    at Function.Module._load(module.js: 310: 12)
    at Function.Module.runMain(module.js: 501: 10)
    at startup(node.js: 129: 16)
    at node.js: 814: 3

  // Let's read our error message line by line again:
  / vagrant / focal / reference - error.js: 4;

// This tells us our error is most likely coming from line 4, which is conf'd 
// by the next couple lines of the error message.
console.log(firstName, lasName);


// It looks like we accidentally typed 'lasName' rather than 'lastName'.
var firstName = "Jane";
var lastName = "Doe";

console.log(firstName, lastName);

// Run the code by typing this into your terminal:
node reference - error.js
Jane Doe;

// Great it's fixed!



// TYPE ERRORS:

// We want to conver an obnoxious all-caps string to lowercase:
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLower());

// But we got an error message:
node type - error.js
  / vagrant / focal / type - error.js: 3;
console.log(favouriteMeal.toLower());
                          ^
  TypeError: undefined is not a function
  at Object.< anonymous > (/vagrant/focal / type - error.js: 3: 27)
    at Module._compile(module.js: 460: 26)
    at Object.Module._extensions..js(module.js: 478: 10)
    at Module.load(module.js: 355: 32)
    at Function.Module._load(module.js: 310: 12)
    at Function.Module.runMain(module.js: 501: 10)
    at startup(node.js: 129: 16)
    at node.js: 814: 3


  // Let's start at the top of the error message:
  / vagrant / focal / type - error.js: 3;
console.log(favouriteMeal.toLower());

// This tells us that we broke something on line 3 and it has something 
// to do with toLower. 

// Let's check the error description: 
TypeError: undefined is not a function


/* 
This tells us that something is undefined and we tried to make a function
out of it. 

This is a tricky error to uncover as a new developer, but it will become more 
understandable when we lear more about objects/properties, but for now we can
approach it by knowing what functions are. 

// Take a look at line 3 again, we see we are trying to call two functions:
// console.log and favouriteMeal.toLower. 

// JS is telling us that one of them is undefined, and it's drawing our attention
// to toLower.

// We do a Google search for soemthing like js convert sting to lowercase to check 
// the proper name for it, now we can fix our code:
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLowerCase());





