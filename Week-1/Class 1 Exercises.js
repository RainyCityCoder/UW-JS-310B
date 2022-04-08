/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const pizzaSmSize = 13;
const pizzaLgSize = 17;


function pizzaSizeInSq (pizzaSize) {
    let sqIn = Math.round(Math.PI * ((pizzaSize / 2) ** 2));
    return `This Pagliacci's pizza is about ${sqIn} inches square`
}

pizzaSizeInSq(pizzaSmSize); // answer: ~133in^2
pizzaSizeInSq(pizzaLgSize); // answer: ~227in^2

// 2. What is the cost per square inch of each pizza?

const pizzaSmPrice = 16.99;
const pizzaLgPrice = 19.99;

function pricePerInSq (pizzaSize, pizzaPrice) {
    // this function can be run independently of previous functions
    let sqIn = Math.round(Math.PI * ((pizzaSize / 2) ** 2));
    let priceDecimal = pizzaPrice/sqIn;
    let priceInt = priceDecimal * 100;
    /* takes decimal provided by pizzaPrice/sqIn and converts to 
    integer for Math.round() */
    let priceInCents = Math.round(priceInt); 
    //rounds up at 0.5, so return statement price is approximate (human-friendly)
    let priceFinal = priceInCents / 100;
    // takes price back to decimal
    return `This Pagliacci's pizza costs about $${priceFinal} per square inch.`
}

pricePerInSq(pizzaSmSize, pizzaSmPrice); // answer: ~$0.13 per in^2
pricePerInSq(pizzaLgSize, pizzaLgPrice); // answer: ~$0.09 per in^2

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

function randomCardNumber () {
    return (Math.ceil(Math.random() * 13)); // <-- important part
}

function trueName (card) {
    if (card == 1) {
        card = "Ace";
    } else if (card == 11) {
        card = "Jack"
    } else if (card == 12) {
        card = "Queen";
    } else if (card == 13) {
        card = "King";
    } else {
        card = String(card);
    }
    return card;
}

function randomCard () {
    let card = randomCardNumber();
    result = trueName(card);
    if (card === 1 || card >= 11) {
        let result = String(trueName(card));
        return `Your card is ${card} (${result}).`
    } else {
        return `Your card is ${card}.`;
    }
}

randomCard(); // <-- generates answer (and face card name if any)

// 4. Draw 3 cards and use Math to determine the highest
// card

function rankCards (numCardsToDraw) {
    const cardList = [];
    while (numCardsToDraw > 0) {
        cardList.push(randomCardNumber()); 
        numCardsToDraw--;
    }
    let maxNum = Math.max(...cardList); // <-- important part
    let strMaxNum = String(maxNum);
    if (maxNum === 1 || maxNum >= 11) {
        let result = String(trueName(maxNum));
        return `The higest value card drawn was a ${strMaxNum} (${result}) from the list ${cardList}.`
    } else {
        return `The higest value card drawn was a ${strMaxNum} from the list ${cardList}.`;
    }
    
}

rankCards(3); // <-- generates answer

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "James";
const lastName = "Kirk";
const streetAddress = "C.O. Starfleet Headquarters";
const streetAddress2 = "Murray Circle";
const city = "Sausalito";
const state = "CA";
const zipCode = 94965;

let mailingAddress = `${firstName} ${lastName}
${streetAddress}
${streetAddress2}
${city}, ${state}  ${zipCode}`;

console.log(mailingAddress); // <--returns properly formatted address


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from 
// this string into a variable.
// Hint: use indexOf, slice, and / or substring

function getFirstName (stringVar) {
    let spaceIndex = stringVar.indexOf(' ', 0);
    let extractName = stringVar.slice(0, spaceIndex);
    return extractName;
}

getFirstName(`${firstName} ${lastName}
${streetAddress}
${streetAddress2}
${city}, ${state}  ${zipCode}`); 

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

/* Version 1: returns correct date but is half an hour early.
Doesn't account for DST */
function findDateMidpoint(firstDate, secondDate) {
    const beginDate = new Date(firstDate); 
    const endDate = new Date(secondDate);
    let elapsedTimeFirst = beginDate.getTime();
    let elapsedTimeSecond = endDate.getTime(); 
    let elapsedMilliSeconds = elapsedTimeSecond - elapsedTimeFirst;
    let midPointMilliSeconds = elapsedMilliSeconds / 2;
    let timeSinceEpoch = midPointMilliSeconds + elapsedTimeFirst;
    let midPointDate = new Date(timeSinceEpoch); 
    return midPointDate;
}
findDateMidpoint('1/1/2020 00:00:00', '4/1/2020 00:00:00');

/* Version 2: added if statement to try and account for DST and missing
half hour, but doesn't somehow. Extracting if statement and running it
independently produces "missing )" error despite the ('s all being closed. */
function findDateMidpoint(firstDate, secondDate) {
    let daylightAdjustment = 0;
    const beginDate = new Date(firstDate); 
    const endDate = new Date(secondDate);
    let elapsedTimeFirst = beginDate.getTime();
    let elapsedTimeSecond = endDate.getTime(); 
    let elapsedMilliSeconds = elapsedTimeSecond - elapsedTimeFirst;
    // using half an hour because midpoint calc splits DST hour into 2
    if (beginDate.getMonth() < 2 && endDate.getMonth() > 2) {
        let daylightAdjustment = 1800000;
    } else if (beginDate.getMonth() < 10 && endDate.getMonth() > 10) {
        let daylightAdjustment = -1800000;
    } else {
        let daylightAdjustment = 0;
    }
    let midPointMilliSeconds = (elapsedMilliSeconds / 2) + daylightAdjustment;
    let timeSinceEpoch = midPointMilliSeconds + elapsedTimeFirst;
    let midPointDate = new Date(timeSinceEpoch); 
    return midPointDate;
}
findDateMidpoint('1/1/2020 00:00:00','4/1/2020 00:00:00');

/* Version 3: Tried to consolidate code and account for PST offset.
Function returns correct date but 8 hours off Wolfram's answer. */
function findDateMidpoint(firstDate, secondDate) {
    let daylightAdjustment = 0;
    const beginDate = new Date(firstDate); 
    const endDate = new Date(secondDate);
    // 1000ms per sec.
    const offsetBeginDate = beginDate - (beginDate.getTimezoneOffset() / 1000);
    const offsetEndDate = endDate - (endDate.getTimezoneOffset() / 1000);
    // using half an hour because midpoint calc splits DST hour into 2
    if (beginDate.getMonth() < 2 && endDate.getMonth() > 2) {
        let daylightAdjustment = 1800000;
    } else if (beginDate.getMonth() < 10 && endDate.getMonth() > 10) {
        let daylightAdjustment = -1800000;
    } else {
        let daylightAdjustment = 0;
    }
    let midPointMilliSeconds = ((offsetEndDate - offsetBeginDate) + daylightAdjustment) / 2;
    let midPointDate = new Date(midPointMilliSeconds + offsetBeginDate); 
    let answer = midPointDate.toLocaleString();
    return answer;
}
findDateMidpoint('1/1/2020 00:00:00Z', '4/1/2020 00:00:00Z');

// Compared against Wolfram Alpha:
// https://www.wolframalpha.com/input/?i=midpoint+between+1%2F1%2F2020+00%3A00%3A00+and+4%2F1%2F2020+00%3A00%3A00

// Starting hint:
// const endDate = new Date(2019, 3, 1);
