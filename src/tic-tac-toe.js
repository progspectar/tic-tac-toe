class TicTacToe {
  constructor() {
    this.CurrentPlayerSymbol = 'x';
  }

  transformMatrix() {
    this.matrixNumbers = this.matrix.map((row) => {
      return row.map((cell) => (cell === 'x' ? 1 : cell === 'o' ? 4 : 0));
    });
  }

  getSumMatrix() {
    return sumMatrix;
  }

  getCurrentPlayerSymbol() {
    return this.CurrentPlayerSymbol;
  }

  toggleCurrentPlayerSymbol() {}

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
      this.CurrentPlayerSymbol = this.toggleCurrentPlayerSymbol();
    }
  }

  isFinished() {
    return this.isDraw() || this.getWinner() != null;
  }

  getWinner() {}

  noMoreTurns() {}

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
