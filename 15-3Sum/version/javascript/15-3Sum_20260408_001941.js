// Last updated: 08/04/2026, 00:19:41
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    let left = 0;
8    let right = numbers.length - 1;
9
10    while(left < right){
11        const sum = numbers[left] + numbers[right];
12
13        if(sum > target){
14            right--;
15        } else if(sum < target){
16            left++;
17        } else {
18            return [left+1, right+1]; 
19        }
20    }
21};