class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = -Infinity;
        for (let i = 0; i < heights.length; i++) {
            let height = heights[i];
            let left = i;
            let right = i;
            while (left > 0 && heights[left - 1] >= heights[i]) {
                left--;
            }
            while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
                right++;
            }
            let width = right - left + 1;
            let area = height * width;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
