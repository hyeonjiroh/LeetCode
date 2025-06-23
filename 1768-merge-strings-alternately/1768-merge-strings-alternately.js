/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedWord = [];

    for (let i = 0; i < word1.length; i++) {
        mergedWord[i * 2] = word1[i];
    }

    for (let i = 0; i < word2.length; i++) {
        mergedWord[i * 2 + 1] = word2[i];
    }

    return mergedWord.join('');
};