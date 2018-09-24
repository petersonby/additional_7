module.exports = function solveSudoku(matrix) {

  let newMatrix = matrix;

  function solve(matrix) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          for (let vars = 1; vars <= 9; vars++) {
            if (check(newMatrix, row, col, vars)) {
              newMatrix[row][col] = vars;
              if (solve(newMatrix)) return true;
              else newMatrix[row][col] = 0;
            }
          }
          return false;
        }
      }
    }

    return true;
  }

  function check(matrix, row, col, vars) {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] !== 0 && matrix[row][i] === vars) {
        return false;
      }
      if (matrix[i][col] !== 0 && matrix[i][col] === vars) {
        return false;
      }
    }

    for (var i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let squareRow = Math.floor(row / 3) * 3 + i;
        let squareCol = Math.floor(col / 3) * 3 + j;
        
        if (matrix[squareRow][squareCol] !== 0 && matrix[squareRow][squareCol] === vars) {
          return false;
        }  
      }
    }

    return true;
  }

  if (solve(newMatrix)) return newMatrix;
}