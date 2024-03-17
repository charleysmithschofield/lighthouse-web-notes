// Loan - Assignment:

/*
Loan Example
In this exercise, we will have a function that creates and returns a promise of
a loan. The loan may or may not come through, based on the allowed credit limit.
*/

/*
* Input: number of dollars to loan out
* Returns: Promise of loan which may or may not fulfill, based on remaining
credit.
* If creditLimit is less than the requested amount, only the remaining limit
is loaned out, otherwise the full amount is loaned out. If $0 remain in the
limit, the loan request is rejected (error!).
*/

let creditLimit = 0;

// Define loanOut function that takes in an amount as it argument
const loanOut = function(amount) {
  // return a new Promise that can be resolved or rejected
  return new Promise((resolve, reject) => {
    // If the creditLimit is less or equal to 0
    if (creditLimit <= 0) {
      // Reject the promise and log insufficient funds message
      reject("Insufficient funds!");
    } else if (creditLimit < amount) {
      // Approve the loan for the credit limit amount
      const approvedAmount = creditLimit;
      // Set credit limit to 0
      creditLimit = 0;
      // Resolve the promise with the approvedAmount
      resolve(approvedAmount);
    } else {
      // Deduct the loan amount from the credit limit
      creditLimit -= amount;
      // resolve the promise with the amount
      resolve(amount);
    }
  });
};

// Log the amount of money you are asking for
console.log("Asking for $150, which should be okay ...");
// Call the loanOut function with the amount of money you are asking for
loanOut(150)
  // If the promise is fulfilled, log the fulfillment message with the amount of money received and the credit limit remaining
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  // If an error is experienced, return an error message with the errror
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });