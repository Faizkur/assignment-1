const menuBar = document.querySelector(".menuBar")
const menuNav = document.querySelector(".menuNav")

menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
})

