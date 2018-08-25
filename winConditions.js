function winConditions(ttboard) {
    if (ttboard.board[0][0] === ttboard.board[0][1] && ttboard.board[0][0] === ttboard.board[0][2]) {
        if (ttboard.board[0][0] != null && ttboard.board[0][1] != null && ttboard.board[0][2] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[1][0] === ttboard.board[1][1] && ttboard.board[1][0] === ttboard.board[1][2]) {
        if (ttboard.board[1][0] != null && ttboard.board[1][1] != null && ttboard.board[1][2] != null) {
            // alert(ttboard.board[1][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[2][0] === ttboard.board[2][1] && ttboard.board[2][0] === ttboard.board[2][2]) {
        if (ttboard.board[2][0] != null && ttboard.board[2][1] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[2][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[0][0] === ttboard.board[1][0] && ttboard.board[0][0] === ttboard.board[2][0]) {
        if (ttboard.board[0][0] != null && ttboard.board[1][0] != null && ttboard.board[2][0] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[0][1] === ttboard.board[1][1] && ttboard.board[0][1] === ttboard.board[2][1]) {
        if (ttboard.board[0][1] != null && ttboard.board[1][1] != null && ttboard.board[2][1] != null) {
            // alert(ttboard.board[0][1] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[0][2] === ttboard.board[1][2] && ttboard.board[0][2] === ttboard.board[2][2]) {
        if (ttboard.board[0][2] != null && ttboard.board[1][2] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[0][2] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[0][0] === ttboard.board[1][1] && ttboard.board[0][0] === ttboard.board[2][2]) {
        if (ttboard.board[0][0] != null && ttboard.board[1][1] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame ();
        }
    }
    else if (ttboard.board[0][2] === ttboard.board[1][1] && ttboard.board[0][2] === ttboard.board[2][0]) {
        if (ttboard.board[0][2] != null && ttboard.board[1][1] != null && ttboard.board[2][0] != null) {
            // alert(ttboard.board[0][2] + ' is the winner!');
            newGame ();
        }
    }
    else {
        return nextTurn();
    }
    }

// BELOW IS FOR TESTING. BELOW FUNCTIONS WILL NEED TO UPDATE

function newGame() {
    console.log("WINNER!");
}

function nextTurn() {
    console.log("No Winner Yet");
}

// ---------------------------------------
// BELOW IS USED ONLY FOR TESTING

let ttBoard = {
    board: [["X","O","X"],[null,"X","O"],["X",null,null]]
}

winConditions(ttBoard);


