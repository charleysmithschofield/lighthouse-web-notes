// Event Handling and User Input:

/*
  User Events:

  A rather common requirement of user-facing software is the ability to handle user input.
  For example, a user could click a link or button on a page, submit a form, or drag &
  drop something. We can call these actions events.

  Since these user events can occur any time while our app is running, we need to be able
  to handle them asynchronously.
*/

/*
  Callbacks:

  Just like with previous asynchronous logic, callbacks are a major way that JS handles
  dealing with code that needs to run later.

  In this example, our code needs to be able to do something when user inputs info.
  A callback can be used for this problem as well, just like it was with setTimeout.

  * Warning:
  In various external readings, videos and documentation, you may come across other
  patterns used by JS to handle asynchronous logic.
  
  These include Promises and async/await.
  
  Indeed they are more powerful and convenient, but comfort with callbacks is essential
  and must be covered first.
  *
*/

/*
  User Input:

  We're not building web pages quite yet, but user input can still happen with command
  line applications.

  What if we want our Node app to keep running and allow the user to type in more info?

  This is where event handling comes in.
*/

// Event Handling User Input:

// on any input from stdin (standard input), output a "." to stdout
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');

/*
  Code Explanation:

  In the code above we're using process.stdin as well as process.stdout.

  As you may have guesses, stdin deals with the "standard input", much like how stdout
  is for "standard output"

  We use the on method on stdin to register a callback. Unlike setTimeout, this callback
  is not scheduled to run x seconds later. No delay of info is provided for this reason.

  Instead, it is meant to run any time the user provides input to the program.

  In our case, our callback function, which is called each time there is new user input
  data, simple prints a "." to the screen.
*/

/*
We'll see more of it later... in the context of handling events on web pages,for example.

As for the "after callback" output, this executes before any input. This is b/c on
returns immediately, without running the callback code.

It's job isn't to run the callback right away, but rather save it for later. In that
way, it's similar to setTimeout, isn't it?

In order for this to actually work, there's a few more lines of code to setup stdin
properly, as shown below. These configuration settings are not important to our
learning of asynchronous programming right now, so we won't focus on them.
*/

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');

/*
  Trying to exit the program using ctrl + c is going to prove unsuccessful.
  Yikes! We can terminate the terminal tab and open another ssh session to
  our Vagrant machine.

  Let's deal with the termination input so that we don't have to kill our entire
  terminal tab (super annoying!). It looks like we need to handle that interrupt
  signal ourselves now.

  Instruction
  Add the following line within the data callback.
*/

// Try the following code in Node, and then confirm you can exit Node using CTRL+C

stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');
// \u0003 maps to ctrl+c input (allows us to exit Node with the CTRL C)
if (key === '\u0003') {
  process.exit();
}

/*
  Events in General:

  User events are relatable way to get introduced to the concept of events.

  Not all event handling is due to direct user input.

  Consider this a heads up to give us more context and get more excited about events.
  After all, who doesn't love events, right?
*/

/*
  Conclusion:
  This interactive reading introduces the idea of events and how JavaScript uses
  callbacks as the strategy to handle their asynchronous nature.
  
  For our initial example, we looked at Node's process.stdin object and used on
  to register a callback to read user input. In later exercises, we'll now expect
  you to use this technique to create fun little solutions.
*/