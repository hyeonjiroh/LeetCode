/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sumNums = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j >= 0; j--) {
            sum += nums[j];
        }
        sumNums[i] = sum;
    }
    return sumNums;
};