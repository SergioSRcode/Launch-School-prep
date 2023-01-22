let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

//groceryList; // []


function grList(arr) {
  while (arr.length > 0) {
    console.log(arr.shift());
  }
}

grList(groceryList);

console.log(groceryList)

