// Check for board conditions

function checkConflicts(boardObject, rowNum, colNum, userXO) {
    if (ticTacToe.board[rowNum][colNum] !== null) {
        userXO = ticTacToe.board[rowNum][colNum];
    }
    return userXO;

    