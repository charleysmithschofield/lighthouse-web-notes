
# Media Queries
One of the main ways to achieve responsive web elements involves writing CSS that depends on things like screen size and media type.

  - Video Reference: https://www.youtube.com/watch?v=KX94fPaKqaU

  - Web Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
  

Media Queries consist of a media-type 0 or more expressions that check for the conditions of a particular media feature.

The media query is an expression that will either evaluate to true or false. 

  - true: the media-feature will apply
  - false: the media-feature will NOT apply


### media-type

  * screen
  * print
  * handheld
  * tv
  * projector
  * all

### media-feature

  * width
  * height 
  * min-width
  * min-height
  * max-width
  * max-height
  * color
  * monochrome


### How Do We Write a Media Query?
We start with the media type we want to target. Then we separate from the media type by using the word "and" then we put the media features into their own brackets like so (media features).

  Example: media-type and (media-feature)s


### Making a Media Query (CSS Example)

Step: 
  1. Pick a Break point:
    
  If you're using Google Chrome:
  - Open Dev Tools and re-size your window till it becomes "uncomfortable" to read. In the top right corner, you will see the dimensions of the page in px by px.

  Let's say it gets "uncomfortable" at 600 px wide. So we will write a media query with the breakpoint of 600 px.

  2. Write your Media Query:
  - Open your css file for this site
  - Write your media query below the original size

  * Usually you would want to make your width a range, rather than one set value:

        (min-width:400px) and (max-width:800px)

  Media query in CSS file:


    .column {

    float: left:

    padding: 30px;
    
    width: 50%;
    }  

    /* Add Media Query Here*/

    @media all and (max-width: 600px) {
      .column {
        width: 100%;
      }
    }


### Another Way to Make a Media Query (Inline HTML Example)

We can also put media queries inside a <link> tag.

    <link rel="stylesheet" href="small.css" media="(max-width:600px)">


## Which Way is Better?

### 1. Embedded Media Queries in CSS:

This involves writing media queries directly within your CSS file.

  - Organization: Keeping all CSS code in one file can make it easier to manage and maintain.

  - Readability: Embedded media queries can enhance the readability of your CSS, especially if they are closely related to the rules they modify.

  - Reusability: Media queries can be reused across multiple selectors in your CSS file, reducing redundancy.


### 2. Inline HTML
Using inline styles directly within HTML elements can be considered a less preferred approach for responsive design, compared to using external CSS files or embedded media queries within CSS. 

Here's why:

  - Separation of Concerns:

    Inline styles mix content with presentation, voilating the principle of separation of concerns. 

    This can make your HTML file less readable and harder to maintain.

  - Maintenance:

    Making changes to inline styles can be cumbersome, especially if the same style needs to be applied to multiple elemennts.

    With external CSS files or embedded media queries, you can make changes centrally in one location, affecting all elements using that style.

  - Specificity Issues:

    Inline styles have a higher specificity than external or embedded styles, which can lead to conflicts and make it harder to override styles later in the project.

  - Scalability:

    Inline styles don't scale well as your project grows. They can become unwieldly and difficult to manange, espcially complex layouts and styling requirements.


## Media Query - Example 2 (Print)
What if want our page to be printable? You don't want all the extra parts of the web-page to print (ex: navigation bar, advirtisements, etc)

We could do a media query for print. In our CSS file we would just need to add:

        @media print {
          nav, .ad{
            display: none;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        } 

What if we wanted to get rid of everything that is not on screen?

  * the 'not' operator negates the entire query. Where it would normally be true, it will now be false; and vice-versa.

In our CSS file we would change our @media print to:

        @media not screen {
          nav, .ad{
            display: none;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        }


### Using Multiple Media Queries Together

All we have to do is separate our media queries using commas:

        @media not screen, screen and(max-width:400p) {
          nav, .ad{
            @media () {
  
            }        display: none;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        }

So for the media query above we are covering:

  - anything that is not a screen and any screen that has a max-width of 400px.

(the comma asks as a logical "or" so one "or" the other will apply)