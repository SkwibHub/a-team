// INITIALIZE FUNCTION: Here is where we initialize 'null' values for the players

function initializeBoard() { // TESTED & WORKS
    let ticTac = {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        clear: function () {
            this.board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        }
    }
    return ticTac;
}


// ALTERNATE USER FUNCTION: This is the function the program loops back to, to switch from 'X' user to 'O' user and back.

function alternateUser() { // TESTED & WORKS
    if (userXO === 'X') {
        userXO = 'O';
    } else {
        userXO = 'X';
    }
    return userXO;
}


// DISPLAY THE BOARD STATUS FUNCTION: Displays the board to the user with the current status for 'X' and 'O'.

// Function TK


// USER INPUT FUNCTION: Gets input from the user and assigns it to variables that JavaScript can use

// Function TK


// CHECK FOR CONFLICTS FUNCTION: Re-aligns input values if the user puts a value onto a square already taken

function checkConflicts(boardObject, rowNum, colNum, userXO) { // TESTED & WORKS
    if (boardObject.board[rowNum][colNum] !== null) {
        userXO = boardObject.board[rowNum][colNum];
    }
    return userXO;
}


// CHECK FOR IF THE BOARD IS FULL FUNCTION: If the board is full and no one has won, returns a boolean to verify if the board is full and thus, the game is tied.

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


// CHECK WIN CONDITIONS FUNCTION: Check to see if there are win conditions. Runs NewGame() if the game is won, runs NextTurn() if there is no win condition.

function winConditions(ttboard) {
    if (ttboard.board[0][0] === ttboard.board[0][1] && ttboard.board[0][0] === ttboard.board[0][2]) {
        if (ttboard.board[0][0] != null && ttboard.board[0][1] != null && ttboard.board[0][2] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[1][0] === ttboard.board[1][1] && ttboard.board[1][0] === ttboard.board[1][2]) {
        if (ttboard.board[1][0] != null && ttboard.board[1][1] != null && ttboard.board[1][2] != null) {
            // alert(ttboard.board[1][0] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[2][0] === ttboard.board[2][1] && ttboard.board[2][0] === ttboard.board[2][2]) {
        if (ttboard.board[2][0] != null && ttboard.board[2][1] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[2][0] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[0][0] === ttboard.board[1][0] && ttboard.board[0][0] === ttboard.board[2][0]) {
        if (ttboard.board[0][0] != null && ttboard.board[1][0] != null && ttboard.board[2][0] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[0][1] === ttboard.board[1][1] && ttboard.board[0][1] === ttboard.board[2][1]) {
        if (ttboard.board[0][1] != null && ttboard.board[1][1] != null && ttboard.board[2][1] != null) {
            // alert(ttboard.board[0][1] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[0][2] === ttboard.board[1][2] && ttboard.board[0][2] === ttboard.board[2][2]) {
        if (ttboard.board[0][2] != null && ttboard.board[1][2] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[0][2] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[0][0] === ttboard.board[1][1] && ttboard.board[0][0] === ttboard.board[2][2]) {
        if (ttboard.board[0][0] != null && ttboard.board[1][1] != null && ttboard.board[2][2] != null) {
            // alert(ttboard.board[0][0] + ' is the winner!');
            newGame();
        }
    } else if (ttboard.board[0][2] === ttboard.board[1][1] && ttboard.board[0][2] === ttboard.board[2][0]) {
        if (ttboard.board[0][2] != null && ttboard.board[1][1] != null && ttboard.board[2][0] != null) {
            // alert(ttboard.board[0][2] + ' is the winner!');
            newGame();
        }
    } else {
        return nextTurn();
    }
}


// (!!!!!) THIS IS THE MAIN BODY OF THE PROGRAM THAT UTILIZES THE FUNCTION CALLS (!!!!!)

let boardObject=initializeBoard();
// Display Board Status Function
// User Input Function
checkConflicts(boardObject, rowNum, colNum, userXO);
if (isBoardFull(boardObject)===true) {
    // Board = tie
}
