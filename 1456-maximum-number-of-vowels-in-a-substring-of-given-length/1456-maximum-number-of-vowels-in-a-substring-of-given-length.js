/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < s.length; i++) {
        if ('aeiou'.includes(s[i])) {
            count++;
        }

        if (i >= k - 1) {
            maxCount = Math.max(count, maxCount);
            if ('aeiou'.includes(s[i - (k - 1)])) {
                count--;
            }
        }
    }

    return maxCount;
};