/*
let firstName = prompt("Your first name: ");
let lastName = prompt("Your last name: ")

function concatNames(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(concatNames(firstName, lastName));
*/

function userName(prompt) {
  let rlSync = require("readline-sync");
  return rlSync.question(prompt);
}

let firstName = userName("First name: ");
let lastName = userName("Last name: ");

console.log(firstName + " " + lastName);