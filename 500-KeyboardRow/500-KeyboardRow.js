// Last updated: 04/12/2025, 23:35:27
1/**
2 * @param {string[]} words
3 * @return {string[]}
4 */
5var findWords = function(words) {
6    let lowered = []
7    let firstrow = "qwertyuiop"
8    let secondrow = "asdfghjkl"
9    let thirdrow = "zxcvbnm"
10    let output = []
11
12    for (let i = 0; i < words.length; i++) {
13        lowered.push(words[i].toLowerCase())
14    }
15
16    for (let i = 0; i < lowered.length; i++) {
17        let splitWord = lowered[i].split("")
18        
19        let inFirst = true
20        let inSecond = true
21        let inThird = true
22        
23        for (let j = 0; j < splitWord.length; j++) {
24            let ch = splitWord[j]
25
26            if (!firstrow.includes(ch)) inFirst = false
27            if (!secondrow.includes(ch)) inSecond = false
28            if (!thirdrow.includes(ch)) inThird = false
29        }
30
31        if (inFirst || inSecond || inThird) {
32            output.push(words[i])
33        }
34    }
35
36    return output
37};
38