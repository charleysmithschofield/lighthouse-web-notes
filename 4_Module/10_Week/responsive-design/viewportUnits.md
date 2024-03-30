# Viewport Units

  - Web Reference: https://web-design-weekly.com/viewport-units-vw-vh-vmin-vmax/ 

The viewport is the total window area rendered by the browser. We can size and position elements based on a percentage system relative the size, height, and width of the browser window. For example, 1vw is 1/100th of the size of the width of the viewport.

Viewport units: vw, vh, vmin, vmax

## Viewport-Percentage Lengths
The viewport units are a new set of units designed for the challenges we face today. One-pagers, full-width grids, typography, and many other things rely on the size of the viewport. Previously, we hacked these challenges using percentages as mentioned earlier, or JavaScript.

This new set of units consists of four different units. Two for each axis, and a minimum and maximum value of the two.

vw: 1/100th viewport width
vh: 1/100th viewport height
vmin: 1/100th of the smallest side
vmax: 1/100th of the largest side


## Caution: One Major Drawback
Imagine you’re building a full-width square grid using these units. I suppose that would look something like this:


    .grid {}
        
    .grid::before,
    .grid::after {
      clear: both;
      content: '';
      display: block;
    }
        
    .grid__item {
      box-sizing: border-box;
      float: left;
      height: 50vw;
      padding: 2em;
      width: 50vw;
    }