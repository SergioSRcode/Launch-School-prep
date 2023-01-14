function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
1. multiply = global, left/right = local;
2. product = local, left/right = local;
3. product = local;

6. getNumber = global, prompt = local;
7. parseFloat = global, question = global, prompt = local;

10. left = global, getNumber = global;
11. right = global, getNumber = global;
12. console = global, left = global, right = global, multiply = global, left/right = global;
*/