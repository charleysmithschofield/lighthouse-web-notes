// OOP Best Practices - Notes:

/*
  ## OOP Goals and Best Practices:

    1. Reduce duplicated code (reusability)
    2. Breaking code up into sensibly-divided units (modularity)
  
  Ultimately it's about trying to make complex things simpler to read, write & maintain.

  With that said, there are some OO principles to emphasize so we don't misuse OO & have
  the opposite outcome with our code.
*/

/*
  ## Abstraction:

  - Abstraction:
    Abstraction is a technique for arranging complexity of computer systems.
    
    It works by establishing a level of complexity on which a person interacts with the
    system, suppressing the more complex details below the current level.


  Example of Abstraction:

    If you have a driver's licence then you know how to drive pretty much any car.
    No matter the make, module, seats, etc.

    Cars are extremely complicated things, and engineering them is no simple task.
    But b/c I nkow how to use the steering wheel, pedals, I can drive.

    All the detais of how the car actually workds and how it does things are abstracted,
    away from us. We don't have to know how an internal combustion engine works in order
    to drive.

    This is a great example of Abstraction. Cars take all the nasty complicated details
    about how they work and hide them away from the user of the car. Cars just give us
    a nice and simple interface to use.
*/

// Abstract Pizza:
class Pizza {
  constructor() {
    this.toppings = "":
  }
}
let pizza = new Pizza();

pizza.toppings = pizza.toppings + "cheese";
pizza.toppings = pizza.toppings + "mushrooms";

/*
  This pizza class creates a new string to store toppings, then any code that uses that
  class has to manually add new toppings.

  After using this object for a while, we reaize a string is probably not the best way
  to store toppings, instead we should use an array:
*/
class Pizza {
  constructor() {
    this.toppings = [];
  }
}

// but this means that any code that uses the toppings array, now has to change to the
// new syntax:

let pizza = new Pizza();

pizza.toppings.push("cheese");
pizza.toppings.push("mushrooms");

/*
Now imagine a much larger code where small changes would result in changing hundreds of
lines of code.

Instead Pizza class publicly exposing its internals like this, it should abstract them
away. The Pizza class should expose a nice addTopping() method for the rest of the code.
*/

class Pizza {
  constructor() {
    this.toppings = [];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}
let pizza = new Pizza();

pizza.addTopping("cheese");
pizza.addTopping("mushrooms");


/*
  Now if we store toppings as an array, a plain string, or some other object; the only
  place that the code has to change is inside the Pizza class.

  It's also very easy to add new logic w/o altering any other code. If we want to make
  sure that a topping can only be added once, we just have to make a small change to
  the Pizza class:
*/

class Pizza {
  constructor() {
    this.toppings = [];
  }
  addTopping(topping) {
    // check if the topping already exists.
    if (this.toppings.indexOf(topping) > -1) {
      // topping exists, deny adding it again!
      return false;
    }
    // else if the topping does not already exist.
    this.toppings.push(topping);

    return true;
  }
}

/*
  ## Private vs. Public:

  All code using the pizza class should now use the addTopping() method instead of
  accessing toppings directly.

  But what's to stop someone writing code that accesses the array directly? Nothing!
  Someone could still write this:
  pizza.topping.push("cheese");

  In some languages, properties can be made Private. 
  Private properties can't be accessed outside of the class they're created in.

  In JS there is no way of making soemthing Private, but if we add an _to the start of
  the property name, other dev's will know they shouldn't access it directly:
*/
class Pizza {
  constructor() {
    this._toppings = []; // has the _ before toppings, other dev's will know to not access directly.
  }
  addTopping(topping) {
    this._toppings.push(topping);
  }
}

let pizza = new Pizza();

pizza.addTopping("cheese");
pizza.addTopping("mushroooms");


/*
  ## Single Responsibility Principle:

  The single responsibility principle states that a class should be responsible for a
  single part of the app's fucntionality, giving it only 1 reason to change.

  Or more simple, a class should only ONE job.

  Take a look at this outline for a class:
*/

// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
  sendNotification() {
    // Send a notification to the user that their task is complete
  }
  saveToDatabase() {
    // Save this task to the database
  }
}

let task = new Task();
task.saveToDatabase();
task.complete();
task.sendNotification();
task.saveToDatabase();

/*
  This class's purpose is to manage the state of a task, but it's currently responsible
  for 3 different things and has 3 separate reasons to change.

    1. If the way a task's state is managed changes, like using a string instead of a boolean
       to mark a task as done, then the first method has to change.

    2. If our in-app notification system changes, from browser notifications to email 
       notifications, then the second method has to change.

    3. If we need to change how it's persisted in the database, then the third method has to
       change.

  Our class has too many reasons to change, each method has access to the entire internal
  object. A change to the way notifications work could break the database method.

  All of these methods in the same class violates the Single Responsibility Principle.

    The object has to be broken up into more objects that all just do ONE thing:
*/

// Manages the state of a task
class Task {
  complete() {
    // Mark this task as completed
  }
}

// Notifies user of the completion of their task
class NotificationManager {
  sendNotification(task) {
    // Send a notification to the user that their task is complete
  }
}

// Saves this task to the database
class DatabaseManager {
  saveToDatabase(task) {
    // Save this task to the database
  }
}

let task = new Task();
DatabaseManager.saveToDatabase(task);
task.complete();
NotificationManager.sendNotification(task);
DatabaseManager.saveToDatabase(task);

// Now each object only has 1 reason to change. 


/*
  ## Inheritance:

  When we're not using OO, we use functions and modules to reduce duplicate code and
  make our code more reusable. When we're using OO we can use inheritance to do this.

  // See if you can spot the duplicate code below:
*/

class Flower {
  water() {
    console.log("Watering the flower");
    this.lastWatered = Date();
  }
}

class Tree {
  water() {
    console.log("Watering the tree");
    this.lastWatered = Date();
  }
}

class Bush {
  water() {
    console.log("Watering the bush");
    this.lastWatered = Date();
  }
}

// The duplication is the water() listed in all 3 classes.
// We can get rid of the duplication using inheritance:

class Plant {
  water() {
    console.log(`Watering the ${this.type}`);
    this.lastWatered = Date();
  }
}

class Flower extends Plant {
  constructor() {
    super()
    this.type = "flower";
  }
}

class Tree extends Plant {
  constructor() {
    super()
    this.type = "tree";
  }
}

class Bush extends Plant {
  constructor() {
    super()
    this.type = "bush";
  }
}

// Now if the water method changes, the code only has to be changed in one place.
// The others will change based on the inheritance that allows shared behaviour
// between the classes.

/*
  ## Why Do We Use OO?

    - Gives us a nice alternative stragety for modularization
      (breaking into bite-sized chunks)
    
  ## When should / shouldn't I use OO?

    - Unfortunately there is no easy answer to this. It's often a matter of comfort and
      taste.
    - Sometimes you'll use OO and sometimes you won't.
    - The important thing to know is that it's a very popular strategy for modularization.

  * When you program in an OO language like Ruby, C++, or Swift, you will use OO.
    In a purely OO language, you don't really have an option.
*/