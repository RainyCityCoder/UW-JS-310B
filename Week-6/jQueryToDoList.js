$( document ).ready(function() {

/**
 * Toggles "done" class on <li> element
 */
$('ul').click(function(e) {
  $(e.target).parent().toggleClass('done');
});

/* $('li').click(function(e) {
  $(this).toggleClass('done');
}) */

/**
 * Delete element when delete link clicked
 */

// Includes (tested, working) extra credit.
$('ul').click(function(e) {
  if (e.target.className === 'delete') {
    $(e.target).parent().fadeOut('slow', function() {
    $(e.target).remove();
    });
  } 
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  // commented out due to errors at runtime
  // e.preventDefault(); 
  const text = $('input').val();

  // rest here...

  let $newDeleteBtn = $('<a>').text('Delete').addClass('delete').click(function(e) {
    $(e.target).parent().fadeOut('slow', function() {
      $(e.target).remove();
  });
});
  
  let $newSpan = $('<span>').text(text);
  
  let $newLi = $('<li>');
  $newLi.append($newSpan, $newDeleteBtn);
  
  $('ul').append($newLi);
}

// add listener for add

$('a.add-item').click(function (e) {
  addListItem(e);
});

})