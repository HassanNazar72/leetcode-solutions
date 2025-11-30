// Last updated: 30/11/2025, 23:35:47
1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {string}
5 */
6var reverseStr = function(s, k) {
7    let result = "";
8    let groups = [];
9
10    let current = "";
11    for (let i = 0; i < s.length; i++) {
12        current += s[i];
13
14        if (current.length === k) {
15            groups.push(current);
16            current = "";
17        }
18    }
19    if (current.length > 0) groups.push(current);
20
21    for (let i = 0; i < groups.length; i++) {
22        let group = groups[i];
23        if (i % 2 === 0) {
24            let reversed = "";
25            for (let j = group.length - 1; j >= 0; j--) {
26                reversed += group[j];
27            }
28
29            result += reversed;
30        } else {
31            result += group;
32        }
33    }
34
35    return result;
36};
37
38
39