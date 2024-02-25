
// OBJECTS - ITERATION:


// OBJECTS & ITERATION:

// Syntax of Object Iteration:

   for (variable in object)
     statement


// Iterating over Elements in an Array:

   for (var = 0; i < 10; i++) {
    // iterating over an array
    console.log(someArray[i]);
   }


// Iterating over Properties in an Object:

/* However, JS objects, {key: value}, themselves are not iterable in the way
   that arrays are. Instead we need to do things different, using a for..in
   statement.
*/

// First, we create a object:

   var planetMoons = {
    mercury: 0,
    venus: 0,
    earth: 1,
    mars: 2,
    jupiter: 67,
    saturn: 62,
    uranus: 27,
    neptune: 14,
   };

// In the above example, our planetMoons object has 8 keys (each planet).

// Second, We iterate through the properties of the object:

   for (var planet in planetMoons) {
    var numberOfMoond = planetMoons[planet];
    console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
   }


/* 
We have the key available to us within the scope of the for.. in loop, in the 
above example it is the `planet` variable. 

Notice how we access the object using a variable, planetMoons[planet]. 

The variable `planet` iterates over each key ("mercury", "venus", ...) use the
for-loop.
*/


/* Limitations of the for..in loop:

   We should be careful with this looping technique, as it can produce some unex-
   pected results. For reasons which we will cover in later activites, objects 
   can sometimes have properties that they inherit from their prototype chain as
   well as method name. 

   As such an additional filtering step is sometimes necessary:
*/

   for (var planet in planetMoons) {
    // additional filter for object properties:
    if (planetMoons.hasOwnProperty(planet)) {
      // ...
    }
   }


/* CONCLUSION:

- Because objects are not iterable like arrays, we have to use a for..in loop. 
- We saw how to use the hasOwnProperty method to ensure we don't get unexpected
  results.
*/
