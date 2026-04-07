// Last updated: 07/04/2026, 18:17:22
1/**
2 * @param {string} s
3 * @param {string} p
4 * @return {number[]}
5 */
6var findAnagrams = function(s, p) {
7    const pmap = new Map();
8    const windowmap = new Map();
9    const output = [];
10
11    // build pmap from p
12    for (const char of p) {
13        pmap.set(char, (pmap.get(char) || 0) + 1);
14    }
15
16    // build first window
17    for (let i = 0; i < p.length; i++) {
18        windowmap.set(s[i], (windowmap.get(s[i]) || 0) + 1);
19    }
20
21    // check first window
22    if (mapsEqual(pmap, windowmap)) output.push(0);
23
24    // slide window across s
25    for (let right = p.length; right < s.length; right++) {
26        const left = right - p.length;
27
28        // add new right character
29        windowmap.set(s[right], (windowmap.get(s[right]) || 0) + 1);
30
31        // remove old left character
32        windowmap.set(s[left], windowmap.get(s[left]) - 1);
33        if (windowmap.get(s[left]) === 0) windowmap.delete(s[left]);
34
35        // check if current window is anagram
36        if (mapsEqual(pmap, windowmap)) output.push(left + 1);
37    }
38
39    return output;
40};
41
42function mapsEqual(pmap, windowmap) {
43    for (const [char, count] of pmap) {
44        if (windowmap.get(char) !== count) return false;
45    }
46    return true;
47}
48