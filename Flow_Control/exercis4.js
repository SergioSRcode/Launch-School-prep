// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1'); // false
    case '113':
      console.log('Product2'); // execution starts, product2 -> console
    case '142':
      console.log('Product3'); // logs "Procuct3"
    default:
      console.log('Product not found!'); // logs "P not found"
  }
}

barCodeScanner('113');