/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let buy = null;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (buy == null) {
            buy = price;
            continue;
        }

        profit = Math.max(profit, price - buy);
        buy = Math.min(buy, price);
    }

    return profit;
};
