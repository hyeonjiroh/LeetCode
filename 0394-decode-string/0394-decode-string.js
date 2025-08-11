/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let currStr = '';
    let currNum = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (s[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (s[i] >= '0' && s[i] <= '9') {
            currNum = currNum * 10 + Number(s[i]);
        } else {
            currStr += s[i];
        }
    }

    return currStr;
};