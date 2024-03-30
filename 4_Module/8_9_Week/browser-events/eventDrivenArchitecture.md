# Event-Driven Architecture - A Brief Intro

  * EDA = event driven architecture

EDA can be summarized as:
  When X happens, then do Y.

Where X is the event, and Y is the event handler. Perhaps Event X is the click of a button, and Handler Y turns on a lightbulb.

This software pattern lends itself well to async programming languages such as JS.


## Client-Side Events:
On the client side (browser), we have the DOM (document object model), which has events such as:

  - onClick
  - onFocus
  - onLoad
  - onMouseOver
  - onSubmit

One library that we will use to demonstrate client-side events in jQuery.


## Server-Side Events:
Similarily, on a server running Node.js you can think of an incoming request as an event, with a callback function that handles the event (and could render a response).

The Node.js core API provides an EventEmitter class that is the basis for event-driven patterns.