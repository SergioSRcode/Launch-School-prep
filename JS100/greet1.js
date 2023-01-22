function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}

console.log(greet('Salutations')); // logs: Salutations, world!

console.log(greet());              // logs: undefined, world!
                      // should log: Hello, world!
console.log(greet(undefined));    // logs: Hello, world! since the value undefined is omitted.