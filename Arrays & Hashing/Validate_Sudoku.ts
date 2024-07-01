// Valid Sudoku
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
//   Each row must contain the digits 1-9 without repetition.
//   Each column must contain the digits 1-9 without repetition.
//   Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//   Note:
//
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//   Only the filled cells need to be validated according to the mentioned rules.
//
//
//   Example 1:
//
//
// Input: board =
//     [["5","3",".",".","7",".",".",".","."]
//     ,["6",".",".","1","9","5",".",".","."]
//     ,[".","9","8",".",".",".",".","6","."]
//     ,["8",".",".",".","6",".",".",".","3"]
//     ,["4",".",".","8",".","3",".",".","1"]
//     ,["7",".",".",".","2",".",".",".","6"]
//     ,[".","6",".",".",".",".","2","8","."]
//     ,[".",".",".","4","1","9",".",".","5"]
//     ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:
//
// Input: board =
//   [["8","3",".",".","7",".",".",".","."]
//     ,["6",".",".","1","9","5",".",".","."]
//     ,[".","9","8",".",".",".",".","6","."]
//     ,["8",".",".",".","6",".",".",".","3"]
//     ,["4",".",".","8",".","3",".",".","1"]
//     ,["7",".",".",".","2",".",".",".","6"]
//     ,[".","6",".",".",".",".","2","8","."]
//     ,[".",".",".","4","1","9",".",".","5"]
//     ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
//
//
// Constraints:
//
//   board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

function isValidSudoku(board: string[][]): boolean {

  for (let i = 0; i < board.length; i++) {

    const setHorizontal = new Set()
    const setVertical = new Set()

    for (let j = 0; j < board[i].length; j++) {
      const fieldInRow = board[i][j]
      const fieldInColumn = board[j][i]

      if (fieldInRow !== '.') {
        if (setHorizontal.has(fieldInRow)) {
          return false
        }
        setHorizontal.add(fieldInRow)
      }

      if (fieldInColumn !== '.') {
        if (setVertical.has(fieldInColumn)) {
          return false
        }
        setVertical.add(fieldInColumn)
      }

    }
  }

  for (let x = 0; x < 9; x = x + 3) {
    for (let y = 0; y < 9; y = y + 3) {
      const box = new Set()

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

          const field = board[x + i][y + j]
          if (field === '.')
            continue
          if (box.has(field)) {
            return false
          }
          box.add(field)

        }
      }

    }
  }
  return true

}

const testData = [
  {
    input: [["5", "3", ".", ".", "7", ".", ".", ".", "."]
      , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
      , [".", "9", "8", ".", ".", ".", ".", "6", "."]
      , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
      , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
      , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
      , [".", "6", ".", ".", ".", ".", "2", "8", "."]
      , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
      , [".", ".", ".", ".", "8", ".", ".", "7", "9"]],
    expected: true
  },
  {
    input:
      [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]],
    expected: false
  },
  {
    input: [[".", ".", "4", ".", ".", ".", "6", "3", "."]
      , [".", ".", ".", ".", ".", ".", ".", ".", "."]
      , ["5", ".", ".", ".", ".", ".", ".", "9", "."]
      , [".", ".", ".", "5", "6", ".", ".", ".", "."]
      , ["4", ".", "3", ".", ".", ".", ".", ".", "1"]
      , [".", ".", ".", "7", ".", ".", ".", ".", "."]
      , [".", ".", ".", "5", ".", ".", ".", ".", "."]
      , [".", ".", ".", ".", ".", ".", ".", ".", "."]
      , [".", ".", ".", ".", ".", ".", ".", ".", "."]],
    expected: false
  },

]


for (let {input, expected} of testData) {
  const output = isValidSudoku(input)
  const result = output === expected ? 'Passed' : 'Failed'
  console.log('Input: ', 'Expected:', expected, 'Output:', output, result)
}
