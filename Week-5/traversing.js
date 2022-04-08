// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
let bodyChildNodes = body.childNodes;
let mainNode = bodyChildNodes[1];
console.log(mainNode);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
let parentOne = ul.parentNode;
let parentTwo = parentOne.parentNode;
console.log(parentTwo);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
let prevSibUl = p.previousElementSibling;
let ulChildren = prevSibUl.childNodes;
let thirdListItem = ulChildren[5];
console.log(thirdListItem);