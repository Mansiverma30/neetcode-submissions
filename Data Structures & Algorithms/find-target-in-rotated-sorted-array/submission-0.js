class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            console.log(nums[mid]);
            if (nums[mid] === target) return mid;
            else if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target <= nums[mid]) {
                    right = mid - 1;
                } else left = mid + 1;
            } else {
                if (target >= nums[mid + 1] && target <= nums[right]) {
                    left = mid + 1;
                } else right = mid;
            }
        }
        return -1;
    }
}
