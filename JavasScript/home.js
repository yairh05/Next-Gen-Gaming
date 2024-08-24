window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('root-sticky');
    } else {
        header.classList.remove('root-sticky');
    }
});
    

    const toggleBtn = document.querySelector('.toggle-btn')
    const toggleBtnIcon = document.querySelector('.toggle-btn i')
    const dropDownMenu = document.querySelector('.dropdown-menu')

    toggleBtn.onclick = function (){
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.className = isOpen
            ?'fa-solid fa-xmark'
            :'fa-solid fa-bars';
        }