let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-links");
menu.onclick = () => {
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("open");
}