/*
    Write a program that allows me to enter ten integers.
    The program should then display the ten integers I entered,
    in the reverse order of how they were entered.
*/

const readlineSync = require('readline-sync');

var nums = [];
var cnt = 0;

while(cnt < 10) {
    cnt++;
    const int = parseInt(readlineSync.question("Enter integer: "));
    nums.push(int);
}

while(cnt == 10) {
    cnt--;
    console.log('In reverse order, you entered : ' + nums.reverse());
}

