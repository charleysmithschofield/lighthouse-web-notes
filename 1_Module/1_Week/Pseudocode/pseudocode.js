
// SOLVING PROBLEMS WITH PSEUDOCODE:


// Problem: Loopy Lighthouse (from Prep Module)

// Instructions:
// Write a program that prints the numbers from 100 to 200 \n
// to the console, with three exceptions:
//     - If the number is a multiple of 3, print the String \n
//       "Loopy". 
//     - If the number is a multiple of 4, print the String \n
//       "Lighthouse". 
//     - If the number is a multiple of both 3 & 4, print the \n
//       String "LoopyLighthouse".


// The first step to solving a problem is to understand \n
// the problem.


// First, what is the input to the problem?

// In this case we have several inputs including:
//  - The range from 100 to 200 
//  - The strings "Loopy", "Lighthouse", & "LoopyLighthouse"
//  - The multiples of 3 & 4


// Second, we need to know what the expected output will be:

//   Lighthouse
//   101
//   Loopy
//   103
//   Lighthouse
//   Loopy
//   106
//   107
//   LoopyLighthouse
//   109


// Third, we write the pseudocode:

// Loop from 100 to 200:
// Let num = the current step in the loop
// Print num
// End Loop


// Now that we have the pseudocode, let's add the conditions:

// Loop from 100 to 200:
//   Let num = the current step in the loop
//   If num % 3 is equal to 0:
//     Print "Loopy"
//   Else if num % 4 is equal to 0:
//     Print "Lighthouse"
//   Else if num % 3 is equal to 0 and num % 4 is equal to 0:
//     Print "LoopyLighthouse"
//   Otherwise
//     Print num
//   End if
// End loop


// Now, with the pseudocode above, num 108 will show as "Loop" \n
// but we want it to be "LoopyLighthouse" as it is divisible \n
// by 4 and 3. 
// It is not showing as "LoopyLighthouse" b/c it stops looping \n
// when it reaches the first condition. 
// To solve this we simply re-order the if statements. 

// Loop from 100 to 200:
//   Let num = the current step in the loop
//   If num % 3 is equal to 0 and num % 4 is equal to 0:
//     Print "LoopyLighthouse"
//   Else if num % 3 is equal to 0:
//     Print "Loopy"
//   Else if num % 4 is equal to 0:
//     Print "Lighthouse"
//   Otherwise
//     Print num
//   End if
// End loop


// Now we simply translate our pseudocode to JavaScript:

// for (let num = 100; num <= 200; num++) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   } else if (num % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(num);
//   }
// }


// // WE CAN DO BETTER:

// // We have three similar if statements.
// // We're calculating, the num % 3 and num %4, twice.
// // We're only printing one thing to the console for each line.

// // We can try to build the output we want to print, rather than \n
// // hard coding it directly. 

// let output = "";

// // We see that every time num % 3 === 0 is true, we want to print \n
// // "Loopy", so let's add it tot he output string:

// let output = "";

// if (num % 3 === 0) {
//   output += "Loopy";
// }


// // Now continue this pattern for the other conditionals:

// let output = "";

// if (num % 3 === 0) {
//   output += "Loopy";
// } 
// if (num % 4 === 0) {
//   output += "Lighthouse";
// }


// Now put it together in one final piece:

for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num: output);
}

// Once we've built the output string, we want to print one of
// two things. 
// If output is an empty string, that is "", then it means we 
// haven't added neither "Loopy" nor "Lighthouse" to the end 
// of it. 
// In this case num must not be divisible by 3 or 4, so we 
// want to print num. If output is not an empty string, then 
// we've added "Loopy", "Lighthouse" or both to it and so we 
// print output instead.