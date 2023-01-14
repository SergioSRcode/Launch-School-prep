let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// create an array of the object's keys
objArray = Object.keys(obj);
console.log(objArray);

// iterate through the array without mutating the obj and coercing each element to uppercase.
let upperKeys = objArray.map(key => key.toUpperCase());
console.log(upperKeys);
