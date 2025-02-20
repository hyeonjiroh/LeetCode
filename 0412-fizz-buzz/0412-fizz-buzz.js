/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var result = [];

    for (var i = 0; i < n; i++) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
            result[i] = "FizzBuzz";
        } else if ((i + 1) % 3 === 0 && (i + 1) % 5 !== 0) {
            result[i] = "Fizz";
        } else if ((i + 1) % 3 !== 0 && (i + 1) % 5 === 0) {
            result[i] = "Buzz";
        } else {
            result[i] = String(i + 1);
        }
    }

    return result;
};