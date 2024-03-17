// Promises - Intro:

/*
  Expectations About Promises:

  While note being an overly complicated subject, introducing promises is not
  trivial. It is an abstract concept that solves multiple challenges.

  Don't assume a few videos, or even a few hours of practice will make you fully
  comfortable with their implementation, nor their value proposition.
*/

/*
  Official Definition:

    - promise:
      A promise represents the eventual result of an asynchronous operation.
      The primary way of interaction with a promise is through its then method,
      which registers callbacks to receive either a promise’s eventual value or
      the reason why the promise cannot be fulfilled.

  Promises are:

    - objects
    - do not reply on anything other than basic JS
    - as of ES6, JS has promises suported natively in its code. In other words,
      they are built into the language (via Promise)
*/

/*
  Recap on Promises & Callback Hell:

  A promise is an object which represents a (usually asynchronous) task that will
  execute and the end result of said task (fulfilled or rejected). We can add call-
  backs to it in order to handle these end results.

  What's cool about promises is that we can chain them, turning callback hell into
  manageable / readable control flow.

  */
 
// Promises allow us to turn code like this:
// clepto.js
gotoTheirHouse(billy, () => {
  pretendToBeFriends(billy, () => {
    stealWhenNotLooking(billy.mixtapes, (items) => {
      hideInBackpack(items, () => {
        console.log("I don't feel well. I gotta go home now Billy!");
      });
    });
  });
});

// Into this:
// clepto_promises.js
gotoTheirHouse(billy)
  .then(pretendToBeFriends)
  .then(stealWhenNotLooking)
  .then(hideInBackpack)
  .then(() => {
    console.log("I don't feel well. I gotta go home now Billy!");
  });

/*
  We can see one is much more readable as the async tasks are less nested.

  We've transformed the "callback hell" that comes from doing async tasks one
  after another, into seemingly synchronous code.
*/

/*
  There's More To Promises:

  There's more to promises than just avoiding nested callbacks, such as:

    - error handling becomes much simpler
    - promises make async code easier to unit test
    - Promis.all can be run multiple async operations in parallel and have a single
      callback to see all the results together (reference video: https://www.youtube.com/watch?v=2d7s3spWAzo)
    - and more...
*/