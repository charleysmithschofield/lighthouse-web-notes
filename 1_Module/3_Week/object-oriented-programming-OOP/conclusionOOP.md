# OOP Conclusion:

## Reading:

We've spent a fair bit of time talking about OO. 

The good new is that we'll be using class-based OOP again when we encounter Ruby, which uses classes a lot more than JS. 

So don't fret if you feel that more practice is still needed!

## Recap:

  OOP is a programming paradign where we use objects to encapsulte (group) data and behaviour. 

  These two things become properties of those objects.

  Why do we do this? 
  
  What's it all for?

    1. To reduce duplicated code.
    
    (reusability)

    2. To break up code into sensibly-divided units.
    
    (modularity)


### OOP Does Not Need Classes:

  We saw an example of this in the ToDo List Exercise where we did not use classes and instead defined a newTask(..) function which returned a new task instance each time it was called.

  JS predominantly did things this way (it also uses Prototypes but we are skipping that for now) until ES6 came along and introduced the class keyword. It does this by mimicking class-based OO languages (also known as Classical OO languages) such as Java and Ruby.

  Most of our efforts were spent building up and then learning the Classical stype of OOP due to its popularity in the software development today.

  It's hard to escape and generally liked.


 ## Summary of OOP Features that We Covered:

  We learned the following features about Classical OOP:

  - A class is a blueprint from which instances of objects can be created (i.e. newTask vs a task).

  -  Classes have data in the form of value properties and bahaviour in the form of methods.

  - Classes can inherit behaviour from other classes using the extends keyword.

  - Subclasses can override methods that are inherited in their superclass.

  - JS also gives us get and set keywords to more cleverly define methods that are data getters and setters.

  Like with any technique, there are good and bad ways to use them. One could easily write OOP code in a way that accomplishes the opposite of those goals in fact.

  That is where experience and practice come into play, and you'll be getting more of that in the upcoming material.

