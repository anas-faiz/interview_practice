function countNegatives(arr) {
  // implement your solution here
  if (!Array.isArray(arr)) return false
  let count = 0
  for (let i = 0; i < arr.length; i++){
    let value = arr[i];
    if (typeof value != 'number' || !Number.isFinite(value)) return false;
    if (value < 0) {
      count++;
    }
  }
  return count;
}

module.exports = { countNegatives };