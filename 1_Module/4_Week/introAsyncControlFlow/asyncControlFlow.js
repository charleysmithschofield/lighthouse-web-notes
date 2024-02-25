// Intro Asynchronous Control Flow

/*
  Asynchronous Concepts:

  Here's the problem - we say that lines of code are "blocking" when lines of code have
  to wait for other code to finish.This interferes with out ability to make a responsive
  and active web application web application.

  Multitasking is the solution. You'll learn how JS facilitates multiatasking using the
  event loop. We'll use the analogy of cleaning your how to illustrate asynchronous code.
*/

// Learning Objectives:
// 1. Understand what blocking code is and how it affects web application performance.
// 2. Explore how multi-tasking and the even loop fix the blocking code problem.

/*
  Glossary:

    - The Event Loop: JS has a feature built into it that allows us to enable multi-tasking
                      in our programs.

      example: Some events take a long time to execute such as:
               - user input may need to wait till the user is finished typing
               - reading in a very large file
               - connecting to a network API where the server is in a remote location on the
                 internet.
*/

/*
  HOW THE EVENT LOOP ENABLES MULTI-TASKING IN JS:

  JS has a few parts of its engine that enable multi-tasking to occur:

    1. Call Stack: where we'll have code that might call another function, the new function
                   will show up on the call stack.

    2. Web APIs: where functions like reading a file, or calling a network API request, or
                 any task that might take a long time.

    3. Callback Queue: a separate stack of callbacks, that can then be called in the future
                       when JS is ready to run them.

    4. Event Loop: takes callbacks off the callback queue, and runs them one after another as
                   it becomes possible to run that.
*/

/*
  EXAMPLE BASED ON CLEANING YOUR OWN HOUSE:

  Vimeo Reference: https://vimeo.com/740474151/d82bb4346c

    - There will be some activities that you want to have happen simutaneously. Let's pretend
      we are writing some code for tasks about cleaning our house. This is how it would flow:

      1. In the Call Stack:
        - We would send the task (code) to start the washing machine: startWashingMachine()
        - Then right after send the task (code) to start dishwasher: startDishWasher()

        At this point both of these code would be sent to the Web APIs
      
      2. In the Web APIs:
        - both the startWashingMachine() and startDishWasher() would run.

        Once each of those tasks finishes, a callback will be added to the callback queue
        that would represent that those tasks have finished.

      3. Callback Queue:
        - the callback queue will collect the callbacks that can be run when each of those
          tasks is done.
      
      4. The Event Loop:
        - is tasked with going through the callback queue, taking them off the callback queue
          and running the results from those callbacks when the laundry and dishwasher finishes.

          * whichever of the two that finished first will be pulled from the callback queue and
            the callback will then run, and then the other will be pulled and run.

    Recap: the startWashingMachine() and startDishwasher() were both running at the same time.
           aka: multi-tasking in our code.
*/

/*
  ORDER OF EXECUTION:

  Vimeo Reference: https://vimeo.com/740472090/20bd9bed5a

  Learning Objectives:
    1. Examine code that facilitates multitasking with the event loop.
    2. Follow the order of execution for the console logs.

  Now let's write some code to show how this multitasking occurs. We will again use the example
  of cleaning our house. See blow:
*/

/*
  SUMMARY OF WHAT IS OCCURING IN THE CODE BELOW:

  1.
  setTimeOut() - schedules a thing to occur on the event loop.

  not until the main thread finishes that the event loop can even start.

  Follow the Execution of the Code Line by Line:

    1. startDishwasher() called (executed)
    2. "Dishwasher Started." console logged.
    3. setTimeOut() scheduled callback to occur 8000 miliseconds in the future.

    4. startWashingMachine() called (executed)
    5. "Washing Machine Started." console logged.
    6. setTimeOut() schedules callback to occur 5000 miliseconds in the future.

    7. dushShelves() function called (executed)
    8. "Dusting Shelves" console logged.

    9. mopFloor() function called (executed)
    10. "Mopping Floor" console logged.

    11. ** This is where the MAIN THREAD FINSIHES, & the EVENT LOOP STARTS
           (also timers begin now!)

    12. "Washing Machine Finished" console.logged
        (5000 miliseconds after the event loop starts)
    13. "Dishwasher Finished" console.logged
        (8000 miliseconds after the event loop starts)
*/


// Main Thread

// Defines the startWashingMachine function to start washing machine
const startWashingMachine = () => {

  console.log('Washing Machine Started.'); // 5.

 
  setTimeout(() => { // 6.
    
    console.log('Washing Machine Finished.'); // 12. Waits 5000 miliseconds to executre callback
  },5000);
};

// Defines the startDishWasher function.
const startDishWasher = () => {
  
  
  console.log('Dishwasher Started.'); // 2.


  setTimeout(() => { // 3.
    
    console.log('Dishwasher Finished.'); // 13. Waits 8000 miliseconds to execute callback.
  },8000);
};

// Now let's add some "other tasks"
// Defines the dustShelves function.
const dustShelves = () => {
  console.log('Dusting Shelves.'); // 8.
};

// Defines the mopFloor function.
const mopFloor = () => {
  console.log('Mopping Floors.'); // 10.
};


// start long running tasks
startDishWasher(); // 1.
startWashingMachine(); // 4.
// start other tasks
dustShelves(); // 7.
mopFloor(); // 9.
// 11. ** This is where the main thread finishes, and the event loop can now start (timers start now!)


/*
  WHEN WE RUN THE ABOVE CODE THIS IS THE TERMINAL LOG:
  Dishwasher Started.
  Washing Machine Started.
  Dusting Shelves.
  Mopping Floors.
    Washing Machine Finished. (about 5 seconds after the first console.log's appear, this one will appear, in your terminal)
    Dishwasher Finished. (about 8 seconds after the first console.log's appear, this one will appear, in your terminal)
*/


// See usingAsyncFunctions.js next.