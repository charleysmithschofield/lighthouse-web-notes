// ES6 Object Shorthand:

/*
  ES6 has a new, shorter object syntax which allows us to assign properties to
  objects using fewer characters. It's often referred to as Property Value
  Shorthand.

  Compare the following two code snippets:
*/


// Verbose Syntax
const age = 33;

const person = {
  name: 'Pat',
  age: age
};

// ES6 Property Value Shorthand
const age = 33;

const person = {
  name: 'Pat',
  age
};

/*
  Both of the above code snippets achieve the same outcome. 
  The person object will have a property named age with a value of 33.

  ES6 introduced the shortened syntax where a variable can be used to both 
  provide a property name to an object ('age') AND a value for that property,
  from the age variable. 
  
  The variable name becomes the property name and the variable value becomes
  the value of that property.
*/

/*
  Additional Resources: Property Value Shorthand:

  - https://attacomsian.com/blog/javascript-object-property-shorthand#:%7E:text=The%20object%20literal%20property%20value,make%20the%20object%20initialization%20shorter.&text=The%20property%20value%20shorthand%20syntax,value%20as%20a%20property%20value.
  - https://exploringjs.com/es6/ch_oop-besides-classes.html#_property-value-shorthands-1 
*/