class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let size = 0, l = 0
        for(let i = 0; i< s.length; i++){
            if(map.has(s[i])){
                l = Math.max(l, map.get(s[i])+1)
            }
            size = Math.max(size, i-l+1)
            map.set(s[i],i)
        }
        return size
    }
}
