let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // => Bob
                              //    30
                              //    6 ft

// assigns each key to the variable "prop" with each iteration.
// 1. Iteration => prop === name
// 2. Iteration => prop === age
// 3. Iteration => prop === height

                              