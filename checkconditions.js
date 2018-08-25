// Check for board conditions

function checkConflicts(boardObject, rowNum, colNum, userXO) { // TESTED & WORKS
    if (boardObject.board[rowNum][colNum] !== null) {
        userXO = boardObject.board[rowNum][colNum];
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


/* Testing

let ttBoard = {
    board: [["O",null,"X"],["X","O",null],[null,"X",null]]
}

console.log(checkConflicts(ttBoard,1,1,"X"));

*/
