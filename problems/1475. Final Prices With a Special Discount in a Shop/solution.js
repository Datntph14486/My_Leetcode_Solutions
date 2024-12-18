/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let result = [];

    for (let i = 0; i < prices.length; i++) {
        let item = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                item = prices[i] - prices[j];
                break;
            }
        }
        result.push(item);
    }
    return result;
};
