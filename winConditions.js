function winConditions () {
    if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) {
        if (this.board[0][0] != null && this.board[0][1] != null && this.board[0][2] != null) {
            alert(this.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) {
        if (this.board[1][0] != null && this.board[1][1] != null && this.board[1][2] != null) {
            alert(this.board[1][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) {
        if (this.board[2][0] != null && this.board[2][1] != null && this.board[2][2] != null) {
            alert(this.board[2][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) {
        if (this.board[0][0] != null && this.board[1][0] != null && this.board[2][0] != null) {
            alert(this.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) {
        if (this.board[0][1] != null && this.board[1][1] != null && this.board[2][1] != null) {
            alert(this.board[0][1] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) {
        if (this.board[0][2] != null && this.board[1][2] != null && this.board[2][2] != null) {
            alert(this.board[0][2] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
        if (this.board[0][0] != null && this.board[1][1] != null && this.board[2][2] != null) {
            alert(this.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
        if (this.board[0][2] != null && this.board[1][1] != null && this.board[2][0] != null) {
            alert(this.board[0][2] + ' is the winner!');
            newGame ();
        }
    }
    else {
        return nextTurn;
    }
    }
