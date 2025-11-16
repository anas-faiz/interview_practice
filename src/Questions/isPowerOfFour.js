function isPowerOfFour(n) {
  // your function implementation
  let x = 0;
  if (!Number.isInteger(n)) return false;

  if (n <= 0) return false;

  for (x; x < n; x++){
    if (n >= (4 ** x)) {
      if (n == (4 ** x)) return true;
    } else {
      return false;
    }
}
}

module.exports = { isPowerOfFour };