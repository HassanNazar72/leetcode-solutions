// Last updated: 06/04/2026, 23:20:36
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6    const set = new Set();
7    let count = 0
8    let left = 0
9
10    for(let right=0;right<s.length;right++){
11        let char = s[right]
12
13        while (set.has(char)) {
14            set.delete(s[left]);
15            left++;
16        }
17
18        set.add(char)
19
20        count = Math.max(count,right-left+1)
21    }
22    return count
23};