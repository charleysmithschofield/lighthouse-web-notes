# Quadratic

## Learning Outcomes
  * Can identify the difference between linear and quadratic time

## Goal
This activity explores a problem that could be solved in quadratic time as well as linear time, and how to perceive their differences.

## Problem
Imagine I hand you a piece of paper containing a list of numbers in order from smallest to largest, something like 21, 25, 32, 45, 46, 56. 

I then ask you to tell me if any two numbers in that list can be added together to make the number 71. You can also add a number to itself.

How do you solve this problem?

## Quadratic Time
The simplest approach would probably be to take the first number in the list and add it to every other numebr then check if the result is 71.

  21 + 21 = 42 nope
  21 + 25 = 46 nope
  21 + 32 = 53 nope
  21 + 45 = 66 nope
  21 + 46 = 67 nope
  21 + 56 = 77 nope

Then if you find no match, take the second number and repeat the process.

  25 + 21 = 46 nope
  25 + 25 = 50 nope
  25 + 32 = 57 nope
  25 + 45 = 70 nope
  25 + 46 = 71 YES!

What if the result you were checking for didn't exist? Imagine I ask you to check if you can combine two numbers from the list to make 73. 

Since no two numbers will make 73, you would have to check every possible combination to tell me that it doesn't exist. In the worst case scenario, how many comparisons are you doing?

So if we have a list of n numbers, the number of comparisons we have to do i n * n or n^2 (n²).

You may have noticed that we're doing some additions twice, we could save some time by not doing these:

Now you would make 21 comparisons.


So a list of 6 numbers will cause 21 comparisons in the worst case scenario. But now the list of numbers has doubled from 6 to 12, how many comparisons wil lyou have to do now in the worst case? 

You would have to make 78 comparisons! That is almost 4 times as much.

This is b/c the n^2 in the (n^2 + n) / 2 equation.

When you see n^2 in your run time, it always means that the time complexity will be exponentially worse as n grows! 


## Linear Time
How can we do fewer comparisons?

Remember that the list of numbers is sorted from smallest to largest. We're not currently taking advantage of that fact.

Since the list is ordered, we can start by summing together the smallest and largest numbers, and check if the result is 71.

  21 + 56 = 77 nope it's too big

Since the result is bigger than 71, we'll compare the second largest number to the smallest number.

  12 + 46 = 67 nope too small

Compare the second smallest number to the second largest number.

  25 + 46 = 71 Yes.


## Pattern of Comparison

  1. Compare the largest and smallest numbers.
  2. If the result is the one you're looking for, stop.
  3. If the result is larger, go back to step one with the second largest number.
  4. If the result is smaller, go back to step one with the second smallest number.

Using this technique we only need to make 3 comparisons.

* That's not the worst case scenario though. That owuld again be where none of them add to the desired number.


## Follow the Pattern of Comparison for 73

  21 + 56 = 77 (too big)
  21 + 46 = 67 (too small)
  25 + 46 = 71 (too small)
  32 + 46 = 78 (too big)
  32 + 45 = 77 (too big)
  32 + 32 = 64 (too small)

  That is 6 comparisons. 