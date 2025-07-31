/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxAmount = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);

        const currentAmount = width * minHeight;
        maxAmount = Math.max(currentAmount, maxAmount);

        height[left] < height[right] ? left++ : right--;
    }

    return maxAmount;
};