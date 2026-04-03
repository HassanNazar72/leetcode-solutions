// Last updated: 03/04/2026, 22:58:00
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (sorted[i] !== heights[i]) count++;
    }
    return count;
};
