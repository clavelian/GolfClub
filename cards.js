/*
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/
let count = 0;

function cc(card) {
  // Function to update the count based on card value
  function updateCount(cardValue) {
    switch (cardValue) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
      default:
        // Do nothing for 7, 8, 9
        break;
    }
  }

  // Convert string values to numbers if applicable
  if (typeof card === "string") {
    switch (card) {
      case "J":
        card = 10;
        break;
      case "Q":
        card = 10;
        break;
      case "K":
        card = 10;
        break;
      case "A":
        card = 10;
        break;
      default:
        // Do nothing, card remains as string
        break;
    }
  }

  // Update count based on card value
  updateCount(card);

  // Determine the decision based on count value
  let decision = count > 0 ? "Bet" : "Hold";

  // Return the current count and decision separated by a space
  return count + " " + decision;
}

// Test cases
console.log(cc(2)); // Output: 1 Bet
console.log(cc(3)); // Output: 2 Bet
console.log(cc(7)); // Output: 2 Bet (count remains same)
console.log(cc("K")); // Output: 1 Bet
console.log(cc("A")); // Output: 0 Hold
console.log(cc(10)); // Output: -1 Hold
console.log(cc("J")); // Output: -2 Hold
console.log(cc(9)); // Output: -2 Hold (count remains same)
console.log(cc(2)); // Output: -1 Hold
console.log(cc("Q")); // Output: -2 Hold
