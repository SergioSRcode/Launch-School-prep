// convert human age to cat age

function catAge(humanAge) {
  let ageOfCat = "";
  if (humanAge === 1) {
    ageOfCat += 15;
  } else if (humanAge === 2) {
      ageOfCat += 24;
  } else if (humanAge > 2) {
      ageOfCat += (humanAge - 2) * 4 + 24;
  } else {
      ageOfCat = humanAge;
  }
  return ageOfCat;
}


console.log(catAge(0)); // 0
console.log(catAge(1)); //15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

// LS solution

/*

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

*/