// setTimeout Introduction:

/*
  One of the simplest and easiest ways to learn about asynchronous programming
  in JS is setTimeout.

  * Disclaimer:
    Beware when googling for intr's to setTimeout, these often quickly end up
    going into advanced concepts/explanations, even on websites such as:
    freeCodeCamp.

  As such we have curated some articles discusssing these advanced concepts for
  stretch reading later. They are not pertinent towards building our understanding
  of and comfort with JS's asynchronous nature.
*/

/*
  - setTimeout Definition:
    used to delay the execution of some code to later. We specify the code via
    a callback, and the delay in miliseconds (ms).

  For our purposes we will consider the function to look lik this:

  setTimeout(callback, delay).

  The setTimeout function can actually take in more parameters, and isn't limited
  to just two. However, for our purposes, this simplified view is acceptable.
*/

// Here is a trivial example of it in action:

console.log('first line');

setTimeout(() => {
  console.log('timeout line');
}, 1000);
console.log('last line');

// The timeout line will appear last, after approx. a one second delay.

/*
  What is setTimeout used for?

  Almost all web applications (websites) in the wild like to schedule something
  to occur a bit later on their webpage(s) and therefore use setTimeout.

  Below are some examples of setTiemout on websites:

    1. Some sites will show a notice to the user and then automaticalls hide it
       after a few seconds. That's accomplished via setTimeout.

    2. In Gmail/other web-based email clients, a yellow "disconnected" message
       popups at the top if we go offline. It usually indicates that it will
       retry to connect after x seconds. This countdown and its retry is imple-
       mented using setTimeout.

    3. Some websites like to pop open an in-browser chat button after a few sec-
       onds. setTimeout is used to make them appear with a short delay.
    
    4. If you use an adblocker extension, you've likely seen prompts from websites
       asking us to disable them for that site. These don't come up right away and
       instead are delayed by a few seconds. The delay here would have been implem-
       ented using setTimeout.
*/


/*
  Our Goals:

  Due to its simplicity, seetTimeout is also a great way to learn about handling
  delays caused by heavy operations such as reading/wriitng files or downloading/
  uploading content. These heavy operations utilize the same callback-based mech-
  anics that we see with setTimeout.

  While setTimeout is indeed a very core and fundamental part of JS, for every JS
  developer to know about, our reason for introducing it here and now is to pract-
  ice asynchronour programming in JS.
*/

/*
  Summary:

    - The setTimeout function is used to defer code execution by a specified number
      of miliseconds.
    
    - a callback is passed in to the setTimeout and the setTimeoiut calls it after
      the specified number of miliseconds. 

    - it's used on many websites to delay a message or response.

    - we are learning about it for purposes of practicing async programming in JS.
*/