# Responsive Design

  - Web Reference: https://web.dev/learn/design/ui-patterns/ 

## Overflow Pattern
One solution to space-saving is to keep links on one like but truncate (shorten/cut off) the list at the endge of the screen. Users can swipe horizontally to reveal the links that aren't immediately visible.

This is the overflow pattern.

  Pro/Con:
    - Pro: this technique scales to any device and any can have any number of links.

    - Con: the user might miss links that aren't initially visible. 

  Tip: 
    - If you use this design make sure the first few links are the most important.
    - Make sure the button that toggles the display of navigation links is labeled. Don't rely on an icon to be recognized.

## Carousels
Another solution is the carousel. It cna look quite neat, but there's a good chance that your users will never discover the hidden content. 


  - Pro: 
    - Carousels are better at solving organizational problems.
    - When space is at a premium, carousels can prevent a page getting too long and cluttered.

For narrow screens, display items in a row using flexbox. The row of items will extend beyond the edge of the screen.

    overflow-x: auto

    @media (max-width: 50em) {
      .cards {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        scroll-snap-type: inline mandatory;
        scroll-behavior: smooth;
      }
      .cards .card {
        flex-shrink: 0;
        flex-basis: 15em;
        scroll-snap-align: start;
      }
    }

The scroll-snap properties emsure that the items can be swiper in a way that feels smooth. Thanks to scroll-snap-type: inline mandatory, the items snap into place.

When the screen is large enough—wider than 50em in this case—switch over to grid and display the items in rows and columns, without hiding anything.

    @media (min-width: 50em) {
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
      }
    }


# Data Tables
The table element is perfect for structuring tabular data; rows and columns of related information. But if the table gets too large, it could break your small-screen layout.

You can apply the overflow pattern to tables. In this example, the table is wrapped in a div with a class of table-container.

    .table-container {
      max-inline-size: 100%;
      overflow-x: auto;
      scroll-snap-type: inline mandatory;
      scroll-behavior: smooth;
    }
    .table-container th, 
    .table-container td {
      scroll-snap-align: start;
      padding: var(--metric-box-spacing);
    }


## A Few Notes on Design
Your job as a developer is to implement the individual layouts using media queries to separate out the various CSS rules that apply to each one.

Even though the decisions of which responsive design patterns to use are in the realm of design, which is outside the scope of this code-oriented walkthrough, there are two concepts that you should understand as a developer:

  * A "fluid" layout is one that stretches and shrinks to fill the width of the screen.

  * A "fixed-width" layout is the opposite: it has the same width regardless of the screen dimensions.

** See choosingBreakpoints.css for more info **