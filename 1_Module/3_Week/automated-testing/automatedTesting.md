AUTOMATED TESTING:

Automated testing is the practice of writing code to programatically test the actual code we want to write.

It offeres several benefits over manual testing including:
  1. It saves testing time (by not having to perform manual tests over and over).

  2. It saves debugging time (by catching bugs earlier).

  3. It makes it easier to program. 
      (because we don't need to keep the entire application in our heads, just the part that we're working on... if we break something, our tests will let us know).

  4. It makes it easier to come back to a program after some time. 
     (programmers forget things, but tests do not).

  5. It makes it easier to work together. 
      (we wrote some widget and know how it works, but our team-mates probably don't; our tests will catch bugs introduced by others on our team, and vice versa).

  6. It acts as documentation. 
      (readings tests is a great way to learn about how code is meant to be used).

  7. It improves the quality of our code. 
      (writing code that is easy to test often requires us to change how our code is structured -- for the better).


TYPES OF TESTING:

  Programmers distinguish between different types of testing: 
    - Unit Testing
    - Integration TEsting
    - Functional testing

    * It's useful to understand the distinction between these types, their benefits and their limitations. 

    Check out this website for more info: https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/
    (Your notes below are taken from this website)


UNIT TESTING:

  Unit testing is the practice of testing small pieves of code, typically individual functions, alone and isolated. If your tests uses some external resource, like a network or database, it's NOT a unit test.

  Unit tests should be:

    - Fairly simple to write
    - Should essentially just give the function that's tested some inputs and checks if the outputs is correct. 

    - Is the only testing method which also helps you write better code, code that's hard to unit test usually has poor design.

  When should you use unit testing?

    Ideally, all the time, by applying test-driven development. A good set of unit tests do not only prevent bugs, but also improves your code design, and make srue you can later refactor your code w/o everthign completely breaking.

  Popular tools for unit testing include:

    - Mocha (https://mochajs.org/)
    - Jasmine (https://jasmine.github.io/)
    - Tape (https://github.com/ljharb/tape)


INTEGRATION TESTING:

  Integration testing the idea is how parts of the system work together - the integration of the parts.

  Integration tests are similar to unit tests, but there's one big difference:
    - While unit tests are isolated from other compartments, integration tests are not.

    Example: A unit test for database access code wouldn not talk to a real database,but an integration test would.

  Integration tests are:
    - Often slower than unit tests b/c their complexity.
    - They might also require some set up or configuration, such as the setting up of a test database.
    - Writing them and maintaining them is harder than unit tests, so you should focus on unit tests unless you absolutely need an integration test.

  When is integration useful?

    - For situations where unit testing is not enough.
    - Sometimes you need to have tests to verify that two separate systems, like a database and your app, work together correctly.

  
FUNCTIONAL TESTING:

  Functional Tests aka E2E testing, or browser testing.

  Functional Testing:
    Testing the compelete functionality of some application.

  Function Tests:
    - Run very slowly because they simulate a real user interaction on a webpage, so even page load times become a factor.
    - You usually want to have only a small amount of functional tests.

  When Should You Use Functional Testing?

    - If you have some repeated tests you do manually in the browser. 
      * Be careful to not make them too fine-grained as they can become a nightmare to maintain.

  Common Tools for Functional Testing:

    - Selenium (https://www.selenium.dev/)
    - Selenium WebDriver (https://github.com/seleniumhq/selenium-google-code-issue-archive)
    - Protractor (https://github.com/angular/protractor)
    - PhantomJS (https://phantomjs.org/)


HAPPY PATH TESTING:

  At the minimum we should aim to write tests for the "happy path" of our application.

  What is the "happy path" test? "Happy path" tests are very useful b/c they catch the most critical bugs, but are definitely NOT sufficient for building reliable and robust applications.

  Check out The Happy Path: https://effectivecio.com/2009/11/02/the-happy-path/

  A co-worker of mine often talks about the “happy path.”  The happy path is the path through a system where everything works, the data is correct, the system stays up, and the users are well-behaved.  We tend to test the happy path first because we understand how the system should function and want to ensure that the basic features should work.

  This results in testing scenarios like this

  User selects an item and adds it to their cart
  User enters billing data
  User enters shipping data
  User clicks “Check Out”
  Transaction is processed




