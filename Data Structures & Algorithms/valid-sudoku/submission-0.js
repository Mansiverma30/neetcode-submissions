class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === ".") {
                    continue;
                }
                if (seen.has(board[row][col])) {
                    return false;
                }
                seen.add(board[row][col]);
            }
        }
        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let row = 0; row < 9; row++) {
                if (board[row][col] === ".") {
                    continue;
                }
                if (seen.has(board[row][col])) {
                    return false;
                }
                seen.add(board[row][col]);
            }
        }

        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                let seen = new Set();
                for (let r = row; r < row + 3; r++) {
                    for (let c = col; c < col + 3; c++) {
                        if (board[r][c] === ".") {
                            continue;
                        }
                        if (seen.has(board[r][c])) {
                            return false;
                        }
                        seen.add(board[r][c]);
                    }
                }
            }
        }

        return true;
    }
}
