// Last updated: 30/11/2025, 23:38:30
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = "";
    let groups = [];

    let current = "";
    for (let i = 0; i < s.length; i++) {
        current += s[i];

        if (current.length === k) {
            groups.push(current);
            current = "";
        }
    }
    if (current.length > 0) groups.push(current);

    for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        if (i % 2 === 0) {
            let reversed = "";
            for (let j = group.length - 1; j >= 0; j--) {
                reversed += group[j];
            }

            result += reversed;
        } else {
            result += group;
        }
    }

    return result;
};


