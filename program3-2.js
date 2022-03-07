/*
    Write a program that will allow me to enter numbers between 1 and 100.
    I will enter numbers until I enter 0. At that point, the program should
    display the count of how many time each numbered occurred.
*/

const readlineSync = require('readline-sync');

let a = [];
const count = {};

for (var i = 0; i < 8; i ++) {
    let num = parseInt(readlineSync.question("Enter a number between 1 and 100: "));
    a.push(num);
}

for (const element of a) {
    if (count[element]) {
        count[element] += 1;
    }
    else {
        count[element] = 1;
    }
}
var j = 0;

while ( j < a.length) {
    console.log(a[j] + ' occurs ' + count[a[j]] + ' times')
    j++;
}
