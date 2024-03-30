# Adding Event Listeners 

Your app doesn't automatically listen for events. You have to explicitly tell your app to listen by specifying the event name. Once your app is listening for an event, you can tell it to run some code if that event happens.

Consider the following html:

<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="div-one">Click me!</div>
    <div id="div-two">No! Click Me!</div>
  </body>
</html>


## Event Listeners - Page Interaction
Event listeners can be used to make this page interactive. To set up your app to respond to events:

  1. Add an event listener to a DOM node
  2. Specify which event it should listen for
  3. Add a function that runs when that event happens


addEventListener is a method available to any element/DOM node. It lets you specify the type of event (e.g. click) and a callback function that should be triggered when that event happens.

// creates an event listener for the 'document' node
document.addEventListener("click", () => {
  console.log("You just clicked somewhere on this page.");
});


### Note

In the example above, because the root (document) node is specified, the event is triggered when you click anywhere on the page.


## Only Listen for Clicks on a Specific Node of the Page
Let's say you wanted to only listen for clicks on a specific node of the page (e.g. <div class="div-one"> from the html above):

// specify the DOM node to reference using the document.getElementById method and put that reference in a variable
const div1 = document.getElementById("div-one");

// when div1 is clicked, run the function
div1.addEventListener("click", () => {
  console.log("You clicked on div 1.");
});


### Note
The event will fire only when you click on div-one.

The next example uses a named function instead of an anonymous function:

// create a function
const printMessage = () => {
  console.log("You clicked on div 2.");
});

// put a reference to the "div-two" element in a variable
const div2 = document.getElementById("div-two");

// when div2 is clicked, run the function
div2.addEventListener('click', printMessage);


### Note
The event above will fire only when you click on div-two. Note that in this instance, the function that runs when the div is clicked has a name: printMessage


## Event Object
When an event happens, an object is created that contains all the info about that event. The callback function that you specify can automatically receive that object as a parameter (it's often named event or just 'e' by developers). It is full of useful info!


## Capturing Event Coordinates
Paste the below code into an editor and add to it to capture the X-Y coordinates of a double click event. (Look closely at the event object to find them).

document.addEventListener("dblclick", (event) => {
  console.log(event);
  // your code here
  const xCoordinates = event.clientX;
  const yCoordinates = event.clientY;
  console.log("X Coordinate:", xCoordinate);
  console.log("Y Coordinate:", yCoordiante);
});

