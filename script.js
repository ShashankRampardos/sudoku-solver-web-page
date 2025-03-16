class Solution {
    constructor() {
        this.board = [];
    }

    isValid(board, x, y, digit) {
        for (let i = 0; i < 9; i++) {
            // Check row, column, and 3x3 grid
            if (board[x][i] === digit) return false;
            if (board[i][y] === digit) return false;
            if (board[Math.floor(x / 3) * 3 + Math.floor(i / 3)][Math.floor(y / 3) * 3 + (i % 3)] === digit) return false;
        }
        return true;
    }

    engine(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let digit = '1'; digit <= '9'; digit++) {
                        if (this.isValid(board, i, j, digit)) {
                            board[i][j] = digit;
                            if (this.engine(board)) {
                                return true; // Continue solving
                            } else {
                                board[i][j] = '.'; // Backtrack
                            }
                        }
                    }
                    return false; // No valid number for this position
                }
            }
        }
        return true; // Solved
    }

    solveSudoku(board) {
        this.board = board;
        this.engine(board);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudoku-grid');
    const solveButton = document.getElementById('solve-button');
    const clearButton = document.getElementById('clear-button');
    const status = document.getElementById('status');
    const solution = new Solution();

    const board = Array.from({ length: 9 }, () => Array(9).fill('.'));

    // Create the grid dynamically
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.row = i;
            input.dataset.col = j;

            // Update board on input change
            input.addEventListener('input', () => {
                const value = input.value;
                if (value >= '1' && value <= '9') {
                    board[i][j] = value;
                } else {
                    board[i][j] = '.';
                }
            });

            grid.appendChild(input);
        }
    }

    // Solve button functionality
    solveButton.addEventListener('click', () => {
        solution.solveSudoku(board);

        // Update the grid with the solved board
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const input = document.querySelector(`input[data-row='${i}'][data-col='${j}']`);
                input.value = board[i][j];
            }
        }
        status.textContent = 'Sudoku solved!';
    });

    // Clear button functionality
    clearButton.addEventListener('click', () => {
        board.forEach(row => row.fill('.'));
        document.querySelectorAll('input').forEach(input => (input.value = ''));
        status.textContent = '';
    });
});
