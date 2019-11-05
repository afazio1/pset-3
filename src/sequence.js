const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.\n");
const number1 = Number(readlineSync.question(""));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

let difference1 = number2 - number1;
let difference2 = number3 - number2;

if (difference1 > 0){
  if (difference2 > 0){
    console.log("\nStrictly increasing.");
  }
  else if (difference2 < 0){
    console.log("\nUnordered.");
  }
  else {
    console.log("\nIncreasing.")
  }
}
else if (difference1 == 0){
  if(difference2 == 0){
    console.log("\nEqual.");
  }
  else if (difference2 < 0){
    console.log("\nDecreasing.");
  }
  else {
    console.log("\nIncreasing.");
  }
}
else if (difference1 < 0){
  if (difference2 < 0){
    console.log("\nStrictly decreasing.");
  }
  else if (difference2 == 0){
    console.log("\nDecreasing.");
  }
  else if (difference2 > 0){
    console.log("\nUnordered.");
  }
}
else {
  console.log("\nInvalid.");
}
