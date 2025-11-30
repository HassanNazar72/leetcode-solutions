// Last updated: 30/11/2025, 22:32:45
var romanToInt = function(s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === "I" && s[i+1] === "V") {
            total += 4;
            i++; 
            continue;
        }
        if (ch === "I" && s[i+1] === "X") {
            total += 9;
            i++; 
            continue;
        }
        if (ch === "X" && s[i+1] === "L") {
            total += 40;
            i++; 
            continue;
        }
        if (ch === "X" && s[i+1] === "C") {
            total += 90;
            i++; 
            continue;
        }
        if (ch === "C" && s[i+1] === "D") {
            total += 400;
            i++; 
            continue;
        }
        if (ch === "C" && s[i+1] === "M") {
            total += 900;
            i++; 
            continue;
        }

        if (ch === "I") total += 1;
        if (ch === "V") total += 5;
        if (ch === "X") total += 10;
        if (ch === "L") total += 50;
        if (ch === "C") total += 100;
        if (ch === "D") total += 500;
        if (ch === "M") total += 1000;
    }

    return total;
};
