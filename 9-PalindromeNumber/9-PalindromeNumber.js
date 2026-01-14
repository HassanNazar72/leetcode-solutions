// Last updated: 14/01/2026, 21:23:29
1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5var isPalindrome = function(x) {
6    let count = 0
7    let arr = Array.from(String(x));
8
9    for(let i =0;i<arr.length;i++){
10        if(arr[i]==arr[arr.length-1-i]){
11            count += 1
12        } 
13    }
14    if(count == arr.length){
15        return true
16    }
17    else{
18        return false
19    }
20};