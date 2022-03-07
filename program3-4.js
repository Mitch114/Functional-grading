/*
    Write a program that allows the user to enter a number of student scores.
    The program will use the best score for a student to assign their grade using the following scheme:

    The score is > or = the best - 10 then the grade is A.
    The score is > or = the best - 20 then the grade is B.
    The score is > or = the best - 30 then the grade is C.
    The score is > or = the best - 40 then the grade is D.
    Anything else is an F

    The program will start by prompting the user for how many students there are.
    It should then prompt them to enter all the scores and finishes by displaying the grades.
*/
const readlineSync = require("readline-sync")
let c = parseInt(readlineSync.question("Enter the number of students: "))
let grades = []
for (let i = 0; i < c; i++) {
  grades[i] = parseInt(readlineSync.question("Enter the grade for student " + (i + 1) + ": "))
}
let max = 0
grades.forEach((value) => {
  if (value > max) {
    max = value
  }
})
grades.forEach(function (v, i, a) {
  let grade = ""
  if (max - 10 <= v) {
    grade = "A"
  } else if (max - 20 <= v) {
    grade = "B"
  } else if (max - 30 <= v) {
    grade = "C"
  } else if (max - 40 <= v) {
    grade = "D"
  } else {
    grade = "F"
  }
  console.log("Student " + i + " has a score of " + v + " and their grade is an " + grade)
})

