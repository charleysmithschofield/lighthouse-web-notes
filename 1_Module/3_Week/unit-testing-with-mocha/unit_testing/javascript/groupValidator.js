/*
What Are We Testing?
Let’s create a function that’s easy to test.
Common examples of tests usually feature input validations.

To keep it simple, let’s imagine people working together on a group project.
The names of the group members will be stored in an array of strings like:

[“A”, “B”, “C”]

For this project, groups can have 2, 3, 4, or 5 people.

We will use the length property to get a numerical value and compare it to
numbers we know should (or shouldn’t) work.
*/

exports.isGroupValid = function(array) {
  if (array.length >= 6) {
    return false;
  } else if (array.length <= 1) {
    return false;
  } else {
    return true;
  }
};

/*
  What does this code do?
    - This code determines if a group is valid, it has a couple of conditions
      that would indicate that the group is not valid if:

      - it has 6 or more people
      - it has 1 or less than 1 person
      - otherwise the group is valid, which would includ 2, 3, 4, or 5 people

  What does it take in?
    - and array of numbers

  What does it output?
    - a boolean value

  Bonus if you can explain the first line:
    - this exports the file, possibly to our test file that we haven't built
      yet. This line also defines the function.
*/

