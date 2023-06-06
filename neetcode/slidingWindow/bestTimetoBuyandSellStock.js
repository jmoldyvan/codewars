// You are given an array prices where prices[i] 
// is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a 
// single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this 
// transaction. If you cannot achieve any profit, return 0.

// prices are array. i = specific day

// when we have prices[i], return if another prices[i] is greater 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const e = prices[i];        
        let p = prices.slice(i).sort((a,b) => b - a)
        if(e < p[0]){
            let rev = p[0] - e
            if(rev>profit){
                profit = rev 
            }
        }
    }
    return profit
};