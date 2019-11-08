const readlineSync = require("readline-sync");
const FREEZING_POINT_F = 32;
const FREEZING_POINT_C = 0;
const FREEZING_POINT_K = 273.2;
const BOILING_POINT_F = 212;
const BOILING_POINT_C = 100;
const BOILING_POINT_K = 373.2;

let temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ");
scale = scale.toLowerCase();


if (scale == "f") {
  if (temperature <= FREEZING_POINT_F) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= BOILING_POINT_F) {
    console.log("\nGas.\n");
  }
  else if (temperature < BOILING_POINT_F && temperature > FREEZING_POINT_F){
    console.log("\nLiquid.\n");
  }
  else {
    console.log("\nInvalid.\n");
  }
}
else if (scale == "c") {
  if (temperature <= FREEZING_POINT_C) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= BOILING_POINT_C) {
    console.log("\nGas.\n");
  }
  else if (temperature < BOILING_POINT_C && temperature > FREEZING_POINT_C) {
    console.log("\nLiquid.\n");
  }
  else {
    console.log("\nInvalid.\n");
  }
}
else if (scale == "k") {
  if (temperature <= FREEZING_POINT_K) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= BOILING_POINT_K) {
    console.log("\nGas.\n");
  }
  else if (temperature < BOILING_POINT_K && temperature > FREEZING_POINT_K){
    console.log("\nLiquid.\n");
  }
  else {
    console.log("\nInvalid.\n");
  }
}
