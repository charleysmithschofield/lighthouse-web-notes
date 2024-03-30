# Event Propagation

## Bubbling and Capturing
Since Document Object Model elements are nested within other elements, in a tree-like structure, events that affects a child element bubble up through its parents.

It is also possible to prevent an event from continuing its propagation at any stage using stopPropagation().

  - web ref: https://javascript.info/bubbling-and-capturing 


### Bubbling
When an event happens on an element, it first runs the handlers on it, then on its parent, than all the way up on other ancestors.

Let's say we have 3 nested elements Form > Div > P with a handler on each of them:

### Bubbling Example
<!-- HTML File -->
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

The structure above would be a form with a div in it, and a p in the div.

A click on the inner <p> first runs onclick:

On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.

So if we click on <p>, then we’ll see 3 alerts: p → div → form.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.


## event.target
A handler on a parent element can always get the details about where it actually happened.

The most deeply nested element that caused the event is called a target element, accessible as event.target.

Note the differences from this (=event.currentTarget):

event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
this – is the “current” element, the one that has a currently running handler on it.


For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.

In form.onclick handler:

this (=event.currentTarget) is the <form> element, because the handler runs on it.
event.target is the actual element inside the form that was clicked.


## Stopping Bubbling
A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is event.stopPropagation().

For instance, here body.onclick doesn’t work if you click on <button>:

<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>


### Don't Stop Bubbling W/O A Need!
Bubbling is convenient. Don’t stop it without a real need: obvious and architecturally well thought out.

Sometimes event.stopPropagation() creates hidden pitfalls that later may become problems.

For instance:

We create a nested menu. Each submenu handles clicks on its elements and calls stopPropagation so that the outer menu won’t trigger.

Later we decide to catch clicks on the whole window, to track users’ behavior (where people click). Some analytic systems do that. Usually the code uses document.addEventListener('click'…) to catch all clicks.

Our analytic won’t work over the area where clicks are stopped by stopPropagation. Sadly, we’ve got a “dead zone”.

There’s usually no real need to prevent the bubbling. A task that seemingly requires that may be solved by other means. 

One of them is to use custom events, we’ll cover them later.

Also we can write our data into the event object in one handler and read it in another one, so we can pass to handlers on parents information about the processing below.


## Capturing
There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.


### Capturing - True or False
There are two possible values of the capture option:

If it’s false (default), then the handler is set on the bubbling phase.
If it’s true, then the handler is set on the capturing phase.

<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>