class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = [];
        let dequeue = [];
        for (let i = 0; i < nums.length; i++) {
            if (dequeue.length && dequeue[0] < i - k + 1) {
                dequeue.shift();
            }
            while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
                dequeue.pop();
            }
            dequeue.push(i);
            if (i >= k - 1) {
                max.push(nums[dequeue[0]]);
            }
        }
        return max;
    }
}
