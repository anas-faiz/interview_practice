function findSmallest(arr) {
  // your solution here
  if(!Array.isArray(arr)) return false

  let n = arr.length;

  if (n <= 0) return null;
  let min;
  for (let i = 0; i < n; i++){
    let value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (min == undefined || value < min) min = value;
  }
  return min;
}

module.exports = { findSmallest };