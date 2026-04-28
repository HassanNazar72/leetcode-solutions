// Last updated: 28/04/2026, 23:37:59
1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6
7    let map = {};
8
9    for (let word of strs) {
10
11        // create 26 zeros for each letter a-z
12        let count = new Array(26).fill(0);
13
14        // count each letter in the word
15        for (let char of word) {
16            let index = char.charCodeAt(0) - 97;
17            count[index] = count[index] + 1;
18        }
19
20        // turn count array into a string key
21        let key = count.join(",");
22
23        // if key doesn't exist yet, create empty array
24        if (!map[key]) {
25            map[key] = [];
26        }
27
28        // add the word to its group
29        map[key].push(word);
30    }
31
32    return Object.values(map);
33};
34
35
36