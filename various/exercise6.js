let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];



let allMatches = (arr, regEx) => {
  //return arr.map(str => str.match(regEx));
  // return arr.filter((word) => regEx.test(word));
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (regEx.test(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']