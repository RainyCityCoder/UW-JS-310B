/**
 * This project is designed to satisfy the 
 * following final project requirements:
 * 1) One or more fetch requests to a 3rd party API
 * 2) Contains form fields, validates those fields
 */

document.addEventListener("DOMContentLoaded", function() {
    
const baseUrl = `https://api.vatcomply.com/rates?base=`;
const fromList = document.getElementById(`from-list`);
const convertBtn = document.getElementById('sendBtn');
let currencyFrom = document.getElementById('convert-from-selector');
let currencyTo = document.getElementById('convert-to-selector');
let amountFrom = document.getElementById('number');
let resultDisplay = document.getElementById('result');
let workingTable = {};
    
const acceptableCurrencies = Array.from(fromList.options).map((elem) => {
    return elem.value;
});

// form field validation requirement
convertBtn.addEventListener('click', (e) => { 
    if (!(acceptableCurrencies.includes(currencyFrom.value))) {
    window.alert('Please choose a CONVERT FROM curency from available selections')
    }
});

// form field validation requirement
convertBtn.addEventListener('click', (e) => {
    if (!(acceptableCurrencies.includes(currencyTo.value))) {
    window.alert('Please choose an CONVERT TO currency from available selections')
    }
});

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let convertFrom = currencyFrom.value;
    let convertTo = currencyTo.value;
    let amountVal = amountFrom.value;
    let url = `${baseUrl}`;
    // fetch requirement
    fetch(`${baseUrl}${convertFrom}`) 
        .then(resp => resp.json())
        .then((data) => {workingTable = data.rates})
        .then(() => {
            let conversionAmt = Math.round((workingTable[convertTo] * amountVal) * 100) / 100; 
            resultDisplay.innerText = `${conversionAmt}`;
        })
})

});
