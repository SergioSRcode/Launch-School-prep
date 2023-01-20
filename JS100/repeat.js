function repeat(i, input) {
  let newInput = "";

  while (i > 0) {
    newInput += input;
    i--;
  }
  
  return newInput;
}

console.log(repeat(3, "ha"));