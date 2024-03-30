// HTTP Server - Assignment:

/*
  It's time to start getting acquainted with creating HTTP servers in Node.

  While we won't be using the http module directly for real, production level web
  applications, we should spend some time with it to really understand how frameworks
  like Express actually work.

  Follow This Guide:
    https://www.guru99.com/node-js-create-server-get-data.html

  Important to Note:
    - It also has you spending time with the request module, but if you're already
    feeling comfortable with that, then skip that part.

    - It's a bit old and uses var, doesn't employ arrow functions for callbacks,
    but feel free to modify those parts as you work through the tutorial.

    - Use port 3000 not 7000 in your Vagrant machine. Not all the ports are accessible
    from your host machine, but 3000 is.
*/

// // Step 1: Call the HTTP library
// const http = require('http');

// // Step 2: Create the server using the HTTP library
// const server = http.createServer((request, response) => {
//   // Step 3: Set the content header
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   // Step 4: Send the string to the response
//   response.end("Hello World\n");
// });
// // Step 5: Make the server listen on port 3000
// server.listen(3000);


/*
  Code Explanation:

  Step 1:
    The basic functionality of the require function is that it reads a JavaScript
    file, executes the file, and then proceeds to return the exports object. 

    So in our case, since we want to use the functionality of the http module, we
    use the require function to get the desired functions from the http module so
    that it can be used in our application.
  
  Step 2:
    In this line of code, we are creating a server application which is based on a
    simple function. This function is called whenever a request is made to our server
    application.

  Step 3:
    When a request is received, we are saying to send a response with a header type
    of ‘200.’ This number is the normal response which is sent in an http header
    when a successful response is sent to the client.

  Step 4:
    In the response itself, we are sending the string ‘Hello World.’

  Step 5:
    We are then using the server.listen function to make our server application listen
    to client requests on port no 3000. You can specify any available port over here.
*/
// Requires the request module from the library
const request = require("request");
// Makes a GET request to http://www.google.com
// The callback function is executed when the request completes
request("http://www.google.com", function(error, response, body) {
  // Logs the body of the response to the console
  console.log(body);
});
