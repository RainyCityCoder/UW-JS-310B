// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const plusOne = document.getElementById('up');
const minusOne = document.getElementById('down');
const htmlCounter = document.querySelector('p.counter-counter');
let counter = 0;
plusOne.addEventListener('click', () => {
    counter++;
    htmlCounter.innerText = counter;
});
minusOne.addEventListener('click', () => {
    counter--;
    htmlCounter.innerText = counter;
})