/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort((a, b) => Math.min(...a) - Math.min(...b));
    const mergeM = mergeMeeting(meetings);
    let countMeeting = 0;

    for (let i = 0; i < mergeM.length; i++) {
        const subArr = mergeM[i];

        countMeeting += subArr[1] - subArr[0] + 1;
    }

    return days - countMeeting;
};

function mergeMeeting(meetings) {
    let result = [];
    let index = 0;

    for (let i = 0; i < meetings.length; i++) {
        const subM = meetings[i];

        if (result.length == 0) {
            result.push([subM[0], subM[1]]);
            continue;
        }

        if (result[index][1] < subM[0]) {
            result.push([subM[0], subM[1]]);
            index++;
            continue;
        }

        if (
            subM[0] <= result[index][1] &&
            result[index][0] < subM[0] &&
            result[index][1] <= subM[1]
        ) {
            result[index][1] = subM[1];
            continue;
        }

        if (subM[0] <= result[index][0] && subM[1] <= result[index][1]) {
            result[index][0] = subM[0];
            continue;
        }

        if (subM[0] <= result[index][0] && result[index][1] <= subM[1]) {
            result[index][0] = subM[0];
            result[index][1] = subM[1];
            continue;
        }
    }

    return result;
}
