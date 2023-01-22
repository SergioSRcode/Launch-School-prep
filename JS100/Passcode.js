let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'


// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'



/* my crazy solution

function combinePasscode(arr) {
  let result = "";
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      result += arr[i];
    } else {
      result += arr[i] + "-";
    }
  }
  
  return result;
}

console.log(combinePasscode(passcode));

*/