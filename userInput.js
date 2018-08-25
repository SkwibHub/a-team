let topLeft = document.getElementById('square1');
let topMid = document.getElementById('square2');
let topRight = document.getElementById('square3');
let midLeft = document.getElementById('square4');
let midMid = document.getElementById('square5');
let midRight = document.getElementById('square6');
let botLeft = document.getElementById('square7');
let botMid = document.getElementById('square8');
let botRight = document.getElementById('square9');

function createInput (x, y) {
    x.innerHTML = userXO;
    addToArray (y);
    alternateUser();
} 

function addToArray (x) {
    if (x === 'topL') {
        this.board[0][0] = userXO;
    }
    else if (x === 'topM') {
        this.board[0][1] = userXO;
    }
    else if (x === 'topR') {
        this.board[0][2] = userXO;
    }
    else if (x === 'midL') {
        this.board[1][0] = userXO;
    }
    else if (x === 'midM') {
        this.board[1][1] = userXO;
    }
    else if (x === 'midR') {
        this.board[1][2] = userXO;
    }
    else if (x === 'botL') {
        this.board[2][0] = userXO;
    }
    else if (x === 'botM') {
        this.board[2][1] = userXO;
    }
    else if (x === 'botR') {
        this.board[2][2] = userXO;
    }
}

topLeft.addEventListener('click', createInput(topLeft, 'topL'));
topMid.addEventListener('click', createInput(topMid, 'topM'));
topRight.addEventListener('click', createInput(topRight, 'topR'));
midLeft.addEventListener('click', createInput(midLeft, 'midL'));
midMid.addEventListener('click', createInput(midMid, 'midM'));
midRight.addEventListener('click', createInput(midRight, 'midR'));
botLeft.addEventListener('click', createInput(botLeft, 'botL'));
botMid.addEventListener('click', createInput(botMid, 'botM'));
botRight.addEventListener('click', createInput(botRight, 'botR'));

createInput(topLeft);
console.log(ticTac[0][0]);