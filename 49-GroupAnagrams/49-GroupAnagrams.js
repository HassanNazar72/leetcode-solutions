// Last updated: 03/12/2025, 20:43:34
1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    let map = {};
7
8    for (let i = 0; i < strs.length; i++) {
9        let chars = strs[i].split("");
10        let sorted = chars.sort().join("");
11
12        if (!map[sorted]) {
13            map[sorted] = [];
14        }
15
16        map[sorted].push(strs[i]);
17    }
18
19    let output = Object.values(map);
20
21    console.log(JSON.stringify(output));
22    return output;
23};
24
25
26