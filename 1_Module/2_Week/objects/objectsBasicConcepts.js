
// OBJECTS - BASIC CONCEPTS:

/* Objects at a Glance:

   - Contain key-value pairs; each key maps to a value.

   - Contain keys which are always strings.
     (or symbols, less common and not important right now).

   - Have unique keys; the same key cannot appear twice in an object.

   - Have their keys point to values which can be of any type.

   - The key-value pairs are called the properties of the object. 
*/


// OBJECT SYNTAX EXAMPLE:
const object = {
  property1: value1, // property name may be an identifier (identifiers can be strings or numbers)
  property2: value2,
};

// OBJECT LITERALS:

// Objects have a literal syntax using curly braces {}. Here is an empty
// object literal assigned to a variable:

const emptyObject = {}

// // An object literal with a single key-value pair:

const tinyObject = {"size": "Tiny"}

// Property: key 
// The key: "size"
// The value: "Tiny"


// Note that while our key "size" is enclosed in double quotes like a string,
// it can stil be considered a string w/o the quotes around it.  So we have
// a few characters and make it read nicer by writing it this way instead:

const tinyObject = { size: "Tiny" };



/* OBJECT VALUES:

An object's values can be of any type. The following example shows an object
with primitive values:

How To: Go into your terminal and start a Node.js REPL/shell by typing node,
        then enter. Then type in the object listed below, using CTRL + enter
        to create new lines.

If you mistype while in a multi-line impt in node and need to starrt over,
use CTRL + C to start over.

const myObject = {
  a: 6,     // Number
  b: "abc",  // String
  c: true,  // Boolean
  d: null,  // Null
};
*/



// ACCESSING OBJECT VALUES:

// To retrieve a value within an object a value within an objet, use square
// bracket notation.

const person = { firstName: "Khurram" };
const firstName = person["firstName"]; // get the value associated with the key 
"firstName".

// If you try to access the property like this:

const person = { firstName: "Khurram" };
const firstNameAgain = person[firstName];

// You will get a ReferenceError because firstName is not defined as a variable.
// However, if you ahve a variable that points to a string, you can use that variable
// to access the property. Like this:

const person = { firstName: "Khurram" };
const propertyName = "firstName";
const firstName = person[propertyName]; // This works fine b/c propertyName is a string "firstName".



// ACCESSING A KEY THAT DOESN'T EXIST:

// Type the following code into your node session:

person["foo"]; // The key "foo" doesn't exist in myObject so it returned undefined.


// ASSIGNING A NEW VALUE TO A KEY:

/*
Square-bracket notation can also be used to assign new values to new or existing keys.
Let's see this in action.

Instruction
Run the following code in your node session to see how this object looks after assigning to keys.
*/

const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
mary // shows the resulting object with both properties



// OBJECTS AS VALUES:

/*
We don't need to limit ourselves to primitive values. In addition, we can nest objects
within objects. 
Put another way, the key-value pair in an object can have a value that is another object.
*/

const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};

// We can access objected that are nested within other objects by using square bracket
// notation:

person["address"]["city"]; // => New York



// ARRAYS AS VALUES:

// Modify the existing person object to incl. a new attribute (key) called phoneNumbers
// and assign it an array of strings.
person["phoneNumebrs"] = /* <insert array of phone numbers here> */

// Inspect the data type of phoneNumbers (it's an object).
typeof person["phoneNumbers"];


// Inspect the data type of phoneNumbers using the JS operator: instanceof
person["phoneNumbers"] instanceof Object // true
person["phoneNumbers"] instanceof Array  // true
person["phoneNumbers"] instanceof String // false



// OBJECT KEYS:

/*
Let's revisit the rulse RE: how object keys work in JS:

1. Keys are ALWAYS strings
2. Each key is unique (can only occur once in an object)
3. Each key is associated with exactly one value (Note that an array or another
   object would count as only "one value" here, even though they contain other
   values).
*/


/*
When writing out object literals, like { myKey: "some value" }, 
- Key: always interpreted as a literal string (even if unquoted).
- It is only necessary to use quotes around the key if they key contains spaces,
  hyphens or periods. 
  Ex: { "my-hyphenated-key": "some value" }.

By convention, we omit the quotes around keys in string literals whenever we can.
If the key is a valid variable name, then we don't have to incl. quotes.

The following example shows two ways of specifyingt he same value in an object 
literal: using a literal string for the value, or using a variable.
*/

// Example: 
const spam = "spam";
person["dislikes"] = { food: spam, "e-mail": "spam" };

/* 
In the object literal, both "spam and `spam` represent the same string value.
The key "e-mail" is a string literal.
The value associated with the key `food` is the variable `spam`.
The variable `spam` holds the string value "spam".

So in this context:
*/

const spam = "spam";

/*
This line declares a constant variable named spam and assigns the string value 
"spam" to it. 

The const keyword indicates that the variable cannot be reassigned to a different
value later in the code.
*/

person["dislikes"] = { food: spam, "e-mail": "spam" };

/*
Property: "dislikes"
  -Key-Value Pairs within the "dislikes" Object:
    1. Key: "food"
       Value: The value of the `spam` variable, which is the string "spam"
    
    2. Key: "e-mail"
       Value: The string "spam"

Do Not Forget: In JavaScript, you can access object properties using either:
    - dot notation (object.property)
    - bracket notation (object["property"]). 

In this case, bracket notation is used because the key "e-mail" has a hyphen
and therefore it must use bracket notation. 

The overall result is that the person object now has a "dislikes" property, which 
is an object containing information about dislikes related to food and e-mail.
The dislikes related to both food and e-mail are specified as "spam".
*/



// OBJECT.KEYS:

// To inspect an object's keys, there is a method Object.keys(...) that returns an 
// array of keys. 

// With person already defined, try executing Object.keys(person) in your Node 
// session. 



/* CONCLUSION SUMMARY:
  - Create Objects (const object = {})
  - Accessing Properties of an Object (o["key"])
  - List all the Keys of an Object (Object.keys(o)).
*/
