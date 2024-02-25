
// Pair Programming There is No Spoon
//contributors @kimodell and @charleysmithschofield

/*
You'll be ma

Note that we've included a printMatrix function, which nicely prints out your 2D arrays.

*/
//contributors @kimodell and @charleysmithschofield


// Define the tranpose function with matrix array as its argument.
const transpose = function(matrix) {

  // Initializing the dimensions of the rows and columns.
  let rows = matrix.length;
  let columns = matrix[0].length;

  // Initializing an empty array to store newMatrix result.
  const newMatrix = [];

  // For loop to iterate through columns.
  for (let i = 0; i < columns; i++) {
    // Making new row in newMatrix
    newMatrix[i] = [];
    // For loop to iterate through rows.
    for (let j = 0; j < rows; j++) {
      // Transposing / Switching columns and rows.
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));