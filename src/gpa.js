const readlineSync = require("readline-sync");

let letterGrade = readlineSync.question("\nEnter a letter grade: ");
letterGrade = letterGrade.toLowerCase();

switch(letterGrade){
  case "a+":
    console.log("\nYour GPA is 4.00.");
    break;
  case "a":
    console.log("\nYour GPA is 4.00.");
    break;
  case "a-":
    console.log("\nYour GPA is 3.67.");
    break;
  case "b+":
    console.log("\nYour GPA is 3.33.");
    break;
  case "b":
    console.log("\nYour GPA is 3.00.");
    break;
  case "b-":
    console.log("\nYour GPA is 2.67.");
    break;
  case "c+":
    console.log("\nYour GPA is 2.33.");
    break;
  case "c":
    console.log("\nYour GPA is 2.00.");
    break;
  case "c-":
    console.log("\nYour GPA is 1.67.");
    break;
  case "d+":
    console.log("\nYour GPA is 1.33.");
    break;
  case "d":
    console.log("\nYour GPA is 1.00.");
    break;
  case "d-":
    console.log("\nYour GPA is 0.67.");
    break;
  case "f":
    console.log("\nYour GPA is 0.00.");
    break;
  default:
    console.log("\nInvalid.\n");
}
