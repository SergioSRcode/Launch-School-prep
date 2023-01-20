console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

function extractLanguage(locale) {
  switch (locale) {
    case "en_US.UTF-8" : return "en";
    case "en_GB.UTF-8" : return "en";
    case "ko_KR.UTF-16" : return "ko";
  }
}

// LS solution = next level
/*

function extractLanguage(locale) {
  return locale.split('_')[0];
}

*/