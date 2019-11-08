const readlineSync = require("readline-sync");

let month = readlineSync.question("\nEnter a month: ");
month = month.toLowerCase();

if (month == "jan" || month == "january" || month == "mar" || month == "march" || month == "may" || month == "jul" || month == "july" || month == "aug" || month == "august" || month == "oct" || month == "october" || month == "dec" || month == "december") {
  console.log("\n31 days.\n");
}
else if (month == "apr" || month == "april" || month == "jun" || month == "june" || month == "sep" || month == "september" || month == "nov" || month == "november") {
  console.log("\n30 days.\n");
}
else if (month == "feb" || month == "february") {
  console.log("\n28 of 29 days.\n");
}
else {
  console.log("\nInvalid.\n");
}
