let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// first try, am I good or what? ;P

let evenOdd = myArray.map(num => {
  if (num % 2 === 0) {
    return "even";
  } else {
      return "odd";
  }
});

console.log(evenOdd);