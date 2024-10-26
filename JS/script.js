document.getElementById('vestral').addEventListener('click', function() {
    window.location.href = 'index.html';
});

window.addEventListener('scroll', reveal);

function reveal () {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals [i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


/* ARISTS */
function redirectToPage(url) {
    window.location.href = url; // Redirects the user to the specified URL
}
