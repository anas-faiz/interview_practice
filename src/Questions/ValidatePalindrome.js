function validatePalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome