let array = [3, 5, 7];

function sumOfSquares(arr) {
  // get the squares of the array
  let squares = arr.map(num => num * num);
  // get the sum of all squares
  let sum = squares.reduce((accumulator, element) => accumulator + element, 0);
  return sum;
}

console.log(sumOfSquares(array)); // => 83


// LS solution
/*
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}
*/