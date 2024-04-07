# Binary Search of an Array

Here's a JavaScript array of the first 25 prime numbers, in order:

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

Suppose we want to know whether the number 67 is prime. If 67 is in the array, then it's prime.

We might also want to know how many primes are smaller than 67. If we find the position of the number 67 in the array, we can use that to figure out how many smaller primes exist.

Number 67 is at index 18, we can identify that it is a prime. We can also quickly identify that there are 18 elements which come before 67 in the array. 

## Binary Search
A binary search might be more efficient. Because the array primes contains 25 numbers, the indices into the array range from 0 to 24. 

Min = 0
Max = 24

(Min + Max) / 2 = 12

primes[12] = 41.

Is the index we are looking for higher or lower than 12? Since the values in the array are in increasing order, and 41 < 67, the value 67 should be to the right of index 12.

In other words, the index we are trying to guess should be greater than 12. This means the min is 12 + 1 = 13.

Min = 13
Max = 24

(Min + Max) / 2 = 18.5 which rounds down to 18. The index 18 is number 67.


The binary method only took 2 guesses.


## Pseudocode

1. Let min = 0 and max = n - 1
2. Compute guess as the average of max and min (round down)
3. If array (guess) equals target, then stop.
4. If array (guess) < target, then set min = guess + 1
5. Otherwise, the guess was too high. Set max = guess - 1
6. Go back to step 2.