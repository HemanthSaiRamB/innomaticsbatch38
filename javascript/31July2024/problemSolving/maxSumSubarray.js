//problem solving
//print maxsum of subarray of size k
//159
//242
//155
//137
//148
// array = [4,90,20,45,87,3,2,56]
function maxSumSubarry(array, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += array[i]
    }
    maxSum = windowSum
    for (let i = k; i < array.length; i++) {
        windowSum = (windowSum - array[i - k]) + array[i]
        if (windowSum > maxSum)
            maxSum = windowSum
    }
    return maxSum
}
console.log(maxSumSubarry([4, 90, 20, 45, 87, 3, 2, 56], 4))