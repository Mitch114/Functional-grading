/*
    Write a program to analyze scores.
    The program should be able to read an unspecified number of scores input by the user.
    The user should enter a negative number when they are done entering scores.
    The program should calculate the average and display how many scores are greater than the average,
    how many are lower than the average, and how many are equal to the average. 
*/

const readlineSync = require('readline-sync');

let scores = [];
let total = 0;

n =  parseInt(readlineSync.question("Enter scores: "));
while(n>=0) {
    n =  parseInt(readlineSync.question("Enter scores: "));
    scores.push(n);
    total += n;
}


var avg = total/scores.length;

var greater = 0;
var smaller = 0;
var equal = 0;

for(i = 0; i < scores.length; i++) {
    if(scores[i] > avg)
        greater++;
    else if(scores[i] < avg)
        smaller++;
    else equal++;
}

console.log("Average: " + avg);
console.log("Scores greater than average: " + greater);
console.log("Scores smaller than average: " + smaller);
console.log("Scores equal to average: " + equal);
