// Last updated: 08/04/2026, 00:00:43
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    const seen = new Map();
8
9    for(let i =0;i<numbers.length;i++){
10        const complement = target - numbers[i]
11
12        if(seen.has(complement)){
13            return [seen.get(complement)+1,i+1]
14        }
15        seen.set(numbers[i],i)
16
17    }
18    return null
19};