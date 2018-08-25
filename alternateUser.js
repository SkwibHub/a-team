let userXO = 'X';
function alternateUser () {
    if (userXO === 'X') {
        userXO = 'O';
    }
    else {
        userXO = 'X';
    }
}

alternateUser();

console.log(userXO);
