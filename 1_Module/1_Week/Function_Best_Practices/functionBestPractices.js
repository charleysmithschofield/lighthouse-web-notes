
/* NAME FUNCTIONS PROPERLY:

  1. Give your Functions Good Names:
    - good names are short and explains exactly what the function does.
  
  2. Follow the Main Conventions for Naming Functions:
    - avoid generic names like 'data', or 'run'
    - name your functions beginning with action words like createUser,
      or sendUserData
    - be consisten with your naming conventions
    - if you're joining an existing project, observe and adapt any existing 
      conventions.
*/


/* A JAVASCRIPT SPECIFIC NAMING CONVENTION:

  A common naming convention is to camelCase names, incl. for functions.

  Example:
  - Naming your function sayHello instead of sayhello ro say_hello.

  * Each language tends to have it's own stylistic conventions. 
*/


/* PROPER INDENTATION IS KEY:

  Indent the contents of your function. It's conventional to use 2 soft spaces,
  but no tabs (this should already be configured in your VSCode)

  Example of a Poorly-Indented Function:
  function power(num, exp) {
  var result = 1;
  for (var i = 1; i < exp; i++) {
  result *= num;
  }
  return result;
  }

  Example of a Properly-Indented Function:
  function power(num, exp) {
    var result = 1;
    for (var i = 1; i < exp; i++) {
      result *= num;
    }
    return result;
  }
*/

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
