/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let waterAmount = 0;
    let maxAmount = 0;

    while (start < end) {
        let width = end - start;
        let minHeight = Math.min(height[start], height[end]);

        waterAmount = width * minHeight;
        maxAmount = Math.max(waterAmount, maxAmount);

        height[start] < height[end] ? start++ : end--;
    }

    return maxAmount;
};