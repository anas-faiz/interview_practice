function searchRotatedArray(nums, target) {
    // Your implementation
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) return mid;

        if (nums[low] < nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else{
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
    }
        return -1

}

//For the purpose of user debugging.
//pass your array and target in function call
//searchRotatedArray();
module.exports = searchRotatedArray