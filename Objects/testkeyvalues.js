let person = {
  name: "Bob",
  age: 25,
  height: "6 ft",
};

let personKeys = Object.keys(person);  // personKeys turns to an array of the object's keys.
console.log(personKeys); // logging all keys to the console.
personKeys.forEach(key => console.log(person[key])); // iterating through the new array printing the key values.

