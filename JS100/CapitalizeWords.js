function capitalizeS(string) {
  let arr = string.split(" ");
  let firstLetter = arr.map(word => word.charAt(0).toUpperCase());
  let remainingLetters = arr.map(remWords => remWords.slice(1));
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result += firstLetter[i] + remainingLetters[i] + " ";
  } 
  return result
}

console.log(capitalizeS("launch school tech & talk"));