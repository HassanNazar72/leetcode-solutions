// Last updated: 07/04/2026, 23:02:10
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pmap = new Map();
    const windowmap = new Map();
    const output = [];

    // build pmap from p
    for (const char of p) {
        pmap.set(char, (pmap.get(char) || 0) + 1);
    }

    // build first window
    for (let i = 0; i < p.length; i++) {
        windowmap.set(s[i], (windowmap.get(s[i]) || 0) + 1);
    }

    // check first window
    if (mapsEqual(pmap, windowmap)) output.push(0);

    // slide window across s
    for (let right = p.length; right < s.length; right++) {
        const left = right - p.length;

        // add new right character
        windowmap.set(s[right], (windowmap.get(s[right]) || 0) + 1);

        // remove old left character
        windowmap.set(s[left], windowmap.get(s[left]) - 1);
        if (windowmap.get(s[left]) === 0) windowmap.delete(s[left]);

        // check if current window is anagram
        if (mapsEqual(pmap, windowmap)) output.push(left + 1);
    }

    return output;
};

function mapsEqual(pmap, windowmap) {
    for (const [char, count] of pmap) {
        if (windowmap.get(char) !== count) return false;
    }
    return true;
}
