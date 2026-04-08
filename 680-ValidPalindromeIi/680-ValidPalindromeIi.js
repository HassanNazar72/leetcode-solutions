// Last updated: 09/04/2026, 00:07:21
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1)
        }
        left++
        right--
    }
    return true
};

function isPalindrome(s, left, right){
    while(left < right){
        if(s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}