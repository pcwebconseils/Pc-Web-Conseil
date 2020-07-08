/* Changement d'état de la barre de navigation au scroll de la page */

window.onscroll = function () { myFunction() };

var nav = document.getElementById("nav");
var navScroll = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > navScroll) {
        nav.classList.add("nav-scoll");
    } else {
        nav.classList.remove("nav-scoll");
    }
}
