# IDs vs Classes

When should you use an ID (to uniquely identify) vs a Class (to generally classify) an element?

## Reading
We know that ids are used to identify unique elements on a page, and classes are used to identify elements of the same type.

We target elements by ID from CSS using a selector with a hashtag prefix: #buy-now-main-btn. We only expect to find 0 or 1 elements that match this selector. An element can only have one ID, but it can have many classes.

We target elements by class using a selector with a period/dot prefix: .nav-item. We expect to find 0 to n elements that match this selector, and these elements can occur anywhere.

## Multiple Classes
An element can have 0 to n classes.

Clases imply stylistic or behavioral properties about an element.

For instance, <nav class="secondary disabled"> describes a navigational element that is secondary and for whatever reason is also disabled at this time.

secondary could bring with it certain styles, perhaps the navigation is smaller/less prominenet compared tot he primary nav. The disabled class may also affect its style by making it appear grayed out, and it may also attached JavaScript behavior such as not allowing the user to expand or click links within the nav.

## Use Classes Most of the Time

As a general rule, classes should be used much more frequently than IDs.

### So When Do I Use IDs?

  IDs may be used when you have a unique element such as a call to action that is styled and/or behaves very differently than other elements on a page or website.

  IDs also need be used when you need to reference them from the URL using the anchor hash value (also called the page fragment).

    Ex: http://yourdomain.com#comments will jump to the element with ID comments. 

## But Using IDs is More Performant

Some developers will argue that browsers can work much faster when targeting elements by ID, and we should therefore use IDs liberally.

This performance difference makes sense since the browser has only one element to search for and can stop the search once it finds the first instance.

While this performance difference is important to know about, it is not a carte blanche argument for structuring our code a certain way.

Often times prioritizing performance can in fact be at odds with writing clean, modular code and thus more maintainable code. This is one such example.

## Use Neither Unless Necessary

### So should I use classes liberally, effectively classifying everything on a page?

If you don't need them, don't use them!

In fact, before assigning a class or an id to an element, ask yourself what you would have to do if you did not specify the class.

You can ALWAYS target ANY element without giving it a class or an ID.

By taking advantage of nesting, tag names, and pseudo-classes, we can craft a CSS selector to target any possibly element. However, if the CSS selector that will need to be written in order to accurately target the element is too verbose, then you should considered classifying the element.


## Video Reference: Classes vs ID's HTML

  - https://www.youtube.com/watch?v=9UNmumTYuq8&t=9s 

### What are ID's and Classes?
 
  - ID: a unique identifier, used once on a page.
  - Class: an identifier of an element which can be used multiple times on a page.
    ex: Comment (when there are multiple comments)

  - BOTH: are used for JS and CSS

### 
