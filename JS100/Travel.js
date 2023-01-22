let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function cities(element, arr) {
  let includedCity = arr.filter(city => city === element);
  return includedCity.toString() ? true : false;
}

console.log(cities("Barcelona", destinations));


//LS solution
/*

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

or

function contains(element, list) {
  return list.indexOf(element) >= 0;
}


*/