// Last updated: 12/12/2025, 02:10:55
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

    let hay = haystack.split("");
    let need = needle.split("");

    for (let i = 0; i <= hay.length; i++) {
        if (hay[i] === need[0]) {
            let match = true;

            for (let j = 0; j < need.length; j++) {
                if (hay[i + j] !== need[j]) {
                    match = false;
                    break;
                }
            }

            if (match) return i;
        }
    }

    return -1;
};


