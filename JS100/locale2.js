console.log(extractLanguage('en_US.UTF-8'));  // 'US'
console.log(extractLanguage('en_GB.UTF-8'));  // 'GB'
console.log(extractLanguage('ko_KR.UTF-16')); // 'KR'

function extractLanguage(code) {
  let arr = code.split(".").join("_");
  return arr.split("_")[1];
}

//ls solution
/*

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

*/