class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let min = prices[0]
        for(let i =1; i < prices.length; i++){
            if(prices[i]<min){
                min = prices[i]
            }
            let profit = prices[i] - min
            max = Math.max(profit, max)
        }
        return max
    }
}
