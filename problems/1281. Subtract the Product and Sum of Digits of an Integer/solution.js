/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {

    const arr = n.toString().split('');

    const { sum, product } = arr.reduce((prev, value) => {

        return {
            sum: prev.sum + Number(value), product: prev.product * Number(value)
        }
    }, { sum: 0, product: 1 })


    return product - sum;

};