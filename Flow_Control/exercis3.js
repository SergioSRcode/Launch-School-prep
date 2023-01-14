
let evenOrOdd = num => {
  if ((Number.isInteger(num) === true) && (num % 2 === 0)) {
    console.log("even");
  } else if ((Number.isInteger(num) === true) && (num % 2 !== 0)) {
    console.log("odd");
  } else {
    console.log("error, Number not an integer");
    return;
  }
}

evenOrOdd(2);
evenOrOdd(1);
evenOrOdd(2.223);

/* predefined solution ->

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/