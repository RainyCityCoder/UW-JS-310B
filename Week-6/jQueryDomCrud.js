$( document ).ready(function() {
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
    let $newA = $('<a>');
    
    $newA.text("Buy Now!");
    $newA.attr('id', 'cta');
    
    let $main = $('main');
    $main.append($newA);

// Access (read) the data-color attribute of the <img>,
// log to the console
    let $img = $('img');
    let color = $img.data('color');
    // Both of these work:
    console.log(color);
    console.log($img.data('color'));

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
    let $li = $('li');
    $li.eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
    $toRemove = $('p');
    $toRemove.remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
    let $newP = $('<p>');
    $newP.text("Added to cart");
    
    $newA.click(function(e) {
        $newA.remove();
        $main.append($newP);
    });
});

/**
 * Lean version:
 * let $newA = $('<a>').text("Buy Now!").attr('id','cta').click(function(e) {
 *   $newA.remove();
 *   $main.append($newP);
 * });
 */