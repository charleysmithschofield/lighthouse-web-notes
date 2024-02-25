/*
  - Primitive Types Don't Have Properties

  In JS, primitive values do not have properties.

  Well, if a property is a thing you can access like object.property, and if primitive
  values don't have properties, and a string is a primitive... then what's the deal with
  "some string".length or 5.toSring()?

  Those statements do in face work. Yet it appears we are calling properties on primitive
  types, which shouldn't techinically work given the standard rule above.


  - Primitive Types Have Corresponding Objects:

  Each primitive (excluding symbol) has a corresponding object constructor; you can see
  this clearly in the following example:
*/

typeof(true);
// "boolean"
typeof(Boolean(true));
// => "boolean"
typeof(new Boolean(true));
// => "object"

/*
  It is generally considered bad practice to use primitive object constructors
  (as shown in the final line above).

  An object constructor can be invoked using the word new, as shown above.
  Each objet has methods associated with them based on what constructor was used.

  As stated above, primitive data types do not have properties.
  So why does "someString".length work?

  Let's take a look at the behavior of == vs ===, JS does a fun thing called type
  coercion. This means that JS will take different data types, and one of them will
  be converted to an "equivalent".
  
  - type coercion: the automatic conversion of values from one data type to another,
    typically performed during operations or comparisons involving different data
    types. See an example of this below:
*/

// Examples of Type Coercion:

// Example 1:
'1' == 1; // type coercion occurs
// => true
'1' === 1;
// => false

// Example 2:
// soem examples of String properties:
const someString = "Lighthouse Labs";

console.log(someString.toUpperCase());
// => 'LIGHTHOUSE LABS'

console.log(someString.toLowerCase());
// => 'lighthouse labs'

console.log(someString.split(""));
// => [ 'L', 'i', 'g', 'h', 't', 'h', 'o', 'u', 's', 'e', ' ', 'L', 'a', 'b', 's' ]


/*
  You can actually teest the difference between the constructor and actual primitive.
  In the next examples we can see that the == (type-coercion vulnerable) comparitive
  returns true, while === comparative returns false.
*/

const greeting = "Hello, world!";
const objGreeting = new String("Hello, world!");

greeting == objGreeting;
// => true

greeting === objGreeting;
// => false

/*
  We see above that despite having the same string content, the primitive string is not
  the exact same as an object string. However, using == allows JS to convert one of them
  so that their types match.
*/

/*
  Conclusion - What We Learned:
  - Almost all primitive types have thier equivalent object representations.
  - We can invoke properties on those primitive types using their equivalent
    object representations.
  - JS performs type coercion on strings, numbers an other primitive types,
    turning them into objects in order to make them act like objects.
*/
