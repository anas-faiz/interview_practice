function findMaxNumber(arr) {
    // Your implementation
    let n = arr.length;

    if (n == 0) return null;

    let max = arr[0];

    for (let i = 0; i < n; i++) {
        let value = arr[i];
        if (value > max) max = value;
    }
    return max;
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);
