# Midterm Project Kickoff (Video)

## The Purpose of the Midterm Project

  * Practice what we've already learned
  * Learning how to work with others


## Pick a Project

  * Wiki Map 
  * Quiz App (most data intensive one, lots of databases)
  * Story Creator (shows off personality)
  * Decision Maker (tiny bit of math)
  * PasswordKeepR
  * Smart TODO List (uses a bunch of API's / most jaw-dropping when it works)
  * Resource Wall
  * Buy/Sell Listing Website (could also show off personality)
  * Schoodle (similiar to decision maker app)
  * Food Pick-up Ordering


## Planning the Project

### User Stories

  * Describe how a user will intereact with our app.
  * As a _______, I can _______, because ________.
  * Convert the projects requirements to User Stories.

### Our Apps Requirements -> User Stories (userStories.md)
  * a user can create a poll with multiple choices

    As a user, I can create a poll with multiple choices, because I want to gather opinions from my friends.

  * each choice can have a title and optional description

    As a user, I can add titles and optional descriptions to each choice in the poll, because I want to provide context for each option.

  * the creator must enter an email

    As a creator, I must enter an email when creating a poll, because I need to receive notifications and access administrative features.

  * when a poll is finished being created, the user is given two links: an administrative link (which lets them access the results) and a submission link (which the user sends to their friends)

    As a creator, when I finish creating a poll, I want to receive two links: an administrative link to access the results and a submission link, because I want to be able to access administrative features and I want to be able to share my polls with my friends.

  * the links are also sent to the creator via email (using mailgun)

    As a creator, I want to receive the links to the poll via email because I want easy access and sharing with my friends.

  * when a user visits the submission link, they enter their name if required and see a list of the choices for that poll

    As a user, when I visit the submission link, I want to be able to enter my name if required, because I want to view a list of choices for the poll.

  * the user can rank the choices (by drag and drop, or some other method) and then submits the poll

    As a user, I want to be able to rank the choices in the poll using a drag-and-drop reorder or other method, because I want the creator to see my preferences in my preferred order.
 
  * each time a submission is received, the creator is notified with an email (which includes the administrative link and a link to the results)

    As a user, when I submit my response to a poll, I want the creator to be notified via an email, because I want them to receive my responses.

  * the results are ranked using the Borda Count method: https://en.wikipedia.org/wiki/Borda_count

    As a creator, I want the results of the poll to be ranked using the Borda Count method, because it provides a fair and reliable way to aggregate preferences and determine the overall ranking of choices.

(userStories.md)

## Pick Out the Nouns:

  * Nouns === Resources
  * Nouns are Tables
  * Build the ERD

## Routes to Interact with the Resources (routes.md)

Create endpoints for all the different resources you will use.

- Think about what your app needs to do, you may not need to do all in BREAD.

  * REST (from TinyApp) - Restful Arcitecture
  * REpresentational State Transfer - naming convention

B - GET /users (all users)
R - GET /users/:id (specific user)
E - POST /users/:id
A - POST /users
D - POST /users/:id/delete

(routes.md)


### MVP

  * Minimum Viable Product
  * What features can we effectively show off in 5 minutes?
  * If you're not going to show it, don't build it yet!
  * Project Killer: "Wouldn't it be cool if?" (example: responsive design - if you won't demo that it is responsive, don't make it responsive)


## Wireframe/Mockup - Front End (wireframe.png)

  * Design the front end
  * Anyone on the team can implement the design     

  * It is fine to have multiple pages
  * This is not a web design program, its a web dev program. Feel free to steal design ideas from other websites (can open dev tools and look at their styling)

  * Figma is a good option for a wireframe (figma exports as a .png)


## User Registration and Login
  * Don't do it (don't bother)

  Instead:

```js
// localhost:3000/login/7
app.get('/login/:user_id', (req, res) => {
  // set the cookie (encrypted cookies) OR the one below (not both)
  req.cookies.user_id = req.params.user_id;
  // cookie parser (plain text cookies) OR the one above (not both)
  res.cookie('user_id', req.params.user_id);
  // send the user somewhere
  res.redirect('/home');
});
```

## Tech Choices

  * Back End - node, express, postgres
  * Front End - HTML, CSS, JS, jQuery

  * Get Midterm Skeleton (Midterm Module - Set up GitHub Repo). Use this as a template

  * Use morgan - a logger that console.logs every since incoming request. (Highly encouraged to add it to every express server you have).

  * Use routes to break up your server.js file into smaller, more manageable parts.


## Organizing Your Project

Directories: Their Content:

  - Views: index.js (EJS templates here, bring in stylesheets if needed)

  - Styles: layout.scss and main.scss (SCSS files, if you haven't written SASS yet, look into SCSS. Ignore mix-ins)

  - Routes: users.js (Where our routers file goes. Require express, make router object, add endpoints, function will return the router)

  - Public: scripts (app.js - like we did with Tweeter), styles, vendor

  - Lib: database.js or db.js (just exports dbParams object to the server - our server file will require the lib/db.js)

    * sass-middleware.js file: given to us, review it but don't need to fully understand it. We will NOT be making any changes to this file.

    * db: schema files / sql files

  - Bin: resetdb.js (again review this, but you do not need to understand this file, it resets the database). * We will NOT be making changes tot his file.


## Single Page App vs Multi-Page App

  * not mutually exclusive
  * industry standard is single page applications (like Tweeter)
  * multipage app (like TinyApp)


## Git Collaboration

  * ABSOLUTELY DO NOT CODE ON MAIN BRANCH!!!
  * Work on branches instead

  As a professional dev you will NEVER code on main branch.

  * discuss how your team will merge locally or merge in the cloud (on gitHub using a pull request - this allows other members to review your code before its pushed)

  * Ask a mentor if you do not understand how to merge correctly and make sure your team agrees on one method (local or on Git)


## Splitting Up the Work

  * Vertical: every member is workign on a diff pieve of the stack (ex: one on front-end, one on back-end, on on database)

  * Settle merge conflicts (discuss with your team what to keep/what to get rid of). This will get easier over time. 

  * Horizontal: every member working on the same layer (all on the front end, all on the back end, all on the database)

  * Pair Programming 


## Communication

  * This is so important!