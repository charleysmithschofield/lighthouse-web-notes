// Our First Web Server - Assignment:

/*
  In this exercise, we will create a bsic web server using http that accepts
  GET and POST requests on a single endpoint.

  In doing so, we will begin to understand how node can be used to create not
  just an HTTP client (ISS Spotter, Cats as a Service, etc.), but also HTTP
  servers.
*/
/*
  The program will not exit. It will create a web server, which will sit there
  listening for requests on port 8080, allowing you to access any local path on
  8080 like http://localhost:8080/path.


 *** IF YOU NEED TO STOP OR RESTART YOUR SERVER YOU MUST USE ***
     CTRL + C

    Stopping it any other way may cause issues.
*/


// Import the HTTP module, this allows us to create an HTTP server
const http = require("http");
// Define the port number on which the server will listen for incoming requests
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  console.log("In requestHandler"); // NEW LINE
  if (request.url === "/") {
    // Response for the root path
    response.end("Welcome!\nRequested Path: /\nRequest Method: " + request.method);
  } else if (request.url === "/urls") {
    // Response for the /urls path
    response.end("www.lighthouselabs.ca\nwww.google.com\nRequested Path: /urls\nRequest Method: " + request.method);
  } else {
    // Response for other paths (404 Page Not Found)
    response.statusCode = 404;
    response.end("404 Page Not Found\nRequested Path: " + request.url + "\nRequest Method: " + request.method);
  }
};

// Create an HTTP server instance by passing the requestHandler function
const server = http.createServer(requestHandler);
console.log("Server created"); // NEW LINE

// Start the server and make it listen for incoming requests from the specified port
server.listen(PORT, () => {
  // Log a message to the console indicating that the server is listening.
  console.log(`Server listening on: http://localhost:${PORT}`);
});

// console.log("Last line (after .listen call)"); // NEW LINE

/*
What would we see as output to the terminal if we added the above console.log
statements to our server?

  1. Server created
  2. Last line (after .listen call)
  3. Server listening on: http://localhost:8080
  4. Then, anytime there is a request, we'd see the same output: In requestHandler

  This is because the createServer and listen functions, in typical JavaScript
  fashion, are non-blocking and will return immediately.
  
  The Server listening log is within a callback function that is only executed once
  the server starts listening.
  
  The In requestHandler log is printed every time a request is made to the server.
*/

/*
  Visit http://localhost:8080/path in Chrome and then use cURL to request this URL
  as well. Remember, since we need to keep the server running in our terminal in
  order to receive the request, you'll need to use a second terminal window to
  execute a cURL command.

  ** Remember to use cURL you just type this into your terminal
  (a new terminal as per instruction above):

  curl <IP Address Here>
  curl http://localhost:8080/path
*/

/*
  Conclusion
  This activity shows us that it is possible to quickly create a web server
  to handle HTTP requests with http without the use of any other node
  libraries/modules. However, it can prove cumbersome to build more complex
  servers and for that reason we use libraries like Express.
*/