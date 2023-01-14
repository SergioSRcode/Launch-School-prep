/*
function multiplyTwoNums(prompt1, prompt2) {
  let rlSync = require("readline-sync");
  let num1 = rlSync.question(prompt1);
  let num2 = rlSync.question(prompt2);
  let result = Number(num1 * num2);
  console.log(num1 + " * " + num2 + " = " + result);
}

multiplyTwoNums("First number: ", "second number: ");
*/

let multiply = (num1, num2) => num1 * num2;

function userInput(input) {
  let rlSync = require("readline-sync");
  let num = Number(rlSync.question(input));
  return num;
}

let num1 = userInput("first Number: ");
let num2 = userInput("second Number: ");
let result = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${result}`);
