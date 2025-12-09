// Last updated: 09/12/2025, 18:28:37
1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6    let reference = strs[0];
7    let output = "";
8
9    for (let i = 0; i < reference.length; i++) {
10        let char = reference[i];
11
12        for (let j = 1; j < strs.length; j++) {
13            if (i >= strs[j].length || strs[j][i] !== char) {
14                return output;
15            }
16        }
17
18        output += char;
19    }
20
21    return output;
22};
23