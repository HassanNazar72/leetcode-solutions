// Last updated: 28/04/2026, 23:37:49
1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    let map = {};
7  for(let i=0;i<strs.length;i++){
8    let sorted = strs[i].split("").sort().join("")
9
10    if(!map[sorted]){
11        map[sorted] = []
12    }
13    map[sorted].push(strs[i])
14  }
15
16    return Object.values(map);
17};
18
19
20