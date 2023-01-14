let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);

console.log(`You are ${age} years old.`);

for(let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}



/*
let confAge = `You are ${age} years old.`;
let ageIn10Y = `In 10 years, you will be ${age + 10} years old.`;
let ageIn20Y = `In 20 years, you will be ${age + 20} years old.`;
let ageIn30Y = `In 30 years, you will be ${age + 30} years old.`;
let ageIn40Y = `In 40 years, you will be ${age + 40} years old.`;

const futureAge = [confAge, ageIn10Y, ageIn20Y, ageIn30Y, ageIn40Y];

for (let i = 0; i < futureAge.length; i += 1) {
  console.log(futureAge[i]);
}
*/

/*
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/
