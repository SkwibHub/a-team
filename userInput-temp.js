/*
let topLeft = document.getElementById();
let topMid = document.getElementById();
let topRight = document.getElementById();
let midLeft = document.getElementById();
let midMid = document.getElementById();
let midRight = document.getElementById();
let botLeft = document.getElementById();
let botMid = document.getElementById();
let botRight = document.getElementById();
*/


function createInput (ttboard,xo) {
    // xo.innerHTML = userXO;
    addToArray (ttboard,xo);
    // alternateUser();
}

function addToArray (ttboard,xo) {
    if (xo === "topLeft") {
        ttboard.board[0][0] = userXO;
    }
    else if (xo === "topMid") {
        ttboard.board[0][1] = userXO;
    }
    else if (xo === "topRight") {
        ttboard.board[0][2] = userXO;
    }
    else if (xo === "midLeft") {
        ttboard.board[1][0] = userXO;
    }
    else if (xo === "midMid") {
        ttboard.board[1][1] = userXO;
    }
    else if (xo === "midRight") {
        ttboard.board[1][2] = userXO;
    }
    else if (xo === "botLeft") {
        ttboard.board[2][0] = userXO;
    }
    else if (xo === "botMid") {
        ttboard.board[2][1] = userXO;
    }
    else if (xo === "botRight") {
        ttboard.board[2][2] = userXO;
    }
}

/*
topLeft.addEventListener('click', createInput(topLeft));
topMid.addEventListener('click', createInput(topMid));
topRight.addEventListener('click', createInput(topRight));
midLeft.addEventListener('click', createInput(midLeft));
midMid.addEventListener('click', createInput(midMid));
midRight.addEventListener('click', createInput(midRight));
botLeft.addEventListener('click', createInput(botLeft));
botMid.addEventListener('click', createInput(botMid));
botRight.addEventListener('click', createInput(botRight));
*/

// FOR TESTING--------------------------------

function initializeBoard() {
    let ttboard = {
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
    return ttboard;
}
console.log(createInput("topMid"));
console.log(ttboard.board);
