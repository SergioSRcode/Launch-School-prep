let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenValues = myArray.map(num => {
  if (num % 2 === 0) {
    console.log(num);
    return num; // returning a new array of all the even numbers
  }
});

console.log(evenValues.sort()); // sorting elements within the array