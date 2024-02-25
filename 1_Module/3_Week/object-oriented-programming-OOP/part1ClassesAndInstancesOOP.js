// OOP Part 1: Classes & Instances:

/*
  Clases are Blueprints:

    Think about the relationship between a blueprint and the house itself.

    Blueprint:
      The instructions needed to build the house. We can use this to create many more
      houses, each house will be separate from the others but they will all based on
      this same blueprint.

  In OOP, classes are blueprints (templates) that we can use to create 'instances' of
  objects. A class describes what the object is going to be and we can create new
  objects using the class.
*/


// CLASS:

// DECLARING A CLASS:
// To declare a class, you use the class keyword with the neame of the class.

// Example: If you wanted to create a bunch of pizza objects, you would start
// by creating a pizza class:

class Pizza {

}

// We can use any name fro the class but a class name should always be a noun, and
// the first letter should always be capitalized.


// CREATING A CLASS INSTANCE:
// To create a new object from a class (an instance), we use the new keyword:
let pizza1 = new Pizza();
let pizza2 = new Pizza();


// pizza1 and pizza2 are pizza objects. When you create an object using a class, it is
// an instance of that class. So pizza1 and pizza2 are instances of the Pizza class.

// These two objects are both instances of the same class. They were created from the
// same class, but they are completely separate objects. Like two houses made from the
// same blueprint:

pizza1 === pizza2; // false

// Right now there is nothing inside the Pizza class. Our blueprint is blank, so it will
// just create an empty object {}.

// Let's change that: see methodsAndPropertiesOOP.js in this directory.


// // METHODS AND PROPERTIES:

// /*
//   METHODS AND PROPERTIES:

//   Let's update the class so it can allow all pizzas to have toppings. For example,
//   lets add cheese as a topping:
// */
// // class Pizza {

// //   constructor() {
// //     this.toppings = ["cheese"];
// //   }

// //   addTopping(topping) {
// //     this.toppings.push(topping);
// //   }
// // }

// /*
//   Our pizza blueprint is now describing two methods (constructor and addTopping) as
//   well as a property toppings. You can add a method to a class with the following
//   syntax:
// */

// // class SomeClass {
// //   methodName(parameters) {
// //     // this is a method
// //   }
// // }
// // // to add properties to a class, simply use the this keyword followed by the property
// // // name, then assign it a value:

// // class SomeClass {
// //   someMethod() {
// //     this.hello = "hi"; // Created a property called hello
// //   }
// // }

// /*
//   Any pizza object created from this Pizza class with have its own version of these
//   properties and methods. This means we can call the addTopping() method on pizza1
//   without it affectign pizza2.

//   Since a class is just a blueprint for creating objects, methods like addtopping
//   will exist on the instances created from the class, but not the call itself:
// */

// // This will **NOT** work.
// // That's because addTopping is a method only availale to actual instances of Pizza.
// // Give it a try!
// // Pizza.addTopping();


// /*
//   INTRODUCTION TO CONSTRUCTOR:

//     - constructor: a special kind of method that gets executed when an object
//                    instance (object created from a class) is created.
    
//     Everything inside the Pizza's (class) constructor method will get run for
//     the new instance of the class when we call new Pizza();

//     This is a great place to setup default state for new instances (constructor
//     is for setting the default values for any new object's properties).
// */

// // class Pizza {
// //   constructor() {
// //     this.toppings = ["cheese"];
// //   }
// // }

// // We are currently using the Pizza's constructor to setup the toppings array and
// // add "cheese" as the first topping.


// // PRACTICE WITH CREATING INSTANCES AND USING INSTANCE METHODS:

// // Pizza is a class
// class Pizza {

//   // constructor is a method
//   constructor() {
//     // toppings is a property
//     this.toppings = ["cheese"];
//   }

//   // addTopping is another method
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }

//   // removeTopping is another method
//   removeTopping(topping) {
//     const index = this.toppings.indexOf(topping);
//     if (index !== -1) {
//       this.toppings.splice(index, 1);
//     }
//   }
// }

// // PIZZA 1:

// // pizza1 is an instance of the class Pizza
// let pizza1 = new Pizza();
// console.log(pizza1.toppings); // ["cheese"]

// // pizza1 add mushrooms
// pizza1.addTopping("mushrooms");
// console.log(pizza1.toppings); // ["cheese", "mushrooms"]

// // pizza1 add peppers
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// // pizza1 remove peppers
// pizza1.removeTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms"]


// // PIZZA 2:

// // pizza2 is another instance (object created for a class) of the class Pizza
// let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]

// // pizza2 add more cheese
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese", "more cheese"]

// // pizza2 remove more cheese
// pizza2.removeTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese"]



/*
  CUSTOMIZING THE CONSTRUCTOR:

  Every class can have a single constructor method that will get called when an
  instance of that class is created.
  
  The constructor method is the best place to setup any default property values
  for an object.

  Since it's a method, we can also pass in values to the constructor method. This
  allows us to easily setup custom defaul values.

  For example, if we want to be able to specify the pizza's crust type and size
  when it's created we could add these to our Pizza class:
*/

// // Pizza is the class
// class Pizza {

//   // constructor is a method
//   constructor(size, crust) {
//     this.size = size,
//     this.crust = crust,
//     this.toppings = ["cheese"];
//   }

//   // addTopping is another method
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
// }

// // Now every time we use this class to create a new object, we can pass in a
// // size and crust.

// let pizza = new Pizza('large', 'thin');
// console.log(pizza); // Pizza { size: 'large', crust: 'thin', toppings: [ 'cheese' ]}


// UPDATE YOUR PIZZA CLASS TO HAVE OTHER CONSTRUCTOR ARGUMENTS:
// Pizza is the class
class Pizza {

  // constructor is a method
  constructor(size, crust, stuffedCrust) {
    this.size = size,
    this.crust = crust,
    this.stuffedCrust = stuffedCrust,
    this.toppings = ["cheese"];
  }

  // addTopping is another method
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

// Now every time we use this class to create a new object, we can pass in a
// size and crust.

// the 'large' is the size, 'thin' is the crust, and 'true' means the pizza is stuffedCrust.
let pizza = new Pizza('large', 'thin', true);
console.log(pizza); // Pizza { size: 'large', crust: 'thin', stuffedCrust: true, toppings: [ 'cheese' ]}


// PRIMITIVES AS OBJECTS:

// Each primitive in JS (excl. symbols) has a corresponding object constructor.
// Example:

console.log(typeof(true));
// "boolean"

console.log(typeof(Boolean(true)));
// "boolean"

console.log(typeof(new Boolean(true)));
// "object"

/*
  An object constructor can be invoked with the new word new, as seen above.

  Not that when we call object constructors we create new, unitque instances
  of the objects requested.

  When we use the object constructor to create a primitive, we run into issues
  when we try to compare different strings, for instance.

  In the next example we can see that the == (type coercion vulnerable) compar-
  ative returns true, while the === comparative returns false.
*/

const greeting = "Hello, world!";
const objGreeting = new String("Hello, world!");

greeting == objGreeting; // true

greeting === objGreeting; // false

/*
  We see that above despite the string having the same content, the primitive string
  is not the exact same as an object string.

  However, using == allows JS to convert one of them so that their types match.

  To avoid these kinds of issues, it's generally considered bad practice to use
  object constructors when you're creating primitives, but object constructors
  are extremely useful for instantiaing the complex objets you'll be defining
  wiht your calsses in the future.

  Primitives As Objects Stretch Reading: https://web.compass.lighthouselabs.ca/ea6df177-5ab1-4987-87f0-fa7753ffe65e
*/

/*
  CONCLUSION:

  You learned how to use classes as a way of simplifying the creation of objects
  that share the same set of behaviour and properties.

  You also became familiar with:

    - Class syntax
    - The purpose of the 'new' keyword and the concept of constructor functions
    - The difference between classes and instances
        - Classes: 
          - blueprint / template for creating objects.
          - defines properties and behaviors

        - Instance: 
          - object created from a class
          - has its own set of properties
          - can perform behaviors defines in the class.
    - How we are able to create new object instances with and without class.
          - Example with Class:
              class Person(name, age) { // says class instead of function.
                constructor(name, age) {
                this.name = name;
                this.age = age;
                }
              }
              // Instantiate object
              const person1 = new Person('Charley', 27)

          - Example without Class:
              function Person(name, age) { // says function instead of class
                this.name = name;
                this.age = age;
              }
              // Instantiate object
              const person1 = new Person('Charley', 27)