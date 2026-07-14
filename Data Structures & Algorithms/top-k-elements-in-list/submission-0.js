class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (const n of nums) {
            if (map.has(n)) {
                map.set(n, (map.get(n) || 0) + 1);
            } else map.set(n, 1);
        }
        let res = [...map.entries()].sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map((n) => n[0]);
    }
}
