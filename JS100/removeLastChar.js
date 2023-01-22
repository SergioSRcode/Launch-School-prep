// removing last character of the passed string

function removeLastChar(str) {
  let newStr = str.split("");
  newStr.pop();
  return newStr.join("");
}


console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'


//LS solution
/*

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

*/