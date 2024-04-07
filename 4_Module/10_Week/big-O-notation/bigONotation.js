// Big O Notation

/*
  Learning Outcomes:

    * can understand basic big O notation
    * can understand that when we're using Big O, we're talking
      about large input
    * can understand that when we use big O, we drop constants
      and lower order terms
*/

/*
   * Big O Notation: describes how the number of steps in an
     algorithm scales relative to its input.
     
     As we increase the amount of data, does the algorithm grow
     linearly, exponentially, or logarithmically?
*/

/*
  When we evaluate an algorithm using Big O Notation, there are
  3 main things to remember:

    * We only care about abitrarily large input.
      * What does the run time of binary search look lik
        when we give it an array of one million items?

    * We drop the non-dominant terms. 
      * When our algorithm had a running time of (n^2+n)/2,
        it was the n^2 that was hurting us. So we'll just
        forget about everything else.

    * We drop constant terms.
      * If you graph (n^3)/2 or (n^3)*2, it has pretty much
        the same curve as n^3, so let's just get rid of the
        constant 2.
*/

/*
  Arbitrarily Large Input:

  When we evaluate an algorithm using Big O notation, we only
  care about arbitrarily large input.

  Let's compare the following two algorithms:
*/
  
// Algorithm a:
for (let i = 0; i < array.length; i++) {
  doSomething();
}
for (let i = 0; i < array.length; i++) {
  doSomething();
}

// Algorithm b:
for (let i = 0; i < array.length; i++) {
  for (let ii = 0; ii < array.length; ii++) {
    doSomething();
  }
}

/*
  Here are their running times:

  a: 4 + 6n
  b: 2 + 2n + 3n^2

  Let's see what that looks like for small values of n:

  n: 1, a: 10, b: 7
  n: 2, a: 16, b: 22
  n: 3, a: 18, b: 35
*/

/*
  When n = 1; algorithm b is faster than a. For all other
  values, algorithm b is slower than a, but not by that
  much. For small values of n, it's hard to tell which
  algorith, is more efficient.

  Also, for small values like this, it doesn't really matter
  which one is efficient. If an algorthm can achieve something
  in 1 elementary operation vs 100, it's not that big of a deal.

  99 is a small number of operations for a computer. If you run
  the two following JS's, they will both appear to happen instant-
  ly.
*/

console.log("hello");

for (let i = 0; i < 100; i++) {
  console.log("hello");
}

/*
  However, when n gets really big, the more efficient algorithm
  becomes way easier to identify. Let's look at a and b again,
  but this time with large input sizes:

  n: 100,000, a: 600,004, b: 30,000,200,002
  n: 1,000,000, a: 6,000,004, b: 3,000,002,000,002
  n: 10,000,000, a: 60,000,004, b: 300,000,020,000,002

  When n is 10,000,000 the algorithm b is 5 million times slower
  than a. That means that if algorithm a takes just 1 second to
  finish, algorithm b would take 5 million seconds, which is
  roughly 58 days to run one algorithm.

  Self driving cars constantly need to process data in short
  amounts of time to avoid crashing. If a car was processing
  a small amount of data, either of these algorithms would be
  fine. If it's processing a large amount of data, one of these
  algorithms could result in a fatal crash.

  Big O notation focuses on how an algorithm performs when it's
  given arbitrarily large input.
*/

/*
  Drop the Non-Dominant Terms:

  When we evaluate an algorithm using Big O notation, we drop
  the non-dominant terms.

  Let's say we have an algorithm that has a running time of
  1000n + n^2. When n is small, the 1000n part of algorithm
  is significant. Here's a graph of n^2 and n^2 + 1000n to
  demonstrate what we mean by this:

  1000n becomes a very insignificant part of the running time.
  It becomes so insignificant that adding 1000n to n^2 actually
  appears to do nothing and it just becomes a burden to keep
  the 1000n around.

  When n gets arbitrarily large, 1000n + n^2 and n^2 are so close
  to each other that we can simple get rid of 1000n.
*/

/*
  Therefore, in Big O notation, 1000n + n^2 is written 0(n^2).
  In case you are wondering, we typically read this aloud as
  "O n squard".

  In other words, Big O is only interested in the highest order
  term. The larger the exponential number the bigger the term.

  So if our algorithm had a running time of n^0 + n^1 + n^2 +
  n^3 + n^4, it would simply be 0(n^4)

** ANY TIME WE ARE USING BIG O NOTATION WE ONLY CARE ABOUT
MENTIONING THE HIGHEST ORDER TERM **
*/

/*
  Drop Constants:

  When we evaluate an algorithm using Big O notation, we also
  drop the constants.

  Big O notation is used to describe how an algorithm's complex-
  ity grows relative to its input. It is not used to describe the
  exact running time of an algorithm.

  Take a look at the following algorithm:
*/

for (let i = 0; i < array.length; i++) {
  // Do 100 different operations in each iteration
}

/*
  The running time of this algorithm is 2 + (n * 102) or
  102n + 2. 

  How does this algorithm's complexity grow relative to its
  input? It grows linearly. If we add 100 more elements to
  the array, the running time increases by 100.
*/

/*
  Multiplying a constant by an algorithm's run time will
  only affect the growth rate by a constant amount.

  While adding a constant won't affect the growth rate at
  all. Adding or multiplying algorithms by constatns will
  shift or rotate the graph of the growth rate, but it
  will not change its overall shape. A linear algorithm
  will still grow linearly, a logarithmic algorithm will
  still grow logarithmically and an exponential algorithm
  will still grow exponentially.
*/