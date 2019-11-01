 const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.\n");
const number1 = Number(readlineSync.question(""));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

let difference1 = number2 - number1;
let difference2 = number3 - number2;

if (difference1 > 0){
  if (difference2 > 0){
    console.log("Strictly Increasing.");
  }
  else {

  }
}
else {
  console.log("\nInvalid.");
}
