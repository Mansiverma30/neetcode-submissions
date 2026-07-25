class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = [];
        for (const s of strs) {
            ans.push(`${s.length}#${s}`);
        }
        return ans.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = Number(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + length);
            ans.push(word);
            i = j + 1 + length;
        }
        return ans;
    }
}