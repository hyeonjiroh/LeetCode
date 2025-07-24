/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const answer = [[], []];

    for (let i of set1) {
        if (!set2.has(i)) {
            answer[0].push(i);
        }
    }

    for (let i of set2) {
        if (!set1.has(i)) {
            answer[1].push(i);
        }
    }

    return answer;
};