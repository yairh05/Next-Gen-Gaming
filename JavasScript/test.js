document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const responsiveNavContainer = document.querySelector(".responsive-nav-container");

    menuToggle.addEventListener("click", function() {
        responsiveNavContainer.classList.toggle("open");
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const responsiveNavContainer = document.querySelector('.responsive-nav-container');

menuToggle.addEventListener('click', () => {
    responsiveNavContainer.classList.toggle('open');
});
