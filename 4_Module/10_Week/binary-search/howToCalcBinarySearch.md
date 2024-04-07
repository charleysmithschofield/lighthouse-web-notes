# How to Calculate a Binary Search

## Step by Step Description of Using Binary
1. Let min = 1 and max = n
2. Guess the average of max/mix, rounded down so that it is an integer. 
3. If you guessed the number, stop. You found it!
4. If the guess was too low, set min to be one larger than the guess.
5. If the guess was too high, set max to be one smaller than the guess.
6. Go back to step 2.


## Example
A binary search might be more efficient. Because the array primes contains 25 numbers, the indices into the array range from 0 to 24. 

Min = 0
Max = 24

(Min + Max) / 2 = 12

primes[12] = 41.