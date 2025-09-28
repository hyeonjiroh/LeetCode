/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let m = potions.length;

    let minSpells = [];
    let pairs = [];

    for (let potion of potions) {
        minSpells.push(Math.ceil(success / potion));
    }

    minSpells.sort((a, b) => a - b);

    for (let spell of spells) {
        let low = 0;
        let high = m - 1;
        let count = 0;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (minSpells[mid] <= spell) {
                low = mid + 1;
                count = low;
            } else {
                high = mid - 1;
            }
        }

        pairs.push(count);
    }

    return pairs;
};