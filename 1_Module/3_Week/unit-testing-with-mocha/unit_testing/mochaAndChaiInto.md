Mocha and Chai Intro


When it comes to unit testing in JS, there are a number of tools to use.

In this assignment we will go over how we can use Mocha and Chai packages
to write automated tests for JS.

- Learning Objectives:

  - understand what BDD is & why it's used.
  - install at BDD testing framework.
  - use describe and it to set up unit tests.
  - use assert to perform unit tests.
  - appreciate how unit testing applies to the world of web development
    (and not just command line scripts).


- BEHAVIOR DRIVEN DEVELOPMENT (BDD):

  - BDD is a process that emerged from test-driven development in 2006.
  - The topic of BDD covers the entire life cycle of the app development process, from planning the project to writing the code.

  - BDD encourages you to specify the behavior of your app in terms of user stories which are broken down into scenarios that can be built and tested.



- BDD FRAMEWORK:

  When we write tests, we are testing the behaviour of our code.

  If you were to test a function that sums two numbers, you would create some numbers, call the function with those numbers then write an assertion for what the function should return.

  Some test are more complicated that others, but ALL tests will involve setting up some data, running some code that SHOULD do something, and asserting that it does that thing.



- SETTING UP:

 We first need to install a testing framework to start testing our JS code.

 We will be using:

  - The mocha testing framework.
  - The chai assertion library.




- HOW UNIT TESTING APPLIES TO THE WORLD OF DEV:

  Unit testing refers to testing the smallest possible units of a program to ensure that they’re doing what they’re supposed to.

  Modular means that pieces of code, files, or libraries form building blocks that, when put together, make a functioning app/page.

  When your design is modular, unit testing helps to keep you sane. Unit tests ensure that each of these smaller pieces can function on its own. Seeing the list of green checkmarks at the end of a long day can help you sleep more soundly, as long as you’ve written good tests of course.

  If something breaks tomorrow, you’ll know for sure that the problem was in what you created today. That means you’ll know where to go to fix it. Believe us, you’ll thank yourself later.

