/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;

    let price = null;
    let k = prices.length;

    for (let i = 0; i < k; i++) {
        if (price == null) {
            price = prices[i];

            continue;
        }

        if (prices[i] < price) {
            price = prices[i];
            continue;
        }

        const { sellPrice, j } = getSellPrice(prices, i, k);
        maxProfit += sellPrice - price;
        price = null;
        i = j;
    }

    return maxProfit;
};

function getSellPrice(prices, i, k) {
    let j = i + 1;

    let result = prices[i];

    while (j <= k) {
        if (result < prices[j]) {
            result = prices[j];
            j++;
            continue;
        }

        break;
    }

    return { sellPrice: result, j: j - 1 };
}
