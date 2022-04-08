// If an li element is clicked, toggle the class "done" on the <li>
let clickedLiItem = document.querySelectorAll('li');
clickedLiItem.forEach((clickedElement) => 
  clickedElement.addEventListener('click', function() {
    clickedElement.classList.add("done");
})); 

// If a delete link is clicked, delete the li element / remove from the DOM
let deleteableLink = document.querySelectorAll('a.delete');
deleteableLink.forEach((deletableElement) => 
  deletableElement.addEventListener('click', function() {
    let parentEl = deletableElement.parentElement;
    parentEl.remove();
  }));

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  let newItem = document.createElement('li'); //works
  console.log(newItem);
  newItem.addEventListener('click', function() {
    newItem.classList.add("done");
  });
  
  let newItemSpan = document.createElement('span');
  newItemSpan.append(text);
  newItem.append(newItemSpan);
  console.log(newItemSpan); // works

  let newItemDelBtn = document.createElement('a');
  newItemDelBtn.className = "delete";
  newItemDelBtn.append("Delete");
  newItemDelBtn.addEventListener('click', function() {
    let parentEl = newItemDelBtn.parentElement;
    parentEl.remove();
  });
  console.log(newItemDelBtn);
  newItem.append(newItemDelBtn); //works

  document.querySelector('ul.today-list').appendChild(newItem);
  console.log(newItem);
};

let addButton = document.querySelector('a.add-item');
addButton.addEventListener('click', addListItem);