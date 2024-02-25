// Start Here with Promises:

/*
  Callback Review and Chaining - Video Notes:

  - video: https://vimeo.com/740450699/7c19c0b74a

  1. Why do we want to use callbacks?
     - We want some modularity and reusability.
     - When we deal with async code we want to ensure we are in the correct scope
       when we receive our data.
*/

// Modularity:

// const forEach = (array, action) => {
//   for (const element of array) {
//     action(element);
//   }
// };

// const logThatElement = (element) => console.log(element);

// const logThatElementButFancy = (element) => console.log("🔥🔥 " + element + " 🔥🔥");


// const someArray = [1, 2, 3, 4, 5];
// forEach(someArray, logThatElement);
// forEach(someArray, logThatElementButFancy);



// Callback Chaining:
// Callback chaining allows you to have nested functions that can feed results to
// each other.


/*
  Summary:

  We use callbacks when we are writing asynchronous code, but it also helps with
  modularity. We know that callback chaining means writing nested callback funct-
  ions.
*/

/*
  Error Handling - Video Notes:
  
  - video: https://vimeo.com/740451201/d22d8fc915

  When we write code, we may come across errors. Those errors can also stop the
  execution of your code entirely.

*/

// When you run this we get an error (because the const should be a let):
// const someName = "Mike";

// someName = "Bethany";

// console.log(someName);

// We can use a try-catch block to help us handle errors by letting us try something,
// and if that doesn't work it will throw an error that will be caught:

// const someName = "Mike";

// try{
//   someName = "Bethany";
// }
// catch(error) {
//   console.log("there was some error");
// }
// console.log(someName);

// When we run this code we can see that it still says "Mike"
// We can fix the problem by fixing it with a let then running it again to see
// if it has been changed to "Bethany".


// If we wanted to see the specific error message, rather than just logging
// "there was some error" we could log it with the error name.

// const someName = "Mike";

// try{
//   someName = "Bethany";
// }
// catch(error) {
//   console.log("there was some error", error.name);
// }
// console.log(someName);

// This will now tell us that we have a typeError, and that it is still showing
// Mike. We would then reassign someName as a 'let' instead of a 'const'

/*
We saw why it’s the responsibility of your code to handle errors - so that your
code can execute. We now know how we can use try-catch blocks to handle errors
and use the error object in your code.
*/

/*
  Promises:

    It’s time for Promises! We’ve reviewed callbacks and error handling to illustrate
    why Promises are useful to us.

    In this video, we’ll visualize the mental model for Promises by our analogy of
    cooking pasta with tomato sauce!

  Tip:
    A common use of Promises is when we want to run network requests to fetch data
    from APIs (e.g info about weather). We use .then, .catch, and .finally for when
    our Promise is fulfilled and for error handling.
*/

const boilWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Oven broke");
  });
};

const putThePastaInWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Pasta fell on the floor");
  });
};

boilWater()
  .then(() => console.log(putThePastaInWater))
  .then(() => console.log("Pasta Boiling was a success"))
  .catch((error) => console.log(error));