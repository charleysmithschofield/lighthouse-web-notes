
// GLOBAL vs LOCAL SCOPE:

// - globally-scoped: a globally-scoped variable is available everywhere.

// - locally-scoped: a variable that is only available within the function \n
//                   in which it is defined.

// Example:
let myGlobalVar = "global";

const printMyVars = function() {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
};

printMyVars();

console.log('-- Outside of printMyVars now --');
console.log(myLocalVar);

/* QUESTION: What will the code above print to the console?

ANSWER: It will give an error because myLocalVar is only defined within the function.        
        This means that when it is console.log'd outside the function, it is not 
        considered to be defined and as such will result in an error. 

*/


// SCOPING CAN OVERWRITE VARIABLES:
let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar); 
}

myFunction();

console.log("outside myFunction, myVar is:", myVar);  

/* QUESTION: What if there is both a global and a local variable defined
             as the same name, as show above?

   ANSWER: In Javascript, when a local variable and a global variable have
           the same name, the local variable will take precedence within its
           scope. So inside the function, myFunction, myVar will be "local".
           
           Outside the function, myVar will refer to the global variable,
           which is "global"
*/


/* RULE 5: PASS IN THE DATA NEEDED

   In the Function Best Practices reading, we introduced 4 rules when defining
   a function.

   Now here is the 5th rule:

   It is ideal if functions try to avoid reading outer scope variables. If a 
   function needs some info/data, then that data should instead be passed in 
   as a parameter, making it available within the functions inner scope.

   EXAMPLE: GOOD vs BAD
*/
const person = "Martha";

// BAD
const sayHelloBadly = function() {
  console.log(`Howdy, ${person}`);
}
sayHelloBadly(); // Works, but not ideal!

// GOOD
const sayHelloGoodly = function(name) {
  console.log(`Howdy, ${name}`);
}
sayHelloGoodly(person);


/* QUESTION: 

What is the reason for this rule? Why is it better to pass the data into the 
function as a parameter/argument instead of letting the function simply access 
that data directly? 

After all, the latter approach takes fewer characters to write.


ANSWER: 
Functions that take in parameters are more reusable, since they are less dependent 
on their surroundings, (i.e. their outer scope).

From the example above, we can extract the sayHelloGoodly function and plop drop it
into another piece of code. We can't do that with sayHelloBadly because the person 
variable would have to come along for the ride.
*/

/*
/* CONCLUSION:

Here are all 5 rules reviewed below:

1. Give your functions precise verb/action based names

2. Use camelCasedNames (like this one)

3. Properly indent the function code

4. Functions should focus on a single task: returning a value or causing a side effect. 
   Break your function into additional smaller functions if you find it doing two or more things.
   One single task could be to compute and return a value (eg: zeroPad)
   Another single task could be to perform a side effect such as logging a message to the screen (eg: printFarmInventory)

5. Data needed by Functions should be passed in as parameters/arguments (i.e. local scope) instead of being accessed directly1. 