// Last updated: 07/04/2026, 23:02:21
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let count = 0
    let left = 0

    for(let right=0;right<s.length;right++){
        let char = s[right]

        while (set.has(char)) {
            set.delete(s[left]);
            left++;
        }

        set.add(char)

        count = Math.max(count,right-left+1)
    }
    return count
};