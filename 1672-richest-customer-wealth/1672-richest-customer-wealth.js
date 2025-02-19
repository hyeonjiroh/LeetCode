/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let wealth = 0;
    let highestWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        if (wealth > highestWealth) {
            highestWealth = wealth;
        }
        wealth = 0;
    }
    return highestWealth;
};