// Last updated: 05/05/2026, 22:47:07
1/**
2 * @param {number} n
3 * @return {string[]}
4 */
5var fizzBuzz = function(n) {
6    let answer = []
7    let i = 1
8    while(i<=n){
9        if (i % 3 === 0 && i % 5 === 0){
10            answer.push("FizzBuzz")
11        }
12        else if (i % 3 === 0){
13            answer.push("Fizz")
14        }
15        else if (i % 5 === 0){
16            answer.push("Buzz")
17        }
18        else{
19        answer.push(`${i}`)
20        }
21        i++
22    }
23    return answer
24};