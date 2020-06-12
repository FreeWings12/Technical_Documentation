const menubar = document.querySelector(".menubar");
const navbar = document.querySelector("#navbar");
const navbarHeader = document.querySelector("#navbar header");
const navbarUl = document.querySelector("#navbar ul");
const navLinks = document.querySelectorAll(".nav-link");
const mainDoc = document.querySelector("#main-doc");
//Event Listeners
menubar.addEventListener("click", displayMenubar);
for (let navLink of navLinks) {

    navLink.addEventListener("click", hideMenubar);
}
mainDoc.addEventListener("click", hideMenubar);

//Functions
function displayMenubar() {
    navbarHeader.style.visibility = "visible";
    navbarUl.style.visibility = "visible";
    navbar.style.backgroundColor = "black";
    navbar.style.zIndex = 1;
}

function hideMenubar() {
    navbarHeader.style.visibility = "hidden";
    navbarUl.style.visibility = "hidden";
    navbar.style.backgroundColor = "transparent";

}
