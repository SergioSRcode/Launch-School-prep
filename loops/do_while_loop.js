let answers;
let rlSync = require("readline-sync");

do {
  answers = rlSync.question("do you want to do that again?");
} while (answers === "y");