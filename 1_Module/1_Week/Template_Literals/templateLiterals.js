
// Template Literals - Notes:

/* 
 - Template Literals:
   AKA: template strings

   defintion:
   Template literals are literal delimited with a backtick (`) characters,
   allowing for multiple line strings, string interpolation with embedded expressions, 
   and special constructs called tagged templates. 


 - Interpolation:

   definition:
   The process of inserting variablees or values into a string, usually within
   a larger piece of text. It allows you to create dynamic strings by combining
   fixed text with the values of variables. This is commonly done using template
   literals or string concatenation to produce a cohesive and customized string 
   output. */



// Template Literal Syntax:
  `string text`

  `string text line 1
   string text line 2`

  `string text ${expression} string text`

tagFunction`string text ${expression} string text`


// Fancier Strings Example:

  const name = 'Alice';
  console.log('Hello, ' + name + '!'); // logs: Hello Alice!

/* This works by concatenating the stings 'Hello, ', 'Alice' and '!'
   together. However this is cumbersome. We can use string literals 
   to simplify */
  
   const name = 'Alice';
   console.log(`Hello, ${name}!`); // logs: Hello, Alice!

