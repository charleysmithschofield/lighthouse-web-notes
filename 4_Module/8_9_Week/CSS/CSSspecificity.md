# CSS Specificity

## Specificity

Specificity essentially determines how CSS rules are prioritized when rendering a page.

In cases of contention over an element between multiple CSS selectors, there is an order of precendence that is used to determine which style actually applies. 

This topic is often overlooked and leads to confusion.

  https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/ 


## CSS Spcificity: An Overview
  1. Specificity determine which CSS rule is applied by the browsers.

  2. Specifity is usually the reason why your CSS-rules don't apply to some elements, although you think they should.

  3. Every selector has its place in the specificity hierarchy.

  4. IF two selectors apply tot he same element, the one with higher specifity wins.

  5. There are five distinct categories which define the specificity level of a given selector:
    - inline styles
    - IDs
    - classes
    - attributes
    - elements

  6. You can understand specificity if you love Start Wars: CSS Specificity Wars (https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

  7. When selectors have an equal specificity value, the latest rule is the one that counts.

  8. When selectors have an unequal specificity value, the more specific rule is the one that counts.

  9. When selectors have an unequal specificity value, the more specific rule is the one that counts.

  10. Rules with more specific selectors have a greater specificity.

  11. The last rule defined overrides any previous, conflicting rules.

  12. The embedded style sheet has a greater specificity than other rules.

  13. ID selectors have a higher specificity than attribute selectors.

  14. You should always try to use IDs to increase the specificity.

  15. A class selector beats any number of element selectors.

  16. The universal selector and inherited selectors have a specificity of 0, 0, 0, 0.

  17. You can calculate CSS specificity with CSS Specificity Calculator.


## Specificity Hierarchy
Every selector has its place in the specificity hierarchy. There are four distinct categories which define the specificity level of a given selector:

  1. Inline Sytles (presence of style in document). An inline style lives within your XHTML document. It is attached directly to the element to by styled. 
    ex: <h1 style="color: #fff;">

  2. IDs (# of ID selectors) ID is an identifier for your page elements, such as #div.

  3. Classes, attributes and pseudo-classes (# of class selectors). This group includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.

  4. Elements and pseudo-elements (# of Element (type) selectors). Including for instance :before and :after.


# How to Measure Specificity?

Memorize how to measure specificity:

  1. Start at 0.
  2. Add 1000 for style attribute.
  3. Add 100 for each ID.
  4. Add 10 for each [attribute], class, or pseudo-class.
  5. Add 1 for each element name or pseudo-element.


  You give every id selector ("#whatever") a value of 100, every class selector (".whatever") a value of 10 and every HTML selector ("whatever") a value of 1. Then you add them all up and hey presto, you have the specificity value.

  
Example: body #content .data img:hover

The specificity value of the above example would be 122, let's break it down:

  100 for #content
  10 for .data
  10 for .hover
  1 for body
  1 for img
  total: 122



  