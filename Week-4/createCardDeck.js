/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  let deck = [];
  
  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      let displayVal = '';
      let val = 0;

      switch (j) {

        case (1):
          displayVal = "Ace"
          val = 11;
          break;
        case (11):
          displayVal = "Jack";
          val = 10;
          break;
        case (12):
          displayVal = "Queen";
          val = 10;
          break;
        case (13):
          displayVal = "King";
          val = 10;
          break;        
        default:
          displayVal = String(j);
          val = j;
          break;
      }

      deck.push({
        val: val,
        displayVal: displayVal,
        suit: suits[i],
      })

    }
  } 
  return deck;  
}



// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);