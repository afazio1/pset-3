const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(number) || Number.isSafeInteger(number) != true){
  console.log("\nInvalid.\n");
}
else if ((number % 2) == 0){
  console.log("\nEven.\n");
}
else {
  console.log("\nOdd.\n");
}
