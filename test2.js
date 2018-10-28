let userXO = 'X';
let ticTac = {
    board : [[null, null, null], [null, null, null], [null, null, null]],
    clear : function () {
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        topLeft.innerHTML = '';
        topMid.innerHTML = '';
        topRight.innerHTML = '';
        midLeft.innerHTML = '';
        midMid.innerHTML = '';
        midRight.innerHTML = '';
        botLeft.innerHTML = '';
        botMid.innerHTML = '';
        botRight.innerHTML = '';
        location.reload();
        return this.board;
    },
    newGame : function () {
        let runItBack = confirm('Would you like to play again?'); {
            if (runItBack) {
                this.clear();
                userXO = 'X';
            }
            else {
                alert("Thank you for playing!");
                this.clear();
                userXO = 'X';
            }
        }
    },
    winConditions : function () {
        if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) {
            if (this.board[0][0] != null && this.board[0][1] != null && this.board[0][2] != null) {
                alert(this.board[0][0] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) {
            if (this.board[1][0] != null && this.board[1][1] != null && this.board[1][2] != null) {
                alert(this.board[1][0] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) {
            if (this.board[2][0] != null && this.board[2][1] != null && this.board[2][2] != null) {
                alert(this.board[2][0] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) {
            if (this.board[0][0] != null && this.board[1][0] != null && this.board[2][0] != null) {
                alert(this.board[0][0] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) {
            if (this.board[0][1] != null && this.board[1][1] != null && this.board[2][1] != null) {
                alert(this.board[0][1] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) {
            if (this.board[0][2] != null && this.board[1][2] != null && this.board[2][2] != null) {
                alert(this.board[0][2] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
            if (this.board[0][0] != null && this.board[1][1] != null && this.board[2][2] != null) {
                alert(this.board[0][0] + ' is the winner!');
                this.newGame ();
            }
        }
        else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
            if (this.board[0][2] != null && this.board[1][1] != null && this.board[2][0] != null) {
                alert(this.board[0][2] + ' is the winner!');
                this.newGame ();
            }
        }
        else {
            return isBoardFull(ticTac);
        }
        }
    
}

let topLeft = document.getElementById('square1');
let topMid = document.getElementById('square2');
let topRight = document.getElementById('square3');
let midLeft = document.getElementById('square4');
let midMid = document.getElementById('square5');
let midRight = document.getElementById('square6');
let botLeft = document.getElementById('square7');
let botMid = document.getElementById('square8');
let botRight = document.getElementById('square9');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

function createInput (x, y) {
    addToArray(y);
    //x.innerHTML = userXO;
    if (userXO != 'X') {
        x.classList.add('spaceship2');
    }
    else {
        x.classList.add('spaceship1');
    }
    
    alternateUser();
    ticTac.winConditions();
} 

function addToArray (x) {
    if (x === 'topL') {
        ticTac.board[0][0] = userXO;
    }
    else if (x === 'topM') {
        ticTac.board[0][1] = userXO;
    }
    else if (x === 'topR') {
        ticTac.board[0][2] = userXO;
    }
    else if (x === 'midL') {
        ticTac.board[1][0] = userXO;
    }
    else if (x === 'midM') {
        ticTac.board[1][1] = userXO;
    }
    else if (x === 'midR') {
        ticTac.board[1][2] = userXO;
    }
    else if (x === 'botL') {
        ticTac.board[2][0] = userXO;
    }
    else if (x === 'botM') {
        ticTac.board[2][1] = userXO;
    }
    else if (x === 'botR') {
        ticTac.board[2][2] = userXO;
    }
}

topLeft.addEventListener('click', function(){
    createInput(topLeft, 'topL')
});
topMid.addEventListener('click', function(){
    createInput(topMid, 'topM')
});
topRight.addEventListener('click', function(){
    createInput(topRight, 'topR')
});
midLeft.addEventListener('click', function(){
    createInput(midLeft, 'midL')
});
midMid.addEventListener('click', function(){
    createInput(midMid, 'midM')
});
midRight.addEventListener('click', function(){
    createInput(midRight, 'midR')
});
botLeft.addEventListener('click', function(){
    createInput(botLeft, 'botL')
});
botMid.addEventListener('click', function(){
    createInput(botMid, 'botM')
});
botRight.addEventListener('click', function(){
    createInput(botRight, 'botR')
});
reset.addEventListener('click', function() {
    ticTac.clear();
    location.reload();
});

function alternateUser () {
    if (userXO === 'X') {
        userXO = 'O';

    }
    else {
        userXO = 'X';

    }
}

function isBoardFull(boardObject) { //TESTED & WORKS
    for (r = 0; r < 3; r++) {
        for (c = 0; c < 3; c++) {
            if (boardObject.board[r][c] === null) {
                return false;
            }
        }
    }
    let drawed = confirm('Draw, play again?'); {
        if (drawed) {
            alert('player one start!');
            return ticTac.clear();
        }
        else {
            return ticTac.clear();
        }
    }
}

function checkConflicts(boardObject, rowNum, colNum, userXO) { // TESTED & WORKS
    if (boardObject.board[rowNum][colNum] !== null) {
        userXO = boardObject.board[rowNum][colNum];
    }
    return userXO;
}

//function checkConflicts2
