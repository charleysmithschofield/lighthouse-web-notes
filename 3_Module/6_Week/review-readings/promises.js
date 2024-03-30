// Promises - Video Review

/*
  Course Introduction:

  - video reference: https://www.youtube.com/watch?v=FN5Qi2GnyxM

  There are many methods to handle asynchronous work already however promises
  are the recommended option because they:
 
    - gives you flexiblility
    - intuitive syntax
    - error handling

  
  We will be using promises to request real JSON data from about exoplanets.
  This data comes from NASA and Caltech.


  Summary:

    In JS, now all code executes synchronously. Some lines ar code are asynch-
    ronous, which means we don't know when they are going to finish executing.
    The recommended way of handling this is Promises in Javascript.
*/



/*
  Callbacks vs Promises:

   - video reference: https://www.youtube.com/watch?v=9nwPenviboM

    "The Promise object is used for deferred and asynchronous computations."


  What is asynchronous work?
    - Async works happens at an unkown of unpredictable time.
    - You should assume you have no idea when asynch operations will complete.

  Examples of asynchronous code include any code that relies on these :
    - Networks
    - Events
    - Threads
    - Unknown Finishing Times
  
  What is the best way to handle asynchronous code?

    Promises.
*/

// Summary:
// synchronous code - we know exactly the order in which it will be executed, example:
const planetName = 'Keppler22';
console.log(planetName); // Kepler22


// async code, we don;t knwo when it will finish. Any code that relies on
// networks requets, events, threads, or unknown time is asynchronous. ex:
const file1 = get('file1.json');
const file2 = get('file2.json');

console.log(file1);
console.log(file2);


/*
  Callbacks vs Thens:

    - video reference: https://www.youtube.com/watch?v=RR0MoEoHb9U


  Callbacks are the default JS technique for asynchronous work. Pass a function
  to another function and then call the callback function at a later time when
  some conditions have been met.

  This works well but there are some questions without obvious answers:

    1. How do you handle errors?
    2. How do you create a sequence of work?
    3. How do you avoid callback hell?

    This will be touched on outside of this video review.
*/

// Summary
// By default Javascript uses callbacks to handle asynchronous work. This is
// when you parse a function into another function as an argument.

// Using callbacks, it is hard to handle errors. It also becomes harder to
// follow the sequence. Take a look at the example code snippets below.

function loadImage(src, parent, callback) {
  let img = document.createElement('img');
  img.src = src;
  img.onload = callback;
  parent.appendChild(img);
}

// Callback hell (functions calling callbacks, containing callbacks)
// Hard to read, hard to debug (GROSS)

loadImage('above-the-fold.jpg', imgContainer, function() {
  loadImage('just-below-the-fold.jpg', imgContainer2, function() {
    loadImage('farther-down-the-fold.jpg', imgContainer3, function() {
      loadImage('abstract-art.jpg', imgContainer4, function() {
        loadImage('last-one.jpg', imgContainer5);
      });
    });
  });
});

// Same code as about but With Promises, it becomes a lot easier to read.

const sequence = get('example.json')
  .then(doSomething)
  .then(doSomethingElse);


/*
  Course Map

    - video reference:

    Watch this video which introduces the four stages and states of Promises.

  Summary:
    There are four stages in creating Promises:

      1. Wrapping (syntax, or the Promise structure)
      2. Thening (when it works)
      3. Catching (recovery, when there's an error)
      4. Chaining (where you create long sequences of asynchronous work)

    And, there are four states of a Promise:

      1. Fulfilled (aka Resolved, which means it worked!)
      2. Rejected (aka Failed, which means it didn't work)
      3. Pending (which means it has not yet fulfilled or rejected, aka still waiting...)
      4. Settled (something happened, which means the promise has either fulfilled or rejected)
*/


/*
  Promise Timeline:

    - video reference: https://www.youtube.com/watch?v=SCuo55DgIwk

  Imagine a situation where your setting an event listener after your event
  has already fired. What happens? It will not execute because if the event
  doesn't fire again, the event listener never gets called.

  Now imagine you are using Promises and you set an action to occur when the
  Promise resolves after the promise has already resolved. What happens? It
  will execute.


   - A promise can only resolve once.
   - Promises execute in the main thread, meaning they are still potentially
     blocking.
   - Promises are a technique for deciding what will happen when an arync
     task settles.
   - Promises are try/catch wrappers around async work.

  Summary
    Promises execute in the main thread, meaning they are still potentially
    blocking (see example below)
*/
new Promise(function(resolve, reject) {
  resolve('hi'); // works
  reject('bye'); // can't happen a second time
});


/*
  Syntax:

    - video reference: https://www.youtube.com/watch?v=ikoar93RWe4&t=1s

  Wrapping:
    Promises are a try/catch wrapper around code that will finish at an unpred-
    ictable time.

    - Promise is a constructor, you can either store a promise as a variable,
      or you can simply work on it as soon as it is created.
  

  Example below:
*/
// Summary:

// A function it passed to the Promise, the function has two arguments which
// are the resolve and reject callbacks
new Promise(function(resolve, reject) {
  const value = doSomething();
  // doSomething worked so the promise calls the resolve callback
  if (thingWorked) {
    resolve(value);
    // doSomething didn't work, aka went wrong, so the promise calls the reject callback
  } else if (somethingWentWrong) {
    reject();
  }
})
  .then(function(value) {
  //success
    return nextThing(value);
  })
  .catch(rejectFunction);


// Second example:
new Promise(function(resolve, reject) {
  let img = document.createElement('img');
  img.src = src;
  // if the image loads, the promise is fulfilled, resolve is executed
  img.onload = resolve;
  // if the image doesn't load, the promise is rejeced, reject is executed
  img.onerror = reject;
  document.body.appendChild(img);
})
  .then(finishLoading)
  .catch(showAlternateImage);


/*
  Web Technologies:

    - video reference: https://www.youtube.com/watch?v=yzIpks4kTI4&t=2s

  Summary
    Since 2015, native promises have been available to use in most modern web
    browsers. Before that, they were not available natively in the browser.
    Libraries like JQuery tried to solve these by their own version of
    Promises.

    This is why you could use something like .then in jquery.

  Note
    Fetch API uses native Javascript Promises.

    Can you think of other libraries that may have tried to solve some
    problems that come with callbacks?

    You may use a few of those in your journey ahead! Javascript has since
    evolved imensely and continues to.

    Keep in mind that there are new APIs (or Javascript features) that keep
    being introduced in each new version of ES20.
*/

/*
  Error Handling Strategies:

    - video reference: https://www.youtube.com/watch?v=N1GK3oSo6xY
*/

// Summary
// Here are two ways to handle errors:

// Using a .catch
get('example.json')
   .then(resolveFunc)
   .catch(rejectFunc) // .catch is just short for .then(undefined, rejectFunc)

// Chaining a second .then to handle the error
get('example.json')
   .then(resolveFunc)
   .then(undefined, rejectFunc)
   
// Note
// You can’t call both the resolve and the reject function in the same .then