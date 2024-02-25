
// ES6 OOP Using Classes:

// This quiz will ask qestions pertaining to the following learning outcomes:

/*
  What is the difference between "foo" and new String("foo")?


  "foo" - is a string literal
  `new String("foo")` - is an instance of the `Sring` object created using the `String` constructor.

  Here are the main differences:

  1.) Type:
    - `"foo"` is a primitive string type in JS.
    - `new String("foo")` creates an object of type `String`.

  2.) Usage:
    - `"foo"` can be used directly as a string literal in the code.
    - `new String("foo")` - When comparing this directly with another string, JS compares
       their references, not their values. This means two different instances of `String`
       objects with the same value won't be considered equal.

  3.)
    - `"foo"` - when comparing with another string, JS compares their values.
    - `new String("foo")` with another string, JS compares their references instead of their
    values. This means two different instances of `String` objects with the same value
    won't be considered equal.
    
  4.) Memory:
    - `"foo"` - stores as primitives in memory which is more memory-efficient.
    - "`new String("foo")` - creates an object in memory, which consumes more memory compares
      to primitives types.
*/

// Here's a simple example to illustrate:
// let str1 = "foo";
// let str2 = "foo";

// console.log(str1 === str2); // true

// let strObj1 = new String("foo");
// let strObj2 = new String("foo");

// console.log(strObj1 === strObj2); // false, because they are different objects

// console.log(strObj1.valueOf() === strObj2.valueOf()); // true, because their values are the same

// In general, unless you have a specific reason to use `String` objects, it's recommended to
// use string literals (`"foo"`) for better performance and simplicity.


/* ES6 Quiz:

 ## Question 1: Which of the following is true about classes?

  Possible Answers:

  A) Classes are blueprints (templates) that we use to create objects
  B) Class is just another word for Object
  C) Clases have been a feature of JS since the beginning
  D) We have to use classes to do OOP
  E) All of the Above

  Answer 1: A) Classes are blueprints (templates) that we use to create objects.


  ## Question 2: What will the output be of this code:
    class Pizza {

      constructor(size, crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = ["cheese"];
      }

      addTopping(topping) {
        this.toppings.push(topping);
      }

    }

    let pizza = new Pizza('large', 'thin');
    pizza.addTopping('mushrooms');
    console.log(pizza.toppings);

  Possible Answers:
  A) This will result in an error
  B) "cheese"
  C) "cheese", "large", "thin", "mushrooms"
  D) "cheese", "mushrooms"
  E) "mushrooms"

  Answer 2: D

  
  ## Question 3: What is the relationship between these three classes?
        class A {
      constructor(name) {
        this.name = name;
      }
    }

    class B extends A {
      ...
    }

    class C extends B {
      ...
    }

  Possible Answers
  A) A is the superclass of B and C. B and C are subclasses of A
  B) A is the superclass of B and B is the subclass of A. B is the superclass of A and A is the subclass of C.
  C) A is the superclass of B, and C is the subclass of A. C is the superclass of A and A is the subclass of C.
  D) A is the superclass of B, and B is the subclass of A. B is the superclass of C and C is the subclass of B.

  Answer 3: D


  ## Question 4: When should you use the super keyword?

  Possible Answers
  A) Use super as syntactic sugar to make your code look Super!
  B) Use super when overriding methods in order to execute the superclass's version of the method
  C) super is a more strict version of this and therefore recommended similar to how === is recommended over ==
  D) All of the above
  E) None of the above.

  Answer 4: B


## Question 5 - What is a benefit of using getter methods instead of accessing value properties directly?

  Possible Answers
  A) Executing a method is more efficient than getting a stored value
  B) Getter methods are used to make our objects DRY.
  C) A getter method allows you to compute a value when the value is needed, rather than always keeping track of that value.
  D) All of the above
  E) None of the above

  Answer 5: C



## Question 6 - What is a benefit of using a setter method instead of accessing value properties directly?

  Possible Answers
  A) The entire JavaScript community agrees that setter methods look cool.
  B) Whenever we define a getter method it must have a corresponding setter
  C) Executing a method is more efficient than setting a stored value directly
  D) It results in fewer lines of code
  E) None of the above

  Answer 6: E (None of the above: A correct answer would be that it allows for data validation before updating info)


## Question #7 - Can we create a string using var word = new String('hello'); in JavaScript? If so, then would it be the same as var word = 'hello';?

  Possible Answers
  A) Yes, a string can be created using new String('hello'), it is the same as 'hello'.
  B) Yes, a string can be created using new String('hello'), but NOT the same as 'hello'.
  C) No, it would burst into flames.

  Answer 7: B
