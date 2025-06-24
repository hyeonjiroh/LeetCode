/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 != str2 + str1)
        return "";

    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

    let length = gcd(str1.length, str2.length);

    return str1.slice(0,length);
};