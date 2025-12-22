// Last updated: 22/12/2025, 22:55:23
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6  const open_bracket = ['(', '{', '['];
7  const close_bracket = [')', '}', ']'];
8  const stack = [];
9
10  for (let i = 0; i < s.length; i++) {
11    const ch = s[i];
12
13    // 1) If it's an opening bracket, add it to the top of stack
14    if (open_bracket.includes(ch)) {
15      stack.push(ch);
16      continue;
17    }
18
19    // 2) If it's a closing bracket, get its index
20    const closeIndex = close_bracket.indexOf(ch);
21    if (closeIndex === -1) return false;     // not a bracket (optional guard)
22    if (stack.length === 0) return false;    // nothing to match
23
24    // 3) Check top of stack: does its open index match the close index?
25    const top = stack[stack.length - 1];     // top of stack (do not remove yet)
26    const openIndex = open_bracket.indexOf(top);
27
28    if (openIndex === closeIndex) {
29      stack.pop();                           // match -> remove the open bracket
30    } else {
31      return false;                          // mismatch
32    }
33  }
34
35  // valid only if no unmatched opens left
36  return stack.length === 0;
37};
38
39