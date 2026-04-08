// Last updated: 08/04/2026, 22:06:37
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity
    let maxProfit = 0

    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        } else {
            todayProfit = prices[i] - minPrice
            maxProfit = Math.max(maxProfit, todayProfit)
        }
    }

    return maxProfit
};