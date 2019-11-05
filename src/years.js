const readlineSync = require("readline-sync");

let year = Number(readlineSync.question("\nEnter a year: "));

const BASE_YEAR = 2020;

let yearDifference = Math.abs(BASE_YEAR - year);
if (year === 0){
  console.log("Invalid.");
}
else if (yearDifference % 4 == 0){
  console.log("\n" + year + " is a leap year.");
}
else if (yearDifference % 4 != 0){
  console.log("\n" + year + " is not a leap year.");
}
else {
  console.log("Invalid.");
}
