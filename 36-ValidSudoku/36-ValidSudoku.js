// Last updated: 24/01/2026, 22:39:05
1/**
2 * @param {character[][]} board
3 * @return {boolean}
4 */
5var isValidSudoku = function(board) {
6    let rows = {};
7    let cols = {};
8    let square = {};
9
10    for (let i = 0; i < board.length; i++) {
11        rows[i] = {};
12        cols[i] = {};
13
14        for (let j = 0; j < board.length; j++) {
15
16            // ROW CHECK
17            let rowVal = board[i][j];
18            if (rowVal !== ".") {
19                if (rows[i][rowVal]) {
20                    return false;
21                }
22                rows[i][rowVal] = true;
23            }
24
25            // COLUMN CHECK
26            let colVal = board[j][i];
27            if (colVal !== ".") {
28                if (cols[i][colVal]) {
29                    return false;
30                }
31                cols[i][colVal] = true;
32            }
33
34            // SQUARE CHECK
35            let squareVal = board[i][j];
36            if (squareVal !== ".") {
37                let squareIndex =
38                    Math.floor(i / 3) * 3 + Math.floor(j / 3);
39
40                if (!square[squareIndex]) {
41                    square[squareIndex] = {};
42                }
43
44                if (square[squareIndex][squareVal]) {
45                    return false;
46                }
47
48                square[squareIndex][squareVal] = true;
49            }
50        }
51    }
52
53    return true;
54};
55
56
57
58