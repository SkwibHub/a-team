let userXO = 'X';

function alternateUser() { // TESTED & WORKS
    if (userXO === 'X') {
        userXO = 'O';
    } else {
        userXO = 'X';
    }
    return userXO;
}

console.log(userXO);
alternateUser();
console.log(userXO);