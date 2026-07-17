class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 1;
        let set = new Set(nums);
        if(nums.length === 0){
            return 0
        }
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
