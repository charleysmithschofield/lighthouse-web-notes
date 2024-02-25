// JSON - Reading:

/*
  JSON is a data format that underpins many moderns web services. It stands for
  JavaScrip Object Notation, and it's actually a subset of the JavaScript lang-
  uage.

  This reading will introduce you to the fundamentals of JSON and illustrate its
  importance in web technology.
*/

/*
  THE OFFICIAL DEFINITION:

  Here is a (slightly simplified) definition of JSON from json.org:

    JSON is built on two structures:

    - A collection of name/value pairs.
    - An ordered list of values.

  These are universal data structures. Virtually all modern programming languages support them in one form or another. It makes sense that a data format that is interchangeable with programming languages also be based on these structures.

  An Object encoded using JSON looks like this:
*/

{
  "name": "New York City",
  "boroughs": [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "The Bronx",
    "Staten Island"],
  "population": 8491079,
  "area_codes": [212, 347, 646, 718, 917, 929],
  "position": { "lat": 40.7127, "lng": -74.0059 }
}

// Note that the keys are always double-quoted "strings".
// Note hat the values can be numbers, strings, or objects themselves.

// The JSON syntax is (and must be) valid JS.

/*
  SERIALIZATION:

  The process of serialization converts objects (or data structures) into a format
  that can be stored or transmitted between computers (typically as a string of
  text). 
  The opposite, going from String → Object is called deserialization.

  In JavaScript, we have the JSON object for serializing and deserializing. The
  Mozilla Developer Network (MDN) provides good documentation on these two
  important methods:

    1. JSON.parse():

      Parse a string as JSON, optionally transform the produced value & its properties,
      and return the value.


    2. JSON.stringify():

      Retun a JSON string corresponding to the specified value, optionally incl.
      only certain properties or replacing property values in a user-defined
      manner.
*/

/*
  TINKER:
    Try this yourself in Node.js command line (in your terminal).

  Instruction: 
    Type out and examine the result for each of these lines of code in our node
    REPL.
*/

// Create a valid JSON string.
const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
jsonString // a string, of course :)

// Convert the string into an object, by "parsing" it:
const obj = JSON.parse(jsonString);
obj 

// Modify the object:
delete obj.foo;
obj

// Serialize it back to a string:
JSON.stringify(obj); 

/*
  REFLECT & EXPERIMENT:

  Try to answer and/or experiement with these questions:

    1. What did the output of obj look like? Did the delete command remove foo
       from the object?

       '{"a":1,"b":2}' and yes it did remove foo

    2. What would happen if we try to parse an invalid JSON string?
       (missing double quote, or curly bracket, etc.)?

       We would get a SyntaxError indicatingt hat the JSON's syntax is incorrect.

  We ask questions such as these not specifically to learn these specific edge
  cases. Moreover, we are trying to instill this type of thinking early on in
  your learning process.
*/

/*
  JSON Media Type:

  When data is sent across the web using HTTP request/responses, the Media Type
  for JSON data is appliction/json (compare to text/html for HTML).

  It is set via the Content-Type HTTP response header.
*/

// You can check the Content-Type in the response header by running the following
// cURL command in your terminal:

curl -i InputDeviceInfo.io

/*
  Content-Type Example (json_curl_ipinfo_io.png)
  Notice in the response header, Content-Type: application/json; charset=utf-8. 
  This indicates the media type and character encoding of the response body.
*/

/*
  JSON for Configuration Like package.json
  Remember how npm likes to add a package.json file into our project's root
  directory? Configuration/setting files like these are a great example of
  how JSON is used.
  
  The text read from the file is a string. NPM needs that information so it
  reads the file and then parses it into an object using the JSON object
  (or an equivalent library), just like we did above.
*/

// What is the correct way to pronounce JSON?
// "Jason"

/*
  JSON > XML
  Before JSON became popular (thanks Doug!), as he mentions, XML was the popular
  standard format for exchanging data.
*/

/*
  JSON is Language Independent

  This was mentioned earlier in this reading, but it's important to note.

  In the video above, Douglas also makes an important point which is that JSON
  is meant to be language independent. 
  
  And it is! It's not just used in Node / JS projects. 
  
  We see it used heavily in other programming languages/ecosystems such as Python,
  Ruby, C#, Java, Golang, Rust, etc.
*/

/*
  CONCLUSION:

  It wouldn't be much of an exaggeration to say that JSON is used practically
  everywhere in software these days.

  Since objects are an easy way to store key-value data, we learned about how
  this JavaScript Object Notation is used to store configuration/setting info
  in files (such as package.json) and how we can easily use two methods on the
  JSON object to convert between actual object and string representation of that
  data.
*/