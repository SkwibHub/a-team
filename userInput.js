let topLeft = document.getElementById();
let topMid = document.getElementById();
let topRight = document.getElementById();
let midLeft = document.getElementById();
let midMid = document.getElementById();
let midRight = document.getElementById();
let botLeft = document.getElementById();
let botMid = document.getElementById();
let botRight = document.getElementById();

function createInput (x) {
    x.innerHTML = userXO;
    addToArray (x);
    alternateUser();
}

function addToArray (x) {
    if (x === topLeft) {
        this.board[0][0] = userXO;
    }
    else if (x === topMid) {
        this.board[0][1] = userXO;
    }
    else if (x === topRight) {
        this.board[0][2] = userXO;
    }
    else if (x === midLeft) {
        this.board[1][0] = userXO;
    }
    else if (x === midMid) {
        this.board[1][1] = userXO;
    }
    else if (x === midRight) {
        this.board[1][2] = userXO;
    }
    else if (x === botLeft) {
        this.board[2][0] = userXO;
    }
    else if (x === botMid) {
        this.board[2][1] = userXO;
    }
    else if (x === botRight) {
        this.board[2][2] = userXO;
    }
}

topLeft.addEventListener('click', createInput(topLeft));
topMid.addEventListener('click', createInput(topMid));
topRight.addEventListener('click', createInput(topRight));
midLeft.addEventListener('click', createInput(midLeft));
midMid.addEventListener('click', createInput(midMid));
midRight.addEventListener('click', createInput(midRight));
botLeft.addEventListener('click', createInput(botLeft));
botMid.addEventListener('click', createInput(botMid));
botRight.addEventListener('click', createInput(botRight));