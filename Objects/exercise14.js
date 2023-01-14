function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


//variables:
/*
1. hello
2. greeting
3. name
4. greeting
5. name

1. xyzzy

1. howdy
2. foo
3. xyzzy
*/   // => success

// object property names
/*

-

1. a: 1
2. b: 2
3. c: []
4. d: {}

-

*/  // => almost -> Array property names missing (indexes)

// primitive values
/*

1. " "
2. "hi" value of greetings
3. "Grace" value of name

1. 1 = value of a
2. 2 = value of b
3. 3 = values inside array of c
4. 4 = values inside array of c
5. 5 = values inside array of c

1. "Hi"
2. "Grace"

*/  // => undefined (assigned to abc by default) and object property names = strings

//Objects
/*
1. function hello

1. function xyzzy
2. Array 3, 4, 5 (value of c)
3. Object literal (value of d)
4. return object

1. function hello
2. function xyzzy


*/ // => success