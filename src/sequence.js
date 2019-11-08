const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.\n");
const number1 = Number(readlineSync.question(""));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

let difference1 = number2 - number1;
let difference2 = number3 - number2;

if (difference1 > 0){
  if (difference2 > 0){
    console.log("\nStrictly increasing.\n");
  }
  else if (difference2 < 0){
    console.log("\nUnordered.\n");
  }
  else {
    console.log("\nIncreasing.\n")
  }
}
else if (difference1 == 0){
  if(difference2 == 0){
    console.log("\nEqual.\n");
  }
  else if (difference2 < 0){
    console.log("\nDecreasing.\n");
  }
  else {
    console.log("\nIncreasing.\n");
  }
}
else if (difference1 < 0){
  if (difference2 < 0){
    console.log("\nStrictly decreasing.\n");
  }
  else if (difference2 == 0){
    console.log("\nDecreasing.\n");
  }
  else if (difference2 > 0){
    console.log("\nUnordered.\n");
  }
}
else {
  console.log("\nInvalid.\n");
}
