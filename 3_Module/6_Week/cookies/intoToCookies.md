# Intro to Cookies - Reading

This activity introduces the concept of cookies and how they are implemented using Node.js and Express.

## Background
Communication between the browser and our application is done over HTTP, which is stateless, meaning that each request is treated independently of every other, and requests can happen in any order.

We're used to web applications offering a unique experience for each user. In order to treat each user independently, we need a way to distinguish each user's HTTP requests.

Cookies, a feature of HTTP, help us fill this need.

An HTTP server can tell a client to remember certain keys and values ("cookies") using the Set-Cookie header in an HTTP response.

In all subsequent HTTP requests from the client to the server, these keys and values are included in the Cookie header.

In essence, the server can ask a client to "keep reminding" the server of the client's identity (or other info) with every subsequent request. 

Diagram: 
![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/HTTP_cookie_exchange.svg/640px-HTTP_cookie_exchange.svg.png)
(open previewer to see the pic or copy and paste into web browser and select first link)

