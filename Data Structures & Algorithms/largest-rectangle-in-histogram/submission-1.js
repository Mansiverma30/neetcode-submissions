class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [-1];
        let maxArea = Math.max(...heights);
        heights.push(0);
        for (let i = 0; i < heights.length; i++) {
            while (
                stack[stack.length - 1] !== -1 &&
                heights[i] < heights[stack[stack.length - 1]]
            ) {
                let poppedIndex = stack.pop();
                let width = i - stack[stack.length - 1] - 1;
                let area = heights[poppedIndex] * width;
                maxArea = Math.max(maxArea, area);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
