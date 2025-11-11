function countEvens(arr) {
  if (!Array.isArray(arr)) return false;

  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {  // ✅ fixed loop condition
    let input = arr[i];

    if (!Number.isFinite(input)) {
      return false; // stops execution if invalid input
    }

    if (Number.isInteger(input) && input % 2 === 0) evenCount++;
  }

  return evenCount;
}

module.exports = { countEvens };
