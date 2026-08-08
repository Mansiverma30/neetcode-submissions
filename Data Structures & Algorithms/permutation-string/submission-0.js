class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map();
        let k = s1.length;

        for (const c of s1) {
            map.set(c, (map.get(c) || 0) + 1);
        }

        for (let i = 0; i <= s2.length - k; i++) {
            let s = s2.slice(i, i + k);

            let map2 = new Map();

            for (const c of s) {
                map2.set(c, (map2.get(c) || 0) + 1);
            }

            let isMatch = true;

            if (map.size !== map2.size) {
                isMatch = false;
            } else {
                for (const [key, value] of map) {
                    if (map2.get(key) !== value) {
                        isMatch = false;
                        break;
                    }
                }
            }

            if (isMatch) {
                return true;
            }
        }

        return false;
    }
}
