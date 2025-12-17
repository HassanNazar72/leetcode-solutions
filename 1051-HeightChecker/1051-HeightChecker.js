// Last updated: 17/12/2025, 18:15:04
1/**
2 * @param {number[]} heights
3 * @return {number}
4 */
5var heightChecker = function(heights) {
6    const sorted = [...heights].sort((a, b) => a - b);
7    let count = 0;
8
9    for (let i = 0; i < heights.length; i++) {
10        if (sorted[i] !== heights[i]) count++;
11    }
12    return count;
13};
14