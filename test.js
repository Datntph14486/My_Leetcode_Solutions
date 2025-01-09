function getTrap(left, right, height) {
    let sum = 0;
    const min = Math.min(height[left], height[right]);
    let newLeft = left + 1;

    while (newLeft < right) {
        const vLeft = height[newLeft];
        sum += min - vLeft;
        newLeft++;
    }

    return sum;
}

const arr = [0, 1, 0, 3, 1, 0, 1, 2, 2, 1, 2, 1];

console.log(getTrap(3, 7, arr));
