function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


/* 
function randomNumberBetween

1. creates random number
2. max num - min num + 1 === 6
3. multiplies result of 1. and 2. === random number * 6
4. adds min num to result === (random number * 6) + 1
5. round down result number.

while loop

1. declare var "tries" and assign it to value 0
2. declare var "result" and assign it to the return value of calling code. 
3. increment value of var "tries" by 1.

4. while result <= 2 
5. var "result" is assigned to the calling code, calling the function yet again -> generating new random number (next try)
6. increment value of "tries" by 1.

result

1. if loop is falsy --> logs the number of tries (coerced to a string) to the console.
*/

