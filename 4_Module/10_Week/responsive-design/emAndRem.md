# Em and Rem

  - Web Reference: https://web.archive.org/web/20220207012120/https://www.futurehosting.com/blog/web-design-basics-rem-vs-em-vs-px-sizing-elements-in-css/ 

The em and rem measurements offer an alternative to using px to size elements and type on the page. 


  * em units: 
  
    are sized relative to its parent element
  
  * rem, or root em: 
  
    are sized relative to the font size of the root element - usually, this is the <html> element.


## What Do Pixels, Ems, and Rems Have In Common?
Each is a unit of length used to define the size of elements on a webpage. You can use them across the board on divs, margins, padding, etc.


## When to Use Pixels
Pixels (px) in CSS do not mean the same thing as pixels on your monitor.

Pixels are:

  * Absolute: meaning they are the same size regardless of the size of anything else. 

  * In practive they aren't the same length everywhere b/c different devices treat them differently, but on each device a pixel is always the same.

  * EX: 16px on your laptop is not the same as 16px on your iPad. Pixels are Absolute but not consistent.


## When to Use Ems
Ems are a relative measure of length. The size of an em is relative to the font-size of the parent element.

Ems are:

  * EX: If you have a <div> with the font size of 16px, and the <p> element inside that div with a font-size of 2em, the font-size of text in the <p> will be 32px

  * EX: If you set it to 0.5px, the font size will be 8px.

  * Lets you change the absolute size of elements like the font size w/o changing their size relative to each other.


## When to Use Rems
Ems have a problem, b/c everything is sized relative to its parent element. The meaning of an em changes as elements are nested.

  * EX: A <div> with a font-size of 22px containing a <p> with a font-size of 0.5em but add a <blockquote> inside the <p> with a font of 0.5em too. The result might not be what we want

  The font-size in the <p> will be equal to 11px, but the font-size in the <blockquote> would be half of that again.

  * Rems, root ems, are always relative to the font-size of the <html> element. 