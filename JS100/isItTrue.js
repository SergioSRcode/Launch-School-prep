let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === "true") {   // important to use the string not the boolean!
    console.log("It's true!");
  }
}