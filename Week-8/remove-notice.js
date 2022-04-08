// vanilla J.S.
let notice = document.getElementById('maintenance-notice');

setTimeout(() => {
    notice.setAttribute('hidden', '');
}, 5000);

// jQuery
/* setTimeout(() => {
    $('#maintenance-notice').fadeOut('slow', function() {
        $('#maintenance-notice').remove();
    });
}, 5000); */