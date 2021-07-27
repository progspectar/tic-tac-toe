class TicTacToe {
  constructor() {
    this.CurrentPlayerSymbol = 'x';
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.matrixNumbers = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }

  transformMatrix() {
    this.matrixNumbers = this.matrix.map((row) => {
      return row.map((cell) => (cell === 'x' ? 1 : cell === 'o' ? 4 : 0));
    });
  }

  getSumMatrix() {
    this.transformMatrix();
    let sumMatrix = [];
    sumMatrix.push(
      this.matrixNumbers[0][0] +
        this.matrixNumbers[0][1] +
        this.matrixNumbers[0][2]
    );
    sumMatrix.push(
      this.matrixNumbers[1][0] +
        this.matrixNumbers[1][1] +
        this.matrixNumbers[1][2]
    );
    sumMatrix.push(
      this.matrixNumbers[2][0] +
        this.matrixNumbers[2][1] +
        this.matrixNumbers[2][2]
    );
    sumMatrix.push(
      this.matrixNumbers[0][0] +
        this.matrixNumbers[1][0] +
        this.matrixNumbers[2][0]
    );
    sumMatrix.push(
      this.matrixNumbers[0][1] +
        this.matrixNumbers[1][1] +
        this.matrixNumbers[2][1]
    );
    sumMatrix.push(
      this.matrixNumbers[0][2] +
        this.matrixNumbers[1][2] +
        this.matrixNumbers[2][2]
    );
    sumMatrix.push(
      this.matrixNumbers[0][0] +
        this.matrixNumbers[1][1] +
        this.matrixNumbers[2][2]
    );
    sumMatrix.push(
      this.matrixNumbers[0][2] +
        this.matrixNumbers[1][1] +
        this.matrixNumbers[2][0]
    );

    return sumMatrix;
  }

  getCurrentPlayerSymbol() {
    return this.CurrentPlayerSymbol;
  }

  toggleCurrentPlayerSymbol() {
    return this.CurrentPlayerSymbol === 'x' ? 'o' : 'x';
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
      this.CurrentPlayerSymbol = this.toggleCurrentPlayerSymbol();
    }
  }

  isFinished() {
    return this.isDraw() || this.getWinner() != null;
  }

  getWinner() {
    const SumMatrix = this.getSumMatrix();
    for (const el of SumMatrix) {
      if (el === 3) {
        return 'x';
      } else if (el === 12) {
        return 'o';
      }
    }
    return null;
  }

  noMoreTurns() {
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix.length; col++) {
        if (this.matrix[row][col] === null) return false;
      }
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
