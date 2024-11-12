/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => b[1] - a[1]);

    const result = [];

    for (let i = 0; i < queries.length; i++) {
        let beauty = 0;

        for (let j = 0; j < items.length; j++) {
            const currentBeauty = items[j];

            if (currentBeauty[0] <= queries[i]) {
                beauty = currentBeauty[1];
                break;
            }
        }

        result.push(beauty);
    }

    return result;
};
