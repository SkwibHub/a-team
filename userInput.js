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
    alternateUser();
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