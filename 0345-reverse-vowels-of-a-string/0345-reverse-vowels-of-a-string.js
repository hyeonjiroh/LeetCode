/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (!vowels.includes(s[start])) {
            start++;
            continue;
        }

        if (!vowels.includes(s[end])) {
            end--;
            continue;
        }

        [arr[start], arr[end]] = [arr[end], arr[start]];

        start++;
        end--;
    }

    return arr.join('');
};