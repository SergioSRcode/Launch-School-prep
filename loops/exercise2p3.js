
// product get updated with each iteration and keeps multiplying by i as long as i < 0.
let factorial = (n) => {
  let product = 1; // set to 1 for first multiplication to return n (1 * 5)
  while (n > 0) {
    product *= n;
    factorial(n -= 1);
  }
  return product;
}
  /*
  for (let i = n; i > 0; i -= 1) { // i gets decremented by 1 with each iteration
    product *= i; // 1 * 5 = 5 -> 5 * 4 = 20 -> 20 * 3 = 60 -> 60 * 2 = 120 -> 120 * 1 = 120
  }
  return product;
}
*/

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
