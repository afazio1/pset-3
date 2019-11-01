const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(number) || Number.isSafeInteger(number) != true){
  console.log("\nInvalid.");
}
else if ((number % 2) == 0){
  console.log("\nEven.");
}
else {
  console.log("\nOdd.");
}
