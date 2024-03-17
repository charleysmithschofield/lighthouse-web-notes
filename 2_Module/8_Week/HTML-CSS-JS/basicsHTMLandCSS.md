# HTML & CSS - Basic Intros

## Document Object Model (DOM)

Let's start with a high-level overview of how HTML and CSS interact through a tree-like structure called the Document Object Model (DOM).

## HTML
  - language of the web
  - has a specific syntax and rules
  - tag: turns into elements that form a tree (DOM)

  - elements: <tag> anything in between the beginning and ending tag is called "content" </tag>
  
  Tags: 
    - Each tag has a name or type that defines what type of element that will be created.
    - Examples of tags include: paragraphs, image, or document division (block)


## CSS 
  - The styling of an HTML page
  - has a syntax and rules
  - changes how elements look on the page, examples include:

    - text color, size of font, background, orders, positions, etc.


## DOM
  - standard convention for representing and interacting with elements in HTML


# Fundamental HTML Elements

Some of the fundamental HTML elements include:

<html> represents the root of an HTML document.

<head> provides general information (metadata) about the document.
      <title> defines the title of the document, shown in a browser's title bar.
      <link> specifies relationships between the current document and an external resource.

<body> represents the content of an HTML document.

<h1>, <h2>, ... Heading elements implement six levels of document headings.

<p> represends a paragraph of text

<div> Division Element, generic container for flow content.

<ol>, <ul> list of items with, or without numerical ordering.
    <li> represent an item in a list

<a> anchor element; defines a hyperlink to a location or page on the Web

<table> display a data table. Note: note to be used for layout.
    <tr> a table row
    <td> a cell in a table row

Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element 


# Styling with CSS

There are 3 ways to add CSS rules to a page:

  1. Directly to an element.
    ex: <p styple="color: red"> </p>
    
  2. Inline with HTML using a <style> tag. <style> tags usually go inside the <head> tag. 
    ex: <style> p { color: red; } </style>

  3. Linking to a CSS file using a <link> tag. 
    ex: <link rel="stylesheet" type="text/css" href="style.css">
      - rel is the relationship 
      - type is text/css so the browser know what to expect
      - href is the link to the document

      *  Now any document with this link, will follow the rules as described in the style.css sheet


We will focus on the third method, linking a CSS file. You are encouraged to avoid ways 1 and 2. They are generally considered bad practice as they encourage unnecessary coupling of structure (HTML) and style (CSS) code.


# HTML Tutorial for Beginners - Adding CSS to HTML
  - youtube link: https://www.youtube.com/watch?v=Tc4IsPFB01E&t=59s 