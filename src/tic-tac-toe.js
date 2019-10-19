class TicTacToe {
    constructor() {
        this.state = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.state[rowIndex][columnIndex]) {
            if (this.getCurrentPlayerSymbol() === 'x') {
                this.state[rowIndex][columnIndex] = 'x';
                this.currentPlayerSymbol = 'o';
            } else {
                this.state[rowIndex][columnIndex] = 'o';
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        let winner = null;

        if ((this.state[0][0] === 'x' && this.state[0][1] === 'x' && this.state[0][2] === 'x') ||
            (this.state[1][0] === 'x' && this.state[1][1] === 'x' && this.state[1][2] === 'x') ||
            (this.state[2][0] === 'x' && this.state[2][1] === 'x' && this.state[2][2] === 'x') ||

            (this.state[0][0] === 'x' && this.state[1][0] === 'x' && this.state[2][0] === 'x') ||
            (this.state[0][1] === 'x' && this.state[1][1] === 'x' && this.state[2][1] === 'x') ||
            (this.state[0][2] === 'x' && this.state[1][2] === 'x' && this.state[2][2] === 'x') ||

            (this.state[0][0] === 'x' && this.state[1][1] === 'x' && this.state[2][2] === 'x') ||
            (this.state[0][2] === 'x' && this.state[1][1] === 'x' && this.state[2][0] === 'x')) {
                winner = 'x';
            }

        if ((this.state[0][0] === 'o' && this.state[0][1] === 'o' && this.state[0][2] === 'o') ||
        (this.state[1][0] === 'o' && this.state[1][1] === 'o' && this.state[1][2] === 'o') ||
        (this.state[2][0] === 'o' && this.state[2][1] === 'o' && this.state[2][2] === 'o') ||

        (this.state[0][0] === 'o' && this.state[1][0] === 'o' && this.state[2][0] === 'o') ||
        (this.state[0][1] === 'o' && this.state[1][1] === 'o' && this.state[2][1] === 'o') ||
        (this.state[0][2] === 'o' && this.state[1][2] === 'o' && this.state[2][2] === 'o') ||

        (this.state[0][0] === 'o' && this.state[1][1] === 'o' && this.state[2][2] === 'o') ||
        (this.state[0][2] === 'o' && this.state[1][1] === 'o' && this.state[2][0] === 'o')) {
            winner = 'o';
        }

        return winner;
    }

    noMoreTurns() {
        return this.state.every(item => !(item.includes(null)));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.state[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
