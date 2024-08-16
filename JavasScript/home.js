window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('root-sticky');
    } else {
        header.classList.remove('root-sticky');
    }
});


