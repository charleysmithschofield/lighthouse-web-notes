// Big O Notation - Summary of Notes:

/*
  Main Outcomes:

  * can understand basic big O notation
  * can understand that when we're using Big O, we're
    talking about large input.
  * can understand that when we use big O, we drop constants
    and lower order terms.
*/

/*
  BIG O NOTATION:

  Describes how the number of steps in an algorithm
  scales relative to its input.

  As we increase the amount of data, does the algorithm
  grow:

    - linearly
    - exponentially
    - logarithmically
*/

/*
  The BIG 3 to Remember about Big O Notation:

    1. We only care about arbitrarily large input.

      Ex: what does the run time of binary search
          look like when we give it an array of
          one million items?

    2. We drop the non-dominant terms.

      Ex: When our algorithm had a running time of
      (n^2+n)/2, it was the n^2 that was hurting
      us. So we'll just forget about everything
      else.

    3. We drop constant terms.

      Ex: If you graph (n^3)/2 or (n^3)*2, it has
      pretty much the same curve as n^3, so let's
      just get rid of the constant 2.
*/

/*
  Logarithmic O(log n):

    Definition: If the number of operations that an
    algorithm has to do is directly proportional to
    the logarithm of the size of the input, then that
    algorithm runs in logarithmic time.
*/

/*
  Linear O(n):

    Definition: When the number of operations an algorithm
    has to perform grows linearly relative to its input,
    then that algorithm runs in linear time.
*/

/*
  Quadratic O(n^2):

    Definition: If the number of operations that an algorithm
    has to perform is directly proportional to the square of
    the size of the input, then that algorithm runs in quadratic
    time.
*/

/*
  Logarithmic O(log n):

    Definition: If the number of operations that an algorithm
    has to do is directly proportional to the logarithm of the
    size of the input, then that algorithm runs in logarithmic
    time.
*/

