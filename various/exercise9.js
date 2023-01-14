function minus0(number) {
  if (1 / number === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(minus0(0));