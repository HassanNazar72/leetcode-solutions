// Last updated: 05/12/2025, 23:46:57
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7    if (needle.length === 0) return 0;
8
9    let hay = haystack.split("");
10    let need = needle.split("");
11
12    for (let i = 0; i <= hay.length; i++) {
13        if (hay[i] === need[0]) {
14            let match = true;
15
16            for (let j = 0; j < need.length; j++) {
17                if (hay[i + j] !== need[j]) {
18                    match = false;
19                    break;
20                }
21            }
22
23            if (match) return i;
24        }
25    }
26
27    return -1;
28};
29
30
31