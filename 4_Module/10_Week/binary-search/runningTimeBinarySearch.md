# Running Time of Binary Search

There's a mathematical function that means the same thing as the number of time we repeatedly halve, starting at n, until we get the value 1: the base-2 logarithm of n.

That's most often written as log₂n, but you may have also seen it written as lg n.

So if log₂n = x, then n = 2ˣ. 

Ex: log₂128 = 7, we know that 2⁷ = 128.

That makes it easy to calculate the runtime of a binary search algorithm on an n that's exactly a power of 2. If n is 128, binary search will require at most 8 (log₂128 + 1) guesses.

What if it isn't a power of 2?

For an array with a length of 1000, the closest power of 2 is 512 which equals 2⁹. We can thus estimate that log₂1000 is a number greater than 9 and less than 10 (9.97). Add one to that yiels 10.97, rounded down is 10. So it would require at most 10 guesses.