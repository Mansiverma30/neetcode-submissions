class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [[timestamp, value]]);
        } else {
            let arr = this.keyStore.get(key);
            arr.push([timestamp, value]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        let arr = this.keyStore.get(key);
        let left = 0;
        let right = arr.length - 1;
        let answer = "";
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (arr[mid][0] <= timestamp) {
                answer = arr[mid][1];
                left = mid + 1;
            } else right = mid - 1;
        }

        return answer;
    }
}
