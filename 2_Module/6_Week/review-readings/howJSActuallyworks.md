# How JS Actually Works

- Video Reference: https://www.youtube.com/watch?v=6MXRNXXgP_0 


## JS Works Using:
  - call stack
  - an event loop
  - callback queue
  - other APIs


## The Engine (v8)
The engine is entirely made up by the heap and the call stack.

### The Heap
Memory allocation (video does not comment further on the heap just that it is the memory allocation part of the engine).

### The Call Stack 
The call stack can only do one thing at a time.

The call stack is how the JS runtime figures out which function to run, and when it is finished running that function, where does it return to. When something comes off the top of the stack, the return decides which one to run next (it will be the second one added to the call stack).

### Blocking
What happens when things are slow?

#### Why is blocking a problem? 

  Blocking code in JS can be problematic in browser environments b/c JS in browsers is single threaded. This means that only one task can be executed at a time.

  If the code takes a long time to execute or is blocking (meaning it halts the execution of other tasks), it can make the user interface unresponsive / sluggish.


#### What is the solution to blocking?

Asynchronous Callbacks are the solution. 

Async callbacks allow JS to perform tasks w/o blocking other code from execution.

When a task is initiated, JS doesn't wait for it to complete before moving onto the next task. 

Instead it continues executing other code and registers a callback function to handle the result of the asynchronous task.

When the async task completes, the callback function is invoked with the result.

This approach keeps the code responsive and prevents blocking, especially in browser environments where JS is single threaded.


#### Examples of Asynchronous Callbacks include:
  - fetching data from servers
  - reading files
  - setTimeout() function
  - setInterval() function


## Concurrency & The Event Loop
The event loop consists of four main components: the callstack, web APIs, callback queue, and the event loop.

### Call Stack:
  - Represents the sequence of functions that need to be executed.

  - Functions are added to the call stack when they are called.

### Web APIs:
  - Browser specific APIs that handle asynchronous tasks like timers (setTimeout() & setInterval()), AJAX requests etc.

  - Offloads time-consuming tasks from the main thread (preventing blocking from occuring).

  - When an async task is complete, a corresponding callback function is queued in the callback queue.

### Callback Queue:
  - Stores callback functions (tasks) that are ready to be executed.

  - Callbacks are added to the queue when their associated async tasks are completed.

  - These callbacks are then sent to the event loop, to be processed in the order that they were initiatied. 
  (this means that the first callback added to the queue will be the first to be processed by the event loop and so on)

### Event Loop:
  - Monitors the call stack and the callback queue continuously.
  
  - When the call stack is empty, it checks if there are any callbacks in the callback queue.

  - If the callback queue is not empty, it takes the first callback and pushes it onto the call stack for execution.

  - This process repeats, ensuring all the asynchronous callbacks are executed in the order they were queued, without blocking the main thread.


## Pro Tips
  - Think about Async.
  - Don't Block the Event Loop (with things that are slow).


#### What kinds of things are slow?
  - rendering
  - layouts