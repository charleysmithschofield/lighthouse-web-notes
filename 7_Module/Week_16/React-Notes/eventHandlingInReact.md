# Event Handling In React

Event handlers are a part of standard HTML, however in HTML the keywords are all lowercase (ex: onclick). In React, when we write JSX, the keywords are camelCase (onClick).

In the example below, onClick is the keyword we use to listen for a click event on the <button>. When the button is clicked, the specified function will run:

function Button() {
  return (
    <button onClick={() => console.log("Button Clicked")}>
      Click me!
    </button>
  );
}

In some cases, we pass a function reference similar to the example below. This technique is useful if our function has multiple lines of code.

! Note that the function reference is passed below - the function isn't actually called (doStuff is passed, not dStuff() with parentheses).

function Button() {
  const doStuff = () => {
    console.log("Do stuff.");
    console.log("Do more stuff.");
    console.log("Do EVEN MORE stuff!");
  };

  return <button onClick={doStuff}>Click me!</button>;
}


## Using the Event Parameter In Callback Functions
In React, the main event handlers we'll play with are onClick, onChange, and onSubmit. 

Those will be triggered when a click, submit, or change event happens in the browser. When any of these events occur, an event object is automatically passed to the function that is invoked. 

You may not necessarily use the event object, but it does have a lot of useful information. 

Here's an example where the x and y screen coordinates are printed to the console when a <div> is clicked.

function MyClickableDiv() {
  return (
    <div onClick={(event) => {
      console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
      }}
    >
    </div>
  );
}

## onClick Event Handler
This event handler will listen to click events on clickable elements, like a button. Using the event parameter will give access to information about the event, like mouse position, timestamp, etc.

## onChange Event Handler
This event handler will listen to change events on input elements, like an input or a textarea element. Using the event parameter will give access to information about the event, like the name of the input and the value that the user typed or selected.

## onSubmit Event Handler
This event handler will listen to submit events on submittable elements, like a form. Using the event parameter will give access to information about the event, like the content of the form, and a method to prevent the default behavior of a form submission.

