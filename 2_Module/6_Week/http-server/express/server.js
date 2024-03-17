// Import the express library
const express = require("express");
// Define our app as an instance of express
const app = express();
// Define our base URL as http:\\localhost:3000
const port = 3000;

// Listen for requests on the specified port
app.listen(port, function() {
  // Define a route for the base URL
  app.get("/", function(req, res) {
    // Send "Hello World!" as the response
    res.send("Hello World!");
    // Log a message indicating that a request has been received and the server is running
    console.log(`Server running on port ${port}`);
  });
});

/*
  This code is pretty readable: “app.get” tells our server that the GET function
  is what we want people to do at this endpoint.

  Where is the endpoint?

  That’s the colored: /. This endpoint doesn’t have any identifying text after
  the slash, but that’s because it’s the landing page for the site. This makes
  sense.
  You go to google.com/, not google.com/firstPageOfGoogle, right? Our server is
  just keeping it simple.
*/

/*
  Summary:
  That’s it for the most basic server possible.

  We have our import statements and tell the file to use Express, then we simply
  tell it to listen to the port. From here, the possibilities are endless. With
  Express, Node becomes a much more manageable system.
  
  It handles a lot of boilerplate code that we don’t need and introduces syntax
  that will be simpler for us to understand as our server files grow.
*/