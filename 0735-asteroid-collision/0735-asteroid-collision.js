/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const curr = asteroids[i];
        const top = stack[stack.length - 1];

        if ((!stack.length || top < 0 || curr > 0)) {
            stack.push(curr);
        } else if (Math.abs(top) === Math.abs(curr)) {
            stack.pop();
        } else if (Math.abs(top) < Math.abs(curr)) {
            stack.pop();
            i--;
        }
    }

    return stack;
}