# What is a Template Engine

## Introduce
In the TinyApp & Express Setup exercise we just completed, we mixed JavaScript code with HTML markup. This worked well enough for testing purposes, but it would quickly become an unmanageable mess if we built our whol app that way, because real (and useful) web pages need a lot more HTML.

Enter Templates!

Templates are files that define the presentation of a web app's data separately from the server logic. 

In the context of TinyApp, that means they'll define the HTML of a particular page separately from the logic in the Express server.

## Why Are Templates Helpful?
For several reasons, such as:
  
  - Keeping server logic (in this case JavaScript) separate from markup (HTML), making it easier to modify or debug one without affecting the other.

  - Separating different parts of an HTML document into different files, helping keep the length of HTML files short and manageable.

## Template Engines:
In order to use template files, a template engine is also needed. The template engine replaces variable in a template file with actual data, and transforms the template into an HTML file sent to the client (that is, the browser).

There are a variety of template engines to choose from. You might have even heard of some popular ones like Mustache, Handlebars, Nunjucks, or Pug.

For TinyApp, we'll be using Embedded JavaScript (EJS)

## Conclusion:
In the next exercise you will implement your first template, but first you'll need to get familiar with how that works.




The syntax for includes has changed in the latest version of EJS. We'll be using: <%- include('partials/_header') %> instead of what is recommended in the tutorial.