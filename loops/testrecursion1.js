function sumRange(number) {
  if (number <= 1) {
    return number;
  }

  return number + sumRange(number - 1);
}

console.log(sumRange(1));
console.log(sumRange(2));
console.log(sumRange(3));
console.log(sumRange(4));
console.log(sumRange(5));