function isBlank(string) {
  if (string) {
    return false;
  } else {
    return true;
  }
}

//LS solution takes even non-string values into account! === better solution
// return string.length === 0;

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true