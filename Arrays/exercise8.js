let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(arr) {
  return arr.reduce((acc, num) => {
   let length = num.length;
   if (length % 2 === 1) {
    acc.push(length);
   }
   return acc;
  }, [])
}
  




console.log(oddLengths(arr)); // => [1, 5, 3]