// Last updated: 30/11/2025, 22:58:14
1/**
2 * @param {number} n
3 * @return {string[]}
4 */
5var fizzBuzz = function(n) {
6    let answer = []
7    for(let i =1;i<=n;i++){
8        if (i % 3 === 0 && i % 5 === 0){
9            answer.push("FizzBuzz")
10        }
11        else if (i % 3 === 0){
12            answer.push("Fizz")
13        }
14        else if (i % 5 === 0){
15            answer.push("Buzz")
16        }
17        else{
18        answer.push(`${i}`)
19        }
20    }
21    return answer
22};