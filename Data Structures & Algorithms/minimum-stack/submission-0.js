class MinStack {
    constructor() {
        this.main = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.main.push(val);
        if (this.min.length === 0) {
            this.min.push(val);
        } else this.min.push(Math.min(val, this.min[this.min.length - 1]));
    }

    /**
     * @return {void}
     */
    pop() {
        this.main.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.main[this.main.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
