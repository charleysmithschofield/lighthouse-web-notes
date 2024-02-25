# Intro to HTTP - Notes:

## What is HyperText?

  HyperText is the HT in HTTP and HTML, and its origins date back to the 1960's. 

  - Hypertext: Hypertext is text which contains links to other texts.


## HTTP Indroduction:

  HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. It started off as being mostly used for HTML documents, but today it's used for all sorts of documents, like JavaScript files, CSS, and anything else that our browser is capable of downloading (PDFs, etc.).


## HTTP Flow:

  HTTP is a request-response based protocol. A client makes a request to an HTTP server, immediately also sending a message asking for a specific resource, which the server sends down as a response. A server cannot send a response to a client if the client has not first sent a request.

When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:

  1. Open a TCP connection: The TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.

  2. Send an HTTP message: HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same. For example:
   
          GET / HTTP/1.1
          Host: developer.mozilla.org
          Accept-Language: fr

  3. Read the response sent by the server such as:

          HTTP/1.1 200 OK
          Date: Sat, 09 Oct 2010 14:28:02 GMT
          Server: Apache
          Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
          ETag: "51142bc1-7449-479b075b2891b"
          Accept-Ranges: bytes
          Content-Length: 29769
          Content-Type: text/html

          <!DOCTYPE html>… (here come the 29769 bytes of the requested web page)

  4. Close or reuse the connection for further requests.


## HTTP Messages:

  HTTP messages, as defined in HTTP/1.1 and earlier, are human-readable. In HTTP/2, these messages are embedded into a binary structure, a frame, allowing optimizations like compression of headers and multiplexing. Even if only part of the original HTTP message is sent in this version of HTTP, the semantics of each message is unchanged and the client reconstitutes (virtually) the original HTTP/1.1 request. It is therefore useful to comprehend HTTP/2 messages in the HTTP/1.1 format.

  There are two types of HTTP messages, requests and responses, each with its own format.


## HTTP Requests:

  - request: when a client wants to communicate with a server it issues a request.

  - HTTP path erquest: made up of many components, incl. the path and method.

  - path: says what resource the client wants to act on.

  - method: says what action it would like to perform.


## HTTP Methods:

  There are 9 HTTP request methods, but we only need to consider 4 of them right now:

  - GET: used to "get" some data from the server

  - POST: usually used to create some new data

  - PUT: generally used for editing existing data on the server

  - DELETE: used to delete some existing data

  We'll explore these in detail over the next few weeks. Another name for HTTP methods is "verbs", since the methods can be seen as "action words".


## Paths and URL Structures:

  In order to request a "resource" (webpage, etc.) from an HTTP server, we need to know its URL.

  Every web developer should be able to correctly identify a Uniform Resource Locator (URL). 

  The 'path' is part of the URL.


### Example:

  http://www.example.edu:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

### 1. Scheme:

  The first part of the URL is the scheme, which indicates the protocol that the browser must use to request the resource (a protocol is a set method for exchanging / transferring data around in a computer network). 

  Usually for websites the protocol is HTTPS (secure version) or HTTP (unsecure version).


### 2. Authority:

  Next follows the authority, which is separated fromt he scheme by the character pattern ://

  If present, the authority incl. both the domain (ex: www.example.com) amd the port (ex: 80), separated by a colon.

  - The domain indicates which Web server is being requested. Usually this is a domain name, but an IP address may also be used (but this is rare as it is much less convenient).

  - The port indicates the technical "gate" used to access the resources on the web server. It is usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to grant access to its resources. Otherwise it is mandatory.

### 3. Path to Resource:

  /path/to/myfile.html is the path to the resource on the Web server. 
  
  In the early days of the Web, a path like this represented a physical file location on the Web server. 
  
  Nowadays, it is mostly an abstraction handled by Web servers without any physical reality.

### 4. Parameters: 

  ?key1=value1&key2=value2 are extra parameters provided to the Web server. 
  
  Those parameters are a list of key/value pairs separated with the & symbol. 
  
  The Web server can use those parameters to do extra stuff before returning the resource. 
  
  Each Web server has its own rules regarding parameters, and the only reliable way to know if a specific Web server is handling parameters is by asking the Web server owner.

### 5. Anchor:

  #SomewhereInTheDocument is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that "bookmarked" spot. 
  
  On an HTML document, for example, the browser will scroll to the point where the anchor is defined; on a video or audio document, the browser will try to go to the time the anchor represents. 
  
  It is worth noting that the part after the #, also known as the fragment identifier, is never sent to the server with the request.

## HTTP Responses:

  When a server receives a request from a client, it reads the path and the method to figure out what it should do.

#### For Example: 

  If the request it receives is something like GET /dogs the server may try to fetch and return all of the data about dogs that it has.

  After the server has tried to perform the requested action, it sends a response back to the client. The response contains all kidn of info, but the two important bitgs are:

  - Status Code
  - Body


## HTTP Status Codes:

  You've likely seen error pages before:

  These pages tell a user the requested resource wasn't found, or if the server itself is simply unable to perform the action at the moment.

  It's crucial to be able to convery this info quickly. While these pages work well for humans, when a server wants to relay this info to a clietn it will use a status code.

  - status code: 

    A three digit numer that the server puts in the response to let the client know whether or not the operation was successful. 
  
  There are TONS of status codes, and you don't need to know them all, but here is a translation for some of the main ones:

  - 200: "Everything went great!"

  - 201: "The request has succeeded and a new resource has been created as a result."

  - 404: "Resource was not found."

  - 500: "The server had an error."

Also here is a link to 451 status codes that indicate the user requested a resource that is not avl due to legal reasons:

    https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 


## Response Body:

  The response will also usually contain some data, such as the data the client originally requested. 

  This data is stored in a part of the response which is called the body. 
  
  The body may store data in many kinds of formats, such as text and images. For our purposes, the body will often contain webpages (HTML) or data encoded in JSON, which we'll learn about later on.

## Headers:

  As we mentioned earlier, HTTP requests and responses are made up of lots of components. 
  
  However, you only need to worry about a few of them right now. For the requests, it's enough to understand the path and method. 
  
  For the responses, you only need to consider the status code and body. Both requests and responses also let a programmer inject extra information into them as "headers", which is a key-value way of storing data in a request or response. 
  
  There are many reasons for why we would add headers, but we won't explore that until next week's project.


## Conclusion:

  While there's a lot more depth to the topic of HTTP, our focus here was to introduce the core concepts that are important to understand.

Specifically:

  - HTTP is a request-response protocol, where the client makes requests and the server sends responses

   - HTTP is a text based protocol, making it easy to read and understand for humans

   - HTTP requests must contain the verb/method (eg: GET) and the Path (eg: /about)
   - HTTP requests aren't always to receive data, but sometimes to save data, like when we submit a form on a website. This is done via a POST instead of a GET

   - Requests and responses both contain key-value based headers:

      - example: Accept-Language: fr, Content-Type: text/html, etc.
