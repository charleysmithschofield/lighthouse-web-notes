# Asynchronous Requests and Responsiveness

## Intro
 The upcoming activities will extend your understanding of dynamic
 applications by introducing AJAX technology.

 AJAX is a technology that allows a web page to make requests to
 the server w/o reloading the page. The server response can be used
 to modify the page content or trigger a desired behaviour.

 We will continue to work with jQuery, using it to perform AJAX
 requests to manipulate the DOM.


## What is Ajax?
When you type a URL into your web browser's address bar and press enter, the browser performs a GET request and then presents the HTML web page that is returned in the response.

The request might look like this URL: http://example.com/about.html


GET /about.html HTTP/1.1
Host: example.com
Accept: text/html


The response from the server might look like this:


HTTP/1.1 200 OK
Content-Type: text/html

<!doctype html>
<html>
  <head>
    <title>About Us</title>
  </head>
  <body>
    <h1>About Us</h1>
    <!-- etc. -->
  </body>
</html>


## Ajax is Asynchronous
AJAX - Asynchronous JavaScript and XML.

The term "async" refers to the fact that Ajax HTTP requests don't interrupt a user's interaction with the current web page. Instead of an HTTP response replacing the web page in the browser, it is passed to a JavaScript function, and that function is responsible for determining what to do with it. Often the JavaScript will modify the DOM to reflect the response from the server. 

This is valuable workflow because it makes web pages more dynamic by allowing subsequent requests to be sent to the server without navigating away from the page.

In traditional, synchronous web sites, each time a user clicks a link or submits a form they have to wait for the server to send the new web page for them to interact with (after the browser has rendered it). Ajax allows the user to continue using the webpage while the request-response cycle can be done in the background, asynchronously.


## How AJAX Works
AJAX requests are normal HTTP requests sent to a web server by some JavaScript n a web page. A lot of the time these requests are made after the user interacts with the page in some way, like clicking a button. 

In face, the way that you tell JavaScript to run some function when a button is clicks is very similar to the way that you tell Javascript to run some function when an HTTP request returns.


## AJAX Libraries
Before going into how to actually add Ajax functionality to a web site, it's important to address the underlying technology. JavaScript is capable of performing Ajaz requests without any code libraries; Ajax is something all major browsers support.

However, there are several JS libraries that try to improve the way that Ajax is done in JavaScript. The most popular one is jQuery, and for that reason the examples that follow will use jQuery.


## Conclusion
Ultimately Ajax, is used to get data from web servers into Strings in JavaScript. Commonly the data is transferred as JSON Strings so that they can be easily converted into JavaScript Objects. In face, it's so common that jQuery will do the String to Object conversion for you if you can tell that the data is JSON.

What you do with those Strings and Objects is up to you. Use your imagination!