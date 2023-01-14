let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


// solution 1: Using a loop for every array
/*
for (let i = 0; i < myArray[0].length; i += 1) {
  let evenValue = myArray[0][i];
  if (evenValue % 2 === 0) {
    console.log(evenValue);
  }
}

for (let i = 0; i < myArray[1].length; i += 1) {
  let evenValue = myArray[1][i];
  if (evenValue % 2 === 0) {
    console.log(evenValue);
  }
}

for (let i = 0; i < myArray[2].length; i += 1) {
  let evenValue = myArray[2][i];
  if (evenValue % 2 === 0) {
    console.log(evenValue);
  }
}
*/


// solution 2: Using forEach for every array
/*
myArray[0].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[1].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[2].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});
*/

// ingenius solution Launch School

myArray.forEach(nestedArray => {
  nestedArray.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});