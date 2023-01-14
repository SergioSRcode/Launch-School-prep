let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3
          //    4
          //    1
          //    2

// the for/in loop actually iterates over the properties of an objects prototypes as well.
// first will be the "own properties" next the properties of the prototype object (inherited properties).
/*
To avoid that, we can use the "hasOwnProperty" method in a conditional statement:

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}                 // => 3
                  // => 4


*/