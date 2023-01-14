function stringAsArgument(str) {
  if (str.length < 10) {
    return str;
  } else {
    return str.toUpperCase();
  }
}

console.log(stringAsArgument("Hello World"));
console.log(stringAsArgument("goodbye"));
