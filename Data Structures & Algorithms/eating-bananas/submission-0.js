class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            let hour = hoursRequired(piles, mid);
            if (hour <= h) {
                right = mid;
            } else left = mid + 1;
        }
        return left;
    }
}
function hoursRequired(piles, speed) {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / speed);
    }
    return hours;
}
