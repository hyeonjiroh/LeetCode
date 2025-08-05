/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    const count1 = new Map();
    const count2 = new Map();

    for (let char of word1) {
        count1.set(char, (count1.get(char) || 0) + 1);
    }

    for (let char of word2) {
        count2.set(char, (count2.get(char) || 0) + 1);
    }

    // 문자 종류 같은지 확인
    const keys1 = Array.from(count1.keys()).sort();
    const keys2 = Array.from(count2.keys()).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) {
            return false;
        }
    }

    // 문자 등장 빈도 같은지 확인
    const freq1 = Array.from(count1.values()).sort((a, b) => a - b);
    const freq2 = Array.from(count2.values()).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
};