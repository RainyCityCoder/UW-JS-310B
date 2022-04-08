/**
 * This project is designed to satisfy the 
 * following final project requirements:
 * 1) One or more Classes (must use static methods and/or prototype methods)
 * 2) One or more timing functions
 * 3) Sets, updates, or changes local storage
 * 4) Write testable code, use Jasmine unit tests (see space-defense.spec.js)
 */

const outputText = {
    first: `As the Weapons Officer of the Star Freighter S.S. Fortune, it's up to you to keep the crew, and more importantly, the cargo safe. As the inevitable happens, and the Fortune is attacked by pirates, you race to your station. Your ship's underpowered weapons are outclassed by your enemy's, but your shields are stronger. How many enemy ships can you destroy?`,
    second: `You didn't beat your high score; try again!`,
    third: `Your score is`,
    fourth: `, would you like to save? (Reload page to play again)`,
    fifth: `Perhaps it's time to get back to work...`,
};

document.addEventListener("DOMContentLoaded", function() {
document.getElementById('output').innerText = `${outputText.first}`;

const attackBtn = document.getElementById('attackbtn');
const saveBtn = document.getElementById('saveBtn');
const retryBtn = document.getElementById('tryAgainBtn')
const scoreText = document.getElementById('score');
const mainOutput = document.getElementById('output');
let shipHealth = Math.round((Math.ceil(Math.random() * 30)) + 14);
let enemyShip = undefined;
let score = 0;
let saveBtnCounter = 0; // prevents "Save" button from flickering in & out of existance

const textOutput = ((textBlock) => {
    mainOutput.innerText = textBlock;
});

const scoreTextDisplay = ((param) => {
    scoreText.innerText = param;
});
    
const reportEnemyShipHealth = ((id) => {
    document.getElementById('enemy-ship-type').innerText = (enemyShip.name)
    document.getElementById(`${id}`).innerText = `${enemyShip.healthAmt}`;
});

const reportShipHealth = (() => {
    document.getElementById('ship-health').innerText = `${shipHealth}`;
});

const attackAmt = (() => {
    enemyShip.healthAmt -= 0.5;
    reportEnemyShipHealth('enemy-ship-health');
    shipHealth -= 1;
    reportShipHealth('ship-health');
});

// Classes here
class BaseEnemy {
    constructor() {
    }
    attack() {
        shipHealth -= 1;
        return shipHealth;
    }
}

class Light extends BaseEnemy {
    constructor(name) {
        super();
        this.healthAmt = 2;
        this.name = name;
    }
    attack() {
        super.attack();
    }
}

class Heavy extends BaseEnemy {
    constructor(name) {
        super();
        this.healthAmt = 4;
        this.name = name;
    }
    attack() {
        super.attack();
    }
}

const showEndBtns = (() => {
    document.getElementById('saveBtnWrapper').toggleAttribute('hidden');
    document.getElementById('tryAgainBtnWrapper').toggleAttribute('hidden');
});

// Timing Functions
setInterval(() => {
    if (enemyShip === undefined){
        let amt = Math.random();
        if (amt <= 0.4) {
            enemyShip = new Heavy('Heavy Star Fighter');
            document.getElementById('enemy-ship-type').innerText = (enemyShip.name.value)
        } else {
            enemyShip = new Light('Light Star Fighter');
            document.getElementById('enemy-ship-type').innerText = (enemyShip.name.value)
        }
    } else if (enemyShip.healthAmt < 0.4) {
        score += 1;
        scoreText.innerText = score;
        enemyShip = undefined;
    } else if (shipHealth <= 0) {
        let passedArg = `${outputText.third} ${score}${outputText.fourth}`;
        scoreTextDisplay(passedArg);
        attackBtn.parentNode.setAttribute('hidden','');
        if (saveBtnCounter === 0) {
            saveBtnCounter += 1;
            showEndBtns();
        }
    }
}, 1);

setTimeout(() => {
    textOutput(outputText.fifth); 
}, 900000);

// Local Storage Handling
saveBtn.addEventListener('click', () => {
    let existingScore = localStorage.getItem("space-defense-score");
    if (existingScore < score || !existingScore) {
        localStorage.setItem("space-defense-score", score)
    } else {
        textOutput(outputText.second);
    }
});

retryBtn.addEventListener('click', () => {
    window.location.reload();
});

attackBtn.addEventListener("click", attackAmt, true);

});
