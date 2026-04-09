
/**
 * Solution for Skyscanner Practice Assessment
 * @param {string} S - The flight sequence string
 * @param {number} K - The maximum allowed occurrences
 * @returns {string} - The first invalid flight or "OK"
 */
function solution(S, K) {
    // TIP: Use a Map to keep track of counts
    // TIP: Iterate through the string in steps of 4
    
    // YOUR CODE HERE
    const map = {};
    for (let i = 0; i < S.length; i += 4) { // Jump by 4
    let flight = S.substring(i, i + 4); // Grab the 4-char block
    
    map[flight] = (map[flight] || 0) + 1;
    
        if (map[flight] > K) {
            return flight;
        }
    }
    return "OK";
    
    
}

// --- TEST RUNNER ---
const testCases = [
    { s: "LGW1EDI2EDI2LGW1", k: 1, expected: "EDI2" },
    { s: "JFK3LAX1SFO2", k: 2, expected: "OK" },
    { s: "LHR5LHR5LHR5", k: 2, expected: "LHR5" },
    { s: "SIN1SIN2SIN1SIN2", k: 2, expected: "OK" },
    { s: "DXB1AUH2DXB1AUH2DXB1", k: 2, expected: "DXB1" },
    { s: "", k: 1, expected: "OK" },
    { s: "MAN1MAN1", k: 1, expected: "MAN1" },
    { s: "LGW1EDI2SIN3", k: 5, expected: "OK" },
    { s: "CPH1CPH2CPH1CPH2CPH1", k: 2, expected: "CPH1" },
    { s: "STN4STN4STN4STN4", k: 3, expected: "STN4" }
];

testCases.forEach((tc, index) => {
    const result = solution(tc.s, tc.k);
    console.log(`Test ${index + 1}: ${result === tc.expected ? "✅ PASS" : "❌ FAIL (Got " + result + ")"}`);
});