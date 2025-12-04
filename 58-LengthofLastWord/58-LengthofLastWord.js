// Last updated: 04/12/2025, 16:00:54
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    let single = s.split("");
7    let word = [];
8    let collecting = false;
9
10    while (single[single.length - 1] === " ") {
11        single.pop();
12    }
13
14    for (let i = 0; i < single.length; i++) {
15
16        if (single[i] === " ") {
17            collecting = true;
18            word = [];
19            continue;
20        }
21        if (collecting || !collecting) {
22            word.push(single[i]);
23        }
24    }
25
26    return word.length;
27};
28
29
30
31