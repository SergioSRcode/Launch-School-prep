let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(element => element.length).filter(value => value % 2 !== 0);
}

// solution Launch School
/*
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}
*/

console.log(oddLengths(arr)); // => [1, 5, 3]