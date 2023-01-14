function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))


add(subtract(80, 10) /*70*/, times(subtract(20, 6) /* 14 */, add(30, 5) /* 35 */) /* 490 */); // => 560