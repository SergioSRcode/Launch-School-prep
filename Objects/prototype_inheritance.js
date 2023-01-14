let bob = { name: 'Bob', age: 22 };  // creates Object named bob.
// creates new Object und sets the prototype for that object to the object passed in as an argument.
let studentBob = Object.create(bob);  
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'
// the object "studentBob" successfully inherited all the properties from our Object "bob".
// It is therefore able to access the "name" property.

console.log(bob.year); // => "undefined"
// only the child object can access properties of the parent but NOT vice versa.