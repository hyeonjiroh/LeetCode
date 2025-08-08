/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const curr = asteroids[i];
        let collided = false;

        while (asteroids.length > 0 && stack[stack.length - 1] > 0 && curr < 0) {
            const top = stack[stack.length - 1];

            if (Math.abs(top) < Math.abs(curr)) {
                stack.pop();
            } else if (Math.abs(top) === Math.abs(curr)) {
                stack.pop();
                collided = true;
                break;
            } else {
                collided = true;
                break;
            }
        }

        if (!collided) {
            stack.push(curr);
        }
    }

    return stack;
}
