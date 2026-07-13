class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (const s of strs) {
            let c = s.split("").sort().join("");
            if (map.has(c)) {
                map.get(c).push(s);
            } else map.set(c, [s]);
        }
        return [...map.values()];
    }
}
