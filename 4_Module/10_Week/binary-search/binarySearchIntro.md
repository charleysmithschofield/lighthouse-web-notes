# Binary Search Intro

Binary search is an efficient algorithm for finding an item from a sorted list of items.

It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

## Describing Binary Search
In order to implement an algorithm in a programming language you will need to understand an algorithm down to the details.

- What are the inputs to the problem?
- What are the outputs?
- What variables should be created, and what initial values should they have?
- What intermediate steps should be taken to compute other values and to ultimately compute the output?
- Do these steps repeat instructions that can be written in simplified forms using a loop?


## Ruling Out
Let's say I am thinking of a number between one and 100, just like the guessing game.

If you've already guessed 25 and I told you my number was higher, and you've already guessed 81 and I told you my number was lower, then the number must be between 26 to 80.

This means you've already ruled out 1 to 25 and 80 to 100.

In each turn, you choose a guess that divides the set of reasonable guesses into two ranges of roughly the same size. 

If your guess is not correct, then I tell you whether it's too high or too low, and then you can eliminate about half of the reasonable guesses.

Ex: (26 + 80)/2 or 53. Then I tell you 53 is too high, you can elimante all numbers from 53 to 80. Leaving only 26 to 52.


## Step by Step Description of Using Binary:
1. Let min = 1 and max = n
2. Guess the average of max/mix, rounded down so that it is an integer. 
3. If you guessed the number, stop. You found it!
4. If the guess was too low, set min to be one larger than the guess.
5. If the guess was too high, set max to be one smaller than the guess.
6. Go back to step 2.

