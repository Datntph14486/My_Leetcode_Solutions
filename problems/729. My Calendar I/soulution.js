class MyCalendar {
    constructor() {
        this.rooms = [];
    }

    isDoubleBooking(start, end) {
        let check = true;

        for (let i = 0; i < this.rooms.length; i++) {
            const room = this.rooms[i];

            if (room[0] <= start && start < room[1]) {
                check = false;
                continue;
            }

            if (end <= room[1] && room[0] < end) {
                check = false;
                continue;
            }

            if (start < room[0] && room[1] < end) {
                check = false;
                continue;
            }
        }

        return check;
    }

    book(start, end) {
        if (this.isDoubleBooking(start, end)) {
            this.rooms.push([start, end]);
            return true;
        } else {
            return false;
        }
    }
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

const myCalendar = new MyCalendar();
myCalendar.book(10, 20);
myCalendar.book(15, 25);
myCalendar.book(20, 30);
