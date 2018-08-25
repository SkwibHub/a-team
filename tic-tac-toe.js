let ticTac = {
    board : [[null, null, null], [null, null, null], [null, null, null]],
    clear : function () {
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        return this.board;
    },
    newGame : function () {
        let runItBack = confirm('Would you like to play again?'); {
            if (runItBack) {
                this.clear;
                userXO = 'X';
            }
            else {
                alert("Thank you for playing!");
                this.clear;
                userXO = 'X';
            }
        }
    }
}

ticTac.board[0][0] = 'number2';
console.log(ticTac.board[0][0]);