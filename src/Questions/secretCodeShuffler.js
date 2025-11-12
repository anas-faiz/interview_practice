function decodeSecretCode(s) {

  if (!s) return "";
  
  let n = s.length;

  if (n == 0 || n % 2 !== 0) return "";

  let result = "";

  for (let i = 0; i < n; i+=2){

    let letter = s[i];
    let shift = parseInt(s[i + 1]);

    if (letter >= 'a' && letter <= 'z') {
      let decodedchar = letter.charCodeAt(0) + shift;
      result += String.fromCharCode(decodedchar);
    }

  }
  return result;
}

module.exports = { decodeSecretCode };
