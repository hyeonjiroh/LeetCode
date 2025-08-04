/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        chars[write++] = currentChar;

        if (count > 1) {
            for (const digit of count.toString()) {
                chars[write++] = digit;
            }
        }
    }

    return write;
};