let numbers1 = [1, 3, 5, 7, 9, 11];  // true
let numbers2 = []; // false
let numbers3 = [2, 4, 6, 8]; // false

function check(arr) {
  return arr.includes(3) ? true : false;
}

console.log(check(numbers1));
console.log(check(numbers2));
console.log(check(numbers3));

