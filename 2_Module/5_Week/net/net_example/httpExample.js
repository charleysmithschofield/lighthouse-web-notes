// Simple HTTP Example using Net:

// We will make a very simple HTTP GET request to a trusty and timeless placeholder
// website: example.edu

/**
 * SETUP
 * Our usual client setup code
 * Connect to example.edu website's HTTP server using our TCP library
 * HTTP servers typically run on port 80
*/

// Connect
const net = require('net');
const conn = net.createConnection({
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');

/*
  What happens when the code above is run?

  We find that the client appears to hang for an indefinite period of time.
  This is because the server has accepted the connection but is waiting for a request from
  our client. Since the connection stays open, our node app does not terminate.
*/


// Make a request once connected

conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});

/*
  What happens when the code above is run?

  We're presumably making a request for the / here (we could also specify /index.html
  for this server), using the HTTP 1.1 protocol.
  
  However, nothing different is happening on the client side.
  
  This is because we have not yet added logic to handle incoming data from the server,
  which is hopefully sending us the HTML for the home page as a response to our request.
*/


// Let's add in code to receive the response data:
/**
 * HTTP Response
 * After request is made, the HTTP server should send us HTTP data via our TCP connection
 * Print the data to the screen, and end the connection
 */

conn.on('data', (data) => {
  console.log(data);
  conn.end();
});


/*
The HTML content for the page follows thereafter:

<!doctype html>
<html>
...
</html>
We then end the connection so our app also terminates, due to a lack of active/open connections.
*/

/*
Conclusion
In this exercise we saw how it is possible to use the net module to make an
HTTP request (of any kind, really) to any http server. While this is possible,
we'll find that there are more purpose-built libraries in Node that help us do
this in a more simple manner (yay!)

The reason we spent some time doing this exercise is to appreciate how HTTP is
not alternative to TCP, but rather the text-based "language" that is used to
communicate over a TCP connection. This means that every time our browser accesses
a website, it makes an HTTP request by opening a TCP connection on port 80
(or 443 for https) to a given HTTP server's IP address.

It then sends text-based commands such as GET /path-to-page HTTP/1.1\r\n along
with many other request headers (such as the user agent string, etc.) and waits
for a response from the server. The response could be any type of document,
which typically is either HTML, CSS, or JS.
*/