// Last updated: 25/01/2026, 18:30:35
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let count = 0
7    const result = s
8  .toLowerCase()              // convert to lowercase
9  .replace(/[^a-z0-9]/g, ''); // remove non-alphanumeric characters
10    for(let i=0;i<result.length;i++){
11        if(result[i]==result[result.length-1-i]){
12            console.log(result[i],result[result.length-1-i])
13            count += 1
14        }
15    }
16    if(count==result.length){
17        return true
18    }
19    else{
20        return false
21    }
22};