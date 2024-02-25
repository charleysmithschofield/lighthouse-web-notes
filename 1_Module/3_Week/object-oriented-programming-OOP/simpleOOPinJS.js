// // Simple OOP in JS:


// // REVIEW OF SIMPLE OOP IN JS:

// // In JS, variables look like this:
// const dogSound = "woof";
// let dogBreed = "shih tzu";

// // functions look like this:
// function speak() {
//   console.log(`${dogBreed} says ${dogSound}`);
// };

// // objects look like this:
// const dog = {
//   sound: "woof",
//   dogBreed: "shih tzu",
//   speak: function() {
//     console.log(`${dogBreed} says ${dogSound}`);
//   }
// };

// /*
//   In OOP, we use objects to group related variable and functions together.

//   This keeps code more organized. If we have difference pieces of code that all
//   relate to a dog, let's put them in a dog object.
// */


// // TERMINOLOGY:
// // An object is a collection of key-value pairs known as properties.
// const dog = {
//   sound: "woof", // property
//   breed: "shih tzu" // property
// };

// /*
//   Object state: an object (a little bundle of info).

//   Each property that an object has, can represent the state of the object.
  
//   This object's state: sound is "woof" and its breed is "shih tzu".
// */

// // When a property's value is a function, it's called a method:
// const dog = {
//   sound: "woof", // Property
//   breed: "shih tzu", // Property
//   speak: function() { // Method
//     console.log(`${this.dogBreed} says ${this.dogSound}`);
//   }
// };

/*
  Object Method: functions when they're tied to an object (allows objects to do
    stuff, which is known as behavior).

  Some methods might modify the obejct, some might ask the object for info, etc.

  This object's method: speak() that logs some stuff to the console. This is the
  dog's (object) behavior.
*/

/*
  'this':

  We've used 'this' within a line of code as if it were a variable, but it's actually
  a keyword, like for or function.

  It has it's own special functionality, 'this' in JS, means nothing w/o context.

  The value of 'this' is determined at the time of the call, and depends on how and
  where it was called.

  All we need to know for OO in JS, is that when you use 'this' inside a method,
  'this' refers to the object that the method was called on.

  See our example below this paragraph:
*/

// const dog = {
//   sound: "woof",
// };

// function speak() {
//   console.log(dog.sound);
// };

// speak();

// speak() is logging out the sound property from the dog object.

// const dog = {
//   sound: "woof",
//   speak: function() {
//     console.log(this.sound);
//   }
// };
// dog.speak();

/*
  dog.speak() is still logging out the sound property from the dog object however,
  because speak is now a method of the dog object, 'this' refers to dog.

  In this case, 'this' and dog are the same.
*/

const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log('dog === this');
    }
    this.speak();
  }
};

dog.teachMeSomething();

/* Conclusion:

  In context of objection orientation:

  - state: is the information of the object
  - methods (functions tied to objects aka behavior): what the object can do
    * some methods might modify the object some might ask for the objects info, etc.

  OO bundles (groups) together related state and logic into an object, that can
  be passed around as a single entity.
*/