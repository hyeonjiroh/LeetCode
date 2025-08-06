/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let colArr = [];
    let count = 0;

    for (let j = 0; j < grid.length; j++) {
        let col = [];
        for (let i = 0; i < grid.length; i++) {
            col.push(grid[i][j]);
        }
        colArr.push(col);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (isEqualArray(grid[i], colArr[j])) {
                count++;
            }
        }
    }

    return count;
};

var isEqualArray = function (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}