let array1 = [1, 2, undefined, 4]; // => length 4

let array2 = [1];
array2.length = 5; // => length 5 (with 4 unset values)

let array3 = []; // => length 0 (no values)
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; // => length 3 (1, 2, 3)
array4.length = 3;

let array5 = []; // => length 101
array5[100] = 3;