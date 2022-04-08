// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
let eventListenerTarget = document.querySelector('tbody');
eventListenerTarget.addEventListener('click', (e) => {
    let clickTarget = e.target.closest('td');
    clickTarget.innerHTML = `${e.pageX}, ${e.pageY}`;
}); 