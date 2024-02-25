// OOP Part 4: Getters and Setters

/*
  This activity will introduce you to a convenient feature available in most classed-based
  OOP languages:

    Methods:
    - getter
    - setter

  In many cases, this feature allows us to write more idiomatic OOP code.

    idiomatic: writing code in a way that is natural and costumary for the language being used.
*/

// Copy your Pizza code from Part 1 in order to follow along with the code in this reading:

// class Pizza {

//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = ["cheese"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }

//   setSize(size) {
//     this.size = size;
//   }
//   getSize() {
//     return this.size;
//   }
// }

// // DRIVER CODE
// const pizza = new Pizza();
// pizza.setSize('m');
// pizza.getSize(); // m


/*
  This might seem kind of pointless. Why don't we just acces pizza.size
  directly?

  There are many reasons you might want to use getters and setters in
  you app.

    Reasons include:
    1. Validating data before assigning it to a property.
    2. Computing a value on the fly instead of simply pulling it out of
       a property.
*/

/*
  ## Validating Data:

  If our pizzas can only have one of the following sizes: 's', 'm', 'l',
  then it would be bad if someone set the side of their piza to '🤗'.

  Using a setter method instead of setting the size property directly, we
  can have the object validate teh value before it gets set.
*/
// class Pizza {

//   // code from part 1
//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = ["cheese"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
//   // setSize now includes data validation
//   setSize(size) {
//     if (size === 's' || size === 'm' || size === 'l') {
//       this.size = size;
//     }
//     // else we could throw an error, return false, etc.
//     // We choose here to ignore all other values!
//   }
// }

// // DRIVER CODE
// const pizza = new Pizza();
// pizza.setSize('s');

/*
  ## Computed Value:

  We coudl create a property to keep track of the price of a pizza. Every time the size of
  toppings change, we could just update the price property.

  But that involves constantly keeping track of the prixe. It would be easier to just compute
  the price of the pizza when it is needed.
*/

// class Pizza {

//   // code from part 1
//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = ["cheese"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
//   // setSize now includes data validation
//   setSize(size) {
//     if (size === 's' || size === 'm' || size === 'l') {
//       this.size = size;
//     }
//     // else we could throw an error, return false, etc.
//     // We choose here to ignore all other values!

//     getPrice() {
//       const basePrice = 10;
//       const toppingPrice = 2;
//       return basePrice + (this.toppings.length * toppingPrice);
//     }
//   }
// }

// // DRIVER CODE
// const pizza = new Pizza();
// pizza.setSize('s');

/*
  A better way! get and set:

  Since the need for getters and setters is a very common use case in OOP, JS classed have
  special get and set keywords that we can use to implement getters and setters more easily.

  However, in order to make this work properly, we'll have to make srue we change the property
  we store the size into a different name from the setter.

  Otherwise we'll end up in an infinite loop where the setter calls this.size which then calls
  the setter...
*/

class Pizza {

  // code from part 1
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  // setSize now includes data validation
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
  }
  // else we could throw an error, return false, etc.
  // We choose here to ignore all other values!

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('s');

/*
  The only new things here are the get and set keywords in from of the getter and setter
  methods.

  The main difference we get from using these is that the price and size will now be
  accessed as if they were value properties instead of method properties. This gives
  us a slightly nicer interface:
*/

let pizza = new Pizza();

pizza.price; // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)

/*
  Is it a function or a value? It's both!

  This may seem confusing at first b/c price and size are defined as functions, not values.
  Behind the scenes, The get and set syntax binds an object's property to a function that
  will be called when that value is looked up.

  Although not needed, often times it's nice to create an interface to a class's properties
  like this, where a method appears as a value.

  It creates a more simple interface that you or other method appears as a value. 
  It creates a more simple interface that you or other devs are exposed to. 
  Not all getter and setter methods have to be defined this way, though, and it really depends
  on our needs.
*/

/*
  ## Conclusion:

  In this activity, we explored the concept of getters and setters and how to use the get and
  set keywords in KS.

  Setters: allow us to validate data before assigning it to a property.
  Getters: allow us to compute a value on the fly instead of simply pulling it out of a property.

  The get and set keywrods just make our object's interface more simple.
*/

