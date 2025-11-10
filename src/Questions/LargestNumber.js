function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  let n = arr.length;
  if (n == 0) return null;
  let max;
  for (let value of arr) {
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (max == undefined || value > max) max = value;
  }
  return max
}

module.exports = { findLargest };
