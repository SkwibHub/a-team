// Check for board conditions

function checkConflicts(boardObject, rowNum, colNum, userXO) {
    if (ticTacToe.board[rowNum][colNum] !== null) {
        userXO = ticTacToe.board[rowNum][colNum];
    }
    return userXO;
}

function isBoardFull(boardObject) { //TESTED & WORKS
    for (r = 0; r < 3; r++) {
        for (c = 0; c < 2; c++) {
            if (boardObject.board[r][c] === null) {
                return false;
            }
        }
    }
    return true;
}


// Testing

let ttBoard = {
    board: [["O","O","O"],["O","O","O"],["O","O","O"]]
}

console.log(isBoardFull(ttBoard));
