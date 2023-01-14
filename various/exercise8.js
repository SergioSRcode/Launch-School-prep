// only "NaN" doesn't return "true" when comparing to itself, 
// so we can just reverse the comparison.
function isNotANumber(value) {
  return value !== value;
}

/*
function isNotANumber(value) {
  let strValue = value.toString();
  if (strValue === "NaN") {
    return true;
  } else {
    return false;
  }
}
*/

console.log(isNotANumber(NaN));
console.log(isNotANumber(5));
console.log(isNotANumber(null));
console.log(isNotANumber(undefined));