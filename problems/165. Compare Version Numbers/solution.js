/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const splitV1 = version1.split('.');
    const splitV2 = version2.split('.');

    let i = 0;
    let result = 0;

    while (splitV1[i] || splitV2[i]) {
        if (splitV2[i] == undefined && splitV1[i] != 0) {
            return 1;
        }

        if (splitV1[i] == undefined && splitV2[i] != 0) {
            return -1;
        }

        if (Number(splitV1[i]) < Number(splitV2[i])) {
            result = -1;

            break;
        }

        if (Number(splitV2[i]) < Number(splitV1[i])) {
            result = 1;
            break;
        }
        i++;
    }

    return result;
};
