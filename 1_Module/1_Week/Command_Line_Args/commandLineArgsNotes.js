
// process.argv is a property that holds an array containing command-line arguments passed to a script when it is run.

// The "process" object is provided by Node.js to give you access to information about the current process.


// 1. THE "process.argv" ARRAY:   

//  - `process.argv` is an array where the first two elements are:
//  - `process.argv[0]`: The path to the Node.js executable.
//  - `process.argv[1]`: the path tot he javascript file being  executed. 

//  * Therefore the actual command line arguments start at index 2 onward. 

//  Example:
//  Assuming your script is named "myscript.js"
//  Run: node myscript.js arg1 arg2 arg3
    console.log(process.argv);
//  Output: [ 'path/to/node', 'path/to/myscript.js', 'arg1', 'arg2', 'arg3' ]



// 2. ACCESSING COMMAND LINE ARGUMENTS:

// - To access specific command line arguments, you can use array indexing.

//   Example:
//   Assuming your script is named "myscript.js"
//   Run: node myscript.js arg1 arg2 arg3
     console.log(process.argv[2]); // Output: 'arg1'
     console.log(process.argv[3]); // Output: 'arg2'



// 3. LOOPING USING COMMAND LINE ARGUMENTS:

//  - You may want to loop through the arguments.

//    Example:
//    Assuming your script is named "myscript.js"
//    Run: node myscript.js arg1 arg2 arg3
      for (let i = 2; i < process.argv.length; i++) {
      console.log(`Argument ${i - 1}: ${process.argv[i]}`);
      }
//    Output:
//    Argument 1: arg1
//    Argument 2: arg2
//    Argument 3: arg3



// 4. parseInt & COMMAND LINE ARGUMENTS:

//    If you want to use parseInt with command line arguments in a Node.js 
//    script, you can apply it to the appropriate elements of the 
//    process.argv array. Remember that process.argv elements are strings,
//    so you need to convert them to numbers using parseInt if you want to 
//    perform numerical operations.



// To Simplify:

// 1. Command-line arguments: 
//     When you run a Javascript file from the command line, you can pass additional info to the script.

//     Example: 
//     `node myScript.js arg1 arg2` means you're running `myScript.js`
//     and you're passing `arg1` and `arg2` as arguments.

// 2. `process.argv`:
//     This property helps you access these arguments within your script. It's an array, where:
//     - Index 0 is the path to the Node.js executable.
//     - Index 1 is the path to the script being run.
//     - The subsequent indices contain the command-line arguments passed to the script. 


// Here's a simple example:
// // myScript.js
// console.log(process.argv);

// If you run `node myScript.js arg1 arg2` the output will be:
// [  '/path/to/node/executable',  '/path/to/your/script/myScript.js',  'arg1',  'arg2']


// So, in short, `process.argv` helps you access and work with the command-line arguments passed to your Javascript script. 
