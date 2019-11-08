const readlineSync = require("readline-sync");

let playingCard = (readlineSync.question("\nEnter a playing card: "));
playingCard = playingCard.toLowerCase();
let cardRank = playingCard.charAt(0);
let cardSuit = playingCard.charAt(1);

if (cardSuit == "c") {
  cardSuit = "Clubs";
  findCardRank(cardRank, cardSuit);
}

else if (cardSuit == "d") {
  cardSuit = "Diamonds";
  findCardRank(cardRank, cardSuit);
}
else if (cardSuit == "h") {
  cardSuit = "Hearts";
  findCardRank(cardRank, cardSuit);
}
else if (cardSuit == "s") {
  cardSuit = "Spades";
  findCardRank(cardRank, cardSuit);
}

else {
  console.log("\nInvalid.\n");
}

// Function for finding card rank
function findCardRank(x, y) {
  if (x == "2") {
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "3"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "4"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "5"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "6"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "7"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "8"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "9"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "10"){
    console.log("\n"+ x + " of " + y + ".\n");
  }
  else if (x == "j"){
    console.log("\n"+ "Jack of " + y + ".\n");
  }
  else if (x == "q"){
    console.log("\n"+ "Queen of " + y + ".\n");
  }
  else if (x == "k"){
    console.log("\n"+ "King of " + y + ".\n");
  }
  else if (x == "a"){
    console.log("\n"+ "Ace of " + y + ".\n");
  }
  else {
    console.log("\n"+ "Invalid.\n");
  }
}
