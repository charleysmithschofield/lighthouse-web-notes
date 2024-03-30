# DOM - Document Object Model

## DOM
When a page is loaded for users to see, the browser is running a process that creates a Document Object Model (DOM) in memory to represent all the HTML code on that page.

Each HTML element is also called a "Node" or "DOM Node", not to be confused with NodeJS.

This transformation of HTML text into a complete object structure is an important one.

One reason why the browser does this to allow Javascript code to manipulate the web page and respond to user interactions like clicking on a button.


## Introduction
The Document Object Model is an essential park of making websites interactive. It is an interface that allows programming language to manipulate content, structure and style of a website.

JS is the client-side scripting language that connects tot he DOM in an internet browser.

Almost any time a website performs an action such as:

  - rotating between a slideshow of images
  - displaying an error when a user attempts to submit an incomplete form
  - toggling a navigation menu
  
These is the result of JavaScript accessing and manipulating the DOM. 


## What is the DOM?

At the most basic level, a website consists of an HTML document. The browser that you use to view the website is a program that interprets HTML and CSS and renders the style, content, and structure into the page that you see.

In addition to parsing the style and structure of the HTML and CSS, the browser creates a representation of the document known as the Document Object Model. This model allows JavaScript to access the text content and elements of the website document as objects.

JavaScript is an interactive language, and it is easier to understand new concepts by doing. Let’s create a very basic website. 

Create an index.html file and save it this directory (DOM directory).


## The Document Object
The document object is a built-in object that has many properties and methods that we can use to access and modify websites. In order to understand how to work with the DOM, you must understand how objects work in JavaScript. Review Understanding Objects in JavaScript if you don’t feel comfortable with the concept of objects.

In Developer Tools on index.html, move to the Console tab. Type document into the console and press ENTER. You will see that what is output is the same as what you see in the Elements tab.


## What is the Difference Between the DOM and HTML Source Code?

Currently, with this example, it seems that HTML source code and the DOM are the exact same thing. There are two instances in which the browser-generated DOM will be different than HTML source code:

The DOM is modified by client-side JavaScript
The browser automatically fixes errors in the source code.

document is an object, body is a property of that object that we have accessed with dot notation. Submitting document.body to the console outputs the body element and everything inside of it.