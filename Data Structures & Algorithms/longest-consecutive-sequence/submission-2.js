class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        let set = new Set(nums);
        for (const n of set) {
            if (!set.has(n - 1)) {
                let currentNum = n;
                let count = 1;
                while (set.has(currentNum + 1)) {
                    currentNum++;
                    count++;
                }
                maxCount = Math.max(count, maxCount);
            }
        }
        return maxCount;
    }
}
