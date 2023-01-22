let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

const nestedPerson = Object.entries(person);

console.log(nestedPerson);

// alternate solution
/*

let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}

*/