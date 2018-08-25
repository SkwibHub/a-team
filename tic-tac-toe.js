let ticTac = {
    board : [[null, null, null], [null, null, null], [null, null, null]],
    clear : function () {
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        return this.board;
    },
    winConditions : function () {
        if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) {
            if (this.board[0][0] != null) {
                console.log('winner!');
            }
        }
        else if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) {
            if (this.board[1][0] != null) {
                console.log('winner');
            }
        }
        else if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) {
            if (this.board[2][0]) {
                console.log('winner');
            }
        }
        else if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) {
            if (this.board[0][0] != null) {
                console.log('winner');
            }
        }
        else if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) {
            if (this.board[0][1] != null) {
                console.log('winner');
            }
        }
        else if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) {
            if (this.board[0][2] != null) {
                console.log('winner');
            }
        }
        else if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
            if (this.board[0][0] != null) {
                console.log('winner');
            }
        }
        else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
            if (this.board[0][2] !=null) {
                console.log('winner');
            }
        }
        else {
            nextTurn();
        }
        }
    }


