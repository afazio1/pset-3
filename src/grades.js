const readlineSync = require("readline-sync");

let numericalGrade = Number(readlineSync.question("\nEnter a grade: "));

if (numericalGrade >= 90 && numericalGrade <= 100){
  console.log("\nYou recieved an A.");
}
else if (numericalGrade >= 80 && numericalGrade < 90){
  console.log("\nYou recieved a B.");
}
else if (numericalGrade >= 70 && numericalGrade < 80){
  console.log("\nYou recieved a C.");
}
else if (numericalGrade >= 60 && numericalGrade < 70){
  console.log("\nYou recieved a D.");
}
else if (numericalGrade >= 0 && numericalGrade < 60){
  console.log("\nYou recieved an F.");
}
else {
  console.log("\nInvalid.");
}
