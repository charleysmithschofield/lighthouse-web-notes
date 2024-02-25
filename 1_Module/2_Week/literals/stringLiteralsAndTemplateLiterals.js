
// STRING LITERALS AND TEMPLATE LITERALS:

// String Literal:

// A string literal is a fixed sequence of characters that represents a string value.
// Example:

const message = 'Hello, World!';



// Template Literal (or String Interpolation):

// Template literals are a way to embed expressions inside string literals.
// They are created using backticks (`) instead of single or double quotes.
// Within a template literal, ${expression} is a placeholder that gets replaced by the value
// of the expression.

// It allows you to include variables or expressions directly within a string.
// Example:

const actual = 5;
const expected = 10;
console.log(`Assertion Failed: ${actual} is not equal to ${expected}`);
