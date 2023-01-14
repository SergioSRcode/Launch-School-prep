// what does this code log to the console and why?
let array1 = [1, 2, 3];  // initialized arr1
let array2 = array1;  // assigned arr2 to arr1
array1[1] = 4; // number 2 in arr1 gets replaced by number 4
console.log(array2); // logging arr2 to the console

// => 1, 4, 3 since the arr2 and arr 1 point to the same array in memory
// hence they are susceptible to any changes to said array.