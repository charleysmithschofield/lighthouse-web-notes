// // OOP Part 3: Super

// /*
//   This reading introduces you to a common need developers have to further
//   share code between classes when using inheritance.

//   The solution involves getting introduces to another special keyword often
//   found in OOP languages: super

//   Instead of starting by introducin the solutions, first we encounter the
//   need for them using our Person and Student example clases.
// */

// /*
//   ## Method Overriding and Super

//   The problem: sometimes you want a subclass to have similar but slightly
//   different behaviour to its superclass. In our scenario, what if we want
//   all mentor bios to start with "I'm a mentor at Lighthouse Labs." before
//   saying the "My name is.." bit?
// */

// // ## Solution Part 1: Method Override

// // A simple way to solve it is to simply override the bio method in the
// // subclass, like this:

// // Superclass
// class Person {
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// // Subclass
// class Mentor extends Person {
//   // Completely re-define the bio method since it has more to say
//   bio() {
//     return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// // The Student class doesn't need to define bio since it can just use the one from Person

// // DRIVER CODE

// const bob = new Mentor('Bob Ross', 'I like mountains way too much');
// console.log(bob.bio());

/*
  When a subclass implements a method that already exists in the superclass,
  it is call method overriding.

  This is b/c it is indeed overriding the superclass's method. In this case,
  if we call bio on a mentor object, the subclass's version of the method
  will get executed instead of the one on the superclass.

  While this is a step in the right direction, it isn't ideal b/c we are re-
  peating logic to display "My name is ${this.name} and here's my quirky
  fact: ${this.quirkyFact}" in both classes.

  How do we DRY this up?

  Use super!
*/

// ## Solution Part 2: Use super!

// // Super class
// class Person {
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// class Mentor extends Person {
//   // Mentor bios need to include a bit more info
//   bio() {
//     return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
//   }
// }

// // DRIVER CODE

// const bob = new Mentor('Bob Ross', 'I like mountains way too much');
// console.log(bob.bio());

// Using super allows us to access the superclass, plain and simple.


// Exercise: your turn, make the Student class's bio start with:
// "I'm a student at Lighthouse Labs (aka Labber)." before continuing on
// with the rest of their bio sentence.

// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());

const charley = new Student('Charley Smith-Schofield', 'I like ice cream too much');
console.log(charley.bio());


/*
  ## CONCLUSION:

  In this activity, we explored two new concepts:

  1. Overriding methods in subclasses to change their behaviour. Sometimes this
     is all you need, but other times we end up repeating some things int he over-
     ride methods.

  2. Using super in the overriding methods in order to avoid repeating code that's
     already present in the superclass.
*/