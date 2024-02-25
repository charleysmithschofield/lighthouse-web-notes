/*
  Problem
  We will be creating a function to invert someone's name from:
  "first last" to "last, first".
  
  So the function should turn a name like:
  "Khurram Virani" into "Virani, Khurram".
*/

/*
  Features
  Here are all the requirements for this function:
  
  1. throw an error when name is undefined
     input: undefined
     output: throw 'Error'


   2. return an empty string when passed an empty string
      input: ""
      output: ""


   3.a. return a single name when passed a single name
      input: "name"
      output: "name"
   3.b. return a single name when passed a single name with extra spaces
      input: " name "
      output: "name"
   3.c. return an empty string when passed a single honorific
      input: "Dr. "
      output: ""


   4.a. return a last-name, first-name when passed a first and last-name
      input: "first last"
      output: "last, first"
    Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
      input: " first last"
      output: "last, first"



  5.a. return honorific first-name when passed honorific first-name
      input: "Dr. first"
      output: "Dr. first"
  5.b.  return a honorific last-name, first-name when passed honorific first-name last-name
      input: "Dr. first-name last-name"
      output: "Dr. last-name, first-name"
  5.c.  return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
      input: " Dr. first-name last-name "
      output: "Dr. last-name, first-name"



  In the English language, an English honorific is a title prefixing a person's name. Examples of honorifics:
      Mr.
      Mrs.
      Ms.
      Dr.
*/

/*
  The First Features:
    Let's implement the first two requirements together and write tests for them:

      return an empty string when passed an empty string
      input: ""
      output: ""
      return a single name when passed a single name
      input: "name"
      output: "name"
*/

/*
  The Remaining Features
  Now it's time for you to add the next 8 features. Remember to:

  Write the features in the order that they're listed.
  Only work on one feature at a time.
  Test that the current feature is working before moving onto the next feature.
*/

/*
  An Explanation of .split(/\s+/):
    \s matches any whitespace character.
    + matches one or more occurrences of the preceding \s, meaning it will match sequences
    of one or more whitespace characters.

  Thus, /\s+/ matches sequences of one or more whitespace characters. It can be used,
  for example, to split a string into words separated by spaces, tabs, or line breaks.
*/


// Define the nameInverter function.
const nameInverter = function(name) {
  // Initializing a variable to trim and split a name, call it fullName
  const fullName = name.trim().split(/\s+/);
  console.log(fullName);

  // if name is undefined, throw an error
  if (fullName === undefined) {
    throw new Error('Name cannot be undefined');
  }

  // if name is an empty string, return an empty string
  if (fullName[0] === "") {
    return '';
  }
  
  // if passed a single honorific, return an empty string
  if (fullName.length === 1 && fullName[0] === "Dr.") {
    console.log(2);
    return "";
    // else if passed a single name, return a single name
  } else if (fullName.length === 1) {
    console.log(3);
    return fullName[0];
  }

  
  // if passed a honorific first name, return honorific first name
  if (fullName.length === 2 && fullName[0] === "Dr.") {
    console.log(4);
    return fullName[0] + ' ' + fullName[1];
    // else if passed a first and last name, return last name, first name
  } else if (fullName.length === 2) {
    console.log(5);
    return fullName[1] + ', ' + fullName[0];
  }

  // if passed a honorific, first name and last name, return the honorific, last name, first name.
  if (fullName.length === 3 && fullName[0] === "Dr.") {
    return fullName[0] + ' ' + fullName[2] + ', ' + fullName[1];
  }
};

module.exports = nameInverter;