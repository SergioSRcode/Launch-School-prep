// Which of the following values are primitive values? Which are objects? Which are neither?

"foo"  // => primitive value (String)
3.1415 // => primitive value (Number)
[ 'a', 'b', 'c' ] // => Object (Array)
false // => primitive value (Boolean)
foo // => neither (Identifier)
function bar() { return "bar"; } // => Object (function)
undefined // => primitive value (undefined)
{ a: 1, b: 2 } // => Object (simple Object)