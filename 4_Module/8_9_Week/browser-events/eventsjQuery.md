# Events using jQuery - Reading

## Introduction
Web pages are all about interaction. Users perform a number of actions such as moving their mice over the page, clicking on elements, and typing in textboxes - all of these are events.


## What is a DOM event?
DOM events occur on an element, for example when a user clicks on a button, the button has had an event occur on it. While the user interactions aren't the only types of DOM events, they're the easiest to understand when starting out.


## Ways to listen for events
Actions are constantly occurring on a webpage, but the developer is only notified about them if they're listening for them.

Listening for an event basically means you're waiting for the browser to tell you that a specific event has occurred and then you'll specify how the page should react.

To specify to the browser what to do when an event occurs, you provide a function, aka an Event Handler. This function is executed whenever the event occurs (or until the event is unbound).

Example:

<button onclick="alert('Hello')">Say hello</button>

Then we want to listen to is specified by the button's onclick attribute, and teh event handler is the alert function which alerts "Hello" to the user. While this works, it's not the ideal way to solve this b/c:

  - We're coupling our view code (HTML) with out interaction code (JS). That means that whenever we need to update functionality, we'd have to edit our HTML which is bad practice.

  - It's not scalable, meaning you had to attach this functionality to numerous buttons, you'd not only bloat the page with a bunch of repetitious code, but you would again destroy maintainability.

Example: 

<button id="helloBtn">Say hello</button>

If we would be informed when a user clicks on that button unobtrusively, we might do something like this in a separate script file:

// Event binding using addEventListener
const helloBtn = document.getElementById( "helloBtn" );
 
helloBtn.addEventListener( "click", function( event ) {
    alert( "Hello." );
}, false );

