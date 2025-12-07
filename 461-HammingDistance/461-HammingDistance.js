// Last updated: 07/12/2025, 20:22:41
1/**
2 * @param {number} x
3 * @param {number} y
4 * @return {number}
5 */
6var hammingDistance = function(x, y) {
7    let binary_x = x.toString(2);
8    let binary_y = y.toString(2);
9    
10    let maxLen = Math.max(binary_x.length, binary_y.length);
11    binary_x = binary_x.padStart(maxLen, "0");
12    binary_y = binary_y.padStart(maxLen, "0");
13
14    let output = 0;
15
16    for (let i = 0; i < maxLen; i++) {
17        if (binary_x[i] !== binary_y[i]) {
18            output++;
19        }
20    }
21
22    return output;
23};
24