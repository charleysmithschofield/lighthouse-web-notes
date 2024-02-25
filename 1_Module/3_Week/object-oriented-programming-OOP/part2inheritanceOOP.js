// // INTRODUCTION TO INHERITANCE:

// // As we start to create different types of objects, inevitably we start to notice
// // some code duplication.

// // Duplication Example Problem:

// class Student {

//   // this constructor is identical to that of a mentor!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // here is a method that is specific to students
//   enroll(cohort) {
//     this.cohort = cohort;
//   }

//   // identical! Smells of code duplication!
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// class Mentor {
//   // this constructor is identical to that of a student!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // specific to mentor:
//   goOffShift() {
//     this.onShift = false;
//   }

//   // identical! Smells of code duplication
//   bio() {
//     return `My name is ${this.name} and here's my quirky face: ${this.quirkyFact}`;
//   }
// }

/*
  In the above example Student and Mentor classes have identical constructor and bio
  methods. They also share some properties (name and quirkyFact) but not all of them.

  We have two classes that share the same behaviour and state info.
*/

/*
  A SOLUTION WITH INHERITANCE:

  We could remove this duplication by moving the shared code from two classes into
  yet another class.

  - Inheritance: an technique in OOP when we build a new class based on an existing
                 class. It will contain all the similar code to prevent duplication.
*/

// // This class represents all that is common between Student and Mentor:
// class Person {
//   // moved here b/c it was identical
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // mooved here b/c it was identical
//   bio() {
//     return `My name is ${this.name} and here's my quirky face: ${this.quirkyFact}`;
//   }
// }

// class Student extends Person {
//   // stays in Student class since it's specific to students only
//   enroll(cohort) {
//     this.cohort = cohort;
//   }
// }
      
// class Mentor extends Person {
//   // specific to mentors
//   goOnShift() {
//     this.onShift = false;
//   }
// }

/*
  Now there is general Person class that contains the shared code.

  Studen and Mentor inherit behaviour and state info from Person using the keyword
  extends. They also have their own code that reflects behaviour and info only per-
  taining to themselves.

  Student and Mentor are subclasses of the Person class, since they are 'extensions'
  of that class.

  Person is the superclass in this relationship.
*/

/*
  PLAYING WITH INHERITANCE:

  Change your version of the Person class so it contains another method.
    - Can this method be called on in each of the two subclasses?

  Change the constructor for Person by adding a new field to it (like email).
    - How does this change the subclasses?
*/

// This class represents all that is common between Student and Mentor:
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, dateOfBirth) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.dateOfBirth = dateOfBirth; // new method
  }

  // mooved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky face: ${this.quirkyFact}, and my birthday is ${this.dateOfBirth}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}
      
class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = false;
  }
}

// Create instances of Person, Student and Mentor:
const person = new Person("Coral", "I am a triplet", "Sept 12th, 1990");
const student = new Student("Charley", "I am a DM in D&D", "February 16th, 1996");
const mentor = new Mentor("Kira", "I birthed the worlds cutest baby", "January 11th, 1992");

// Log the classes:
console.log(person);
console.log(student);
console.log(mentor);


/*
Conclusion
In this section you:

  - Learned about using inheritance to reduce duplicate code
  - Became familiar with how to create a subclass of another class using the
    extends keyword.
      - this gives the subclass all the state and behavior of the class it inherits from:
        (its superclass)
*/
