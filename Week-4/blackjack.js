const blackjackDeck = getDeck();

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  drawCard() {
    this.hand.push(blackjackDeck[Math.floor(Math.random() * 52)]);
  }
}; 

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer'); 
const player = new CardPlayer('Player'); 

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
const calcPoints = (hand) => {
  let total = 0;
  let numAces = 0;
  let blackJackScore = {};
  let isSoft = true;
  hand.forEach((card) => total += card.val);
  hand.forEach((card) => {if (card.displayVal === 'Ace') {numAces += 1;}})
  if (total > 21 && numAces > 0) {
      do {
          numAces -= 1;
          total -= 10;
      } while (total > 21 && numAces > 0) 
  }
  blackJackScore['total'] = total;
  blackJackScore['isSoft'] = Boolean(numAces);
  return blackJackScore;
}

/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
const dealerShouldDraw = (dealerHand) => {
  let handObject = calcPoints(dealerHand);
  let handValue = handObject.total;
  let handHasAceValueEleven = handObject.isSoft;
  if (handValue <= 16) {
    return true;
  } else if (handValue === 17 && handHasAceValueEleven) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  // startGame() has ability to end game if player/dealerScore > 21
  if (playerScore > dealerScore) {
    return `Player wins with ${playerScore}, as dealer's hand is ${dealerScore}.`;
  } else {
    return `Dealer wins with ${dealerScore}, as player's hand is ${playerScore}.`;
  }
}

/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

// Tried to get Extra Credit # 7 working, but no luck.
/*
const showHandHTML = (playerhand) => {
  const displayHand = playerhand.map((card) => card.displayVal);
  return displayHand;
}
*/

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
//  Tried to get Extra Credit # 7 working, but no luck.
//  document.getElementById('playershand').innerHTML = `${showHand(player)}`;
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  // Extra Credit # 8, part one of two
  } else if (playerScore === 21 && player.hand.length === 2) {
    return `Player wins with ${playerScore} points and ${player.hand.length} cards.`
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
//  Tried to get Extra Credit # 7 working, but no luck.
//  document.getElementById('dealershand').innerHTML = `${showHand(dealer)}`;
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  // Extra Credit # 8 part two of two
  } else if (dealerScore === 21 && dealer.hand.length === 2) {
    return `Dealer wins with ${dealerScore} points and ${dealer.hand.length} cards.`
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());