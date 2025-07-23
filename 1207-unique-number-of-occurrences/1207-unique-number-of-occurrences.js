/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const countMap = {};

    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const frequencies = Object.values(countMap);

    const unique = new Set(frequencies);

    return frequencies.length === unique.size;
};