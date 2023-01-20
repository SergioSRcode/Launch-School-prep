greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

function greet(isoCode) {
  switch (isoCode) {
    case "en" :
      console.log("Hi!");
      return "Hi!";
      //break;
    case "fr" :
      console.log("Salut!");
      return "Salut!";
      //break;
    case "pt" :
      console.log("Olá!");
      return "Olá!";
      //break;
    case "de" :
      console.log("Hallo");
      return "Hallo";
      //break;
    case "sv" :
      console.log("Hej !");
      return "Hey !";
      //break;
    case "af" :
      console.log("Haai!");
      return "Haai!";
      //break;
  }
}