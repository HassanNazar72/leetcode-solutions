// Last updated: 12/12/2025, 02:10:54
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let single = s.split("");
    let word = [];
    let collecting = false;

    while (single[single.length - 1] === " ") {
        single.pop();
    }

    for (let i = 0; i < single.length; i++) {

        if (single[i] === " ") {
            collecting = true;
            word = [];
            continue;
        }
        if (collecting || !collecting) {
            word.push(single[i]);
        }
    }

    return word.length;
};



