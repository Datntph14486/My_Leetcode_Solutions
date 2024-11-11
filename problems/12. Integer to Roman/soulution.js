/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let result = '';

    let surplus = 0;

    let divisor = 0;

    switch (true) {
        case num >= 1000:
            divisor = Math.floor(num / 1000);
            surplus = num % 1000;
            result = 'M'.repeat(divisor);
            break;
        case num >= 900:
            divisor = Math.floor(num / 900);
            surplus = num % 900;
            result = 'CM'.repeat(divisor);
            break;
        case num >= 500:
            divisor = Math.floor(num / 500);
            surplus = num % 500;
            result = 'D'.repeat(divisor);
            break;
        case num >= 400:
            divisor = Math.floor(num / 400);
            surplus = num % 400;
            result = 'CD'.repeat(divisor);
            break;
        case num >= 100:
            divisor = Math.floor(num / 100);
            surplus = num % 100;
            result = 'C'.repeat(divisor);
            break;
        case num >= 90:
            divisor = Math.floor(num / 90);
            surplus = num % 90;
            result = 'XC'.repeat(divisor);
            break;
        case num >= 50:
            divisor = Math.floor(num / 50);
            surplus = num % 50;
            result = 'L'.repeat(divisor);
            break;
        case num >= 40:
            divisor = Math.floor(num / 40);
            surplus = num % 40;
            result = 'XL'.repeat(divisor);
            break;
        case num >= 10:
            divisor = Math.floor(num / 10);
            surplus = num % 10;
            result = 'X'.repeat(divisor);
            break;
        case num >= 9:
            divisor = Math.floor(num / 9);
            surplus = num % 9;
            result = 'IX'.repeat(divisor);
            break;
        case num >= 5:
            divisor = Math.floor(num / 5);
            surplus = num % 5;
            result = 'V'.repeat(divisor);
            break;
        case num >= 4:
            divisor = Math.floor(num / 4);
            surplus = num % 4;
            result = 'IV'.repeat(divisor);
            break;
        case num >= 1:
            divisor = Math.floor(num / 1);
            surplus = num % 1;
            result = 'I'.repeat(divisor);
            break;
    }

    result += divisor !== 0 ? intToRoman(surplus) : '';

    return result;
};
