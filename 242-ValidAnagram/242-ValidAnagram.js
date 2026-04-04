// Last updated: 04/04/2026, 17:55:41
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    if (s.length !== t.length){
8        return false
9    }
10    const count = new Map()
11
12    for(const char of s){
13        count.set(char, (count.get(char) || 0) + 1);
14    }
15
16    for(const char of t){
17        if(!count.has(char)){return false}
18
19        count.set(char,count.get(char)-1)
20    if (count.get(char) < 0) return false;
21    }
22    return true
23};