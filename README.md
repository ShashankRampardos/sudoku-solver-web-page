# Sudoku Solver Web App

🎉 Solve Sudoku puzzles easily with this interactive web-based tool, powered by backtracking logic from the classic LeetCode C++ solution! This tool lets users input Sudoku puzzles directly, solve them instantly, and experience algorithmic problem-solving live in the browser.

---

## 🚀 Features

- **Interactive Sudoku Grid**: Input your puzzle directly into the 9x9 grid.
- **C++ Logic Translated to JavaScript**: The solving algorithm uses the same recursive backtracking logic as the original C++ solution.
- **Fast and Accurate**: Validates inputs and solves puzzles efficiently.
- **Clean UI**: Easy-to-use grid and buttons for solving or resetting the board.
- **Live Demonstration**: Solves puzzles in the browser, no backend required.

---

## 🔑 How It Works

1. **Algorithm**:
   - Uses **recursive backtracking** to fill empty cells (`.`) with valid digits (`1-9`) while adhering to Sudoku rules.
   - Validates each move by ensuring there are no duplicates in:
     - The row.
     - The column.
     - The 3x3 sub-grid.

2. **Time Complexity**:  
   **O(9ⁿ)**, where **n** is the number of empty cells on the board.  
   (Practical performance is optimized by validation checks and early exits.)

3. **Space Complexity**:  
   **O(n)**, due to the recursion stack depth during backtracking.

---

## 🛠️ Technologies Used

- **HTML**: Structure and UI.
- **CSS**: Styling for the grid and buttons.
- **JavaScript**: Logic for solving Sudoku using backtracking.

---

## 🖼️ Screenshot

![Sudoku Solver Screenshot]([link-to-screenshot.png](https://github.com/ShashankRampardos/sudoku-solver-web-page/blob/main/suduko%20solver%20screen%20shot.png))

---

## 📝 Usage

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/sudoku-solver-web.git
