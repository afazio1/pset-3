const readlineSync = require("readline-sync");

let numericalGrade = Number(readlineSync.question("\nEnter a grade: "));

if (numericalGrade >= 90 && numericalGrade <= 100){
  console.log("\nYou recieved an A.\n");
}
else if (numericalGrade >= 80 && numericalGrade < 90){
  console.log("\nYou recieved a B.\n");
}
else if (numericalGrade >= 70 && numericalGrade < 80){
  console.log("\nYou recieved a C.\n");
}
else if (numericalGrade >= 60 && numericalGrade < 70){
  console.log("\nYou recieved a D.\n");
}
else if (numericalGrade >= 0 && numericalGrade < 60){
  console.log("\nYou recieved an F.\n");
}
else {
  console.log("\nInvalid.\n");
}
