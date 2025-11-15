function firstMissingPositive(nums) {
  const n = nums.length;

  // Step 1: Place each number in its correct index
  for (let i = 0; i < n; i++) {
    // Keep swapping until the current number is either:
    // - out of range
    // - or already in its correct position
    while (
      nums[i] > 0 &&
      nums[i] <= n &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const correctIndex = nums[i] - 1;

      // Swap nums[i] with nums[correctIndex]
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Step 2: The first index where index+1 != value is the missing positive
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all above positions correct, answer is n+1
  return n + 1;
}

module.exports = { firstMissingPositive };
