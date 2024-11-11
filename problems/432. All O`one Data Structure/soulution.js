class AllOne {
    constructor() {
        this.stogare = {};
        this.min = '';
        this.max = '';
    }

    inc(key) {
        if (this.stogare[key]) {
            this.stogare[key] += 1;
        } else {
            this.stogare[key] = 1;
        }

        this.updateMax(key);

        if (this.min === key) {
            this.min = this.getMin();
        } else {
            this.updateMin(key);
        }
    }

    updateMin(min) {
        if (this.min === '') {
            this.min = min;
        } else {
            this.min =
                this.stogare[min] < this.stogare[this.min] ? min : this.min;
        }
    }

    updateMax(max) {
        if (this.max === '') {
            this.max = max;
        } else {
            this.max =
                this.stogare[this.max] < this.stogare[max] ? max : this.max;
        }
    }

    dec(key) {
        if (this.stogare[key]) {
            this.stogare[key] -= 1;

            if (this.stogare[key] === 0) {
                delete this.stogare[key];

                if (key === this.min) {
                    this.min = this.getMin();
                }
            } else {
                this.updateMin(key);
            }

            if (key === this.max) {
                this.max = this.getMax();
            }
        }
    }

    getMaxKey() {
        return this.max;
    }

    getMinKey() {
        return this.min;
    }

    getMin() {
        let min = '';
        const keys = Object.keys(this.stogare);

        for (const key of keys) {
            if (min === '') {
                min = key;
            } else {
                min = this.stogare[key] < this.stogare[min] ? key : min;
            }
        }

        return min;
    }

    getMax() {
        let max = '';
        const keys = Object.keys(this.stogare);

        for (const key of keys) {
            if (max === '') {
                max = key;
            } else {
                max = this.stogare[max] < this.stogare[key] ? key : max;
            }
        }

        return max;
    }
}
