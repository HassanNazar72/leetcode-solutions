// Last updated: 08/04/2026, 22:06:09
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let minPrice = Infinity
7    let maxProfit = 0
8
9    for(let i=0; i<prices.length; i++){
10        if(prices[i] < minPrice){
11            minPrice = prices[i]
12        } else {
13            todayProfit = prices[i] - minPrice
14            maxProfit = Math.max(maxProfit, todayProfit)
15        }
16    }
17
18    return maxProfit
19};