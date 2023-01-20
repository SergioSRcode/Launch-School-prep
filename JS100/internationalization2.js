console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'


function localGreet(locale) {
  let shortLocale = locale.split(".")[0];
  switch (shortLocale) {
    case "en_US" : return "Hey!";
    case "en_GB" : return "Hello!";
    case "en_AU" : return "Howdy!";
    case "fr_FR" : return "Salut!";
    case "fr_CA" : return "Salut!";
    case "fr_MA" : return "Salut!";
  }
}

// LS solution

/*
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
*/