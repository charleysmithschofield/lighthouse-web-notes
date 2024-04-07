# Complexity: Elementary Operations and Running Time - Reading


## Learning Outcomes
  - can identify when an algorithm takes constant time and when it doesn't
  - can understand that the run time of an algorithm depends on the number of elementary operations it does
  - can identify the run time of an algorithm


## Intro to Algorithm Complexity

  - algorithmic complexity: how fast or slow a particular algorithm is.

Computer algorithms could run on an endless variety of different computers,
languages and operating systems, making it difficult to determine how long
an algorithm would actually take to run.

Even something simple like adding number1 + number2 could take 0.0001 seconds
in C on a brand new iPhone running the latest iOS version, but 0.5 seconds in
Python on an old Raspberry Pi.

 
##  Measuring the Speed of an Algorithm

We measure its speed by counting the number of elementary operations. The #
of operations that are so simple that they take a constant amount of time to
performs.

Each of the following are Elementary Operations:

  - let number = 0;
  - number += 2;
  - console.log(number);

We can count up all the elementary operations that an algorithm performs and
call that its running time.

So if an algorithm performs n elementary operations, we say the running time
is n.


See Elementary Operations in this directory for further info!4