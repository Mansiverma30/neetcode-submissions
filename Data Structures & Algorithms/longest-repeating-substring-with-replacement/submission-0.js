class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let windowSize = 0;
        let map = new Map();

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            const maxFreq = Math.max(...map.values());
            while (right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            windowSize = Math.max(windowSize, right - left + 1);
        }

        return windowSize;
    }
}
