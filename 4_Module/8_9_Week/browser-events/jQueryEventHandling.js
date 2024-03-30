// jQuery - Reading

/* Reasons Why Does jQuery Exist?

  1. Fixes Browser Compatibity Issues.
  2. Cleaner API
*/

/* Reason 1: Fixes Browser Compatibility Issues

For example, if you want to get the height and width of the
browser viewport in pure JJS you have to write code that
looks like this:
*/

const getViewPortWidth = function() {
  let IEDocument = document.documentElement;
  if (window.innerWidth) {
    return window.innerWidth;
  } else if (IEDocument.clientWidth) {
    return IEDocument.clientWidth;
  } else if (IEDocument.getElementsByTagName('body')[0]) {
    return IEDocument.getElementsByTagName('body')[0].clientWidth;
  }
};
const viewportWidth = getViewPortWidth();

/*
  Why the craziness? B/c while most browsers have a function
  called window.innerWidth, Internet Explorer uses
  document.documentElement.clientWidth to return the viewport
  width. If you tried to run window.innerWidth in Internet
  Explorer you would get an error.

  jQuery gives us a handy function that runs something like the
  code above to get the wisdth. So we could replace the whole
  chunk of code with:

    - web reference: https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window#answer-11744120
*/
$(window).width()


/* Reason 2: Cleaner API (Application Programming Interface)

The browser has built-in JS functions to help you write code
that interacts with the page.

For examplem if you have this html:
*/
<html>
  <head>...</head>
  <body>
    <span id="foo">Click me to open an alert!</span>
  </body>
</html>

// You can write this bit of JS to pop up an alert when the user
// clicks the span element
const element = document.getElementById("food");
element.addEventListener("click", funcion() {
  alert("Clicked!");
});

// Working with Document Object Model (DOM) can be a bit painful.
// getElementById & addEventListener are quite the mouthful.

// One of the nice things that jQuery does, is it wraps the native
// functions with a cleaner API. The code above can be replaced with
// the following code in jQuery:

$("#foo").on("click", function() {
  console.log("Foo element clicked.");
});

// It can also be written as:
$("#foo").click(function() {
  console.log("Foo element clicked");
});