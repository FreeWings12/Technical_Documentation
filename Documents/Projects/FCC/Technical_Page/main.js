//Values
const menubar = document.querySelector(".menubar");
const navbar = document.querySelector("#navbar");
const navbarHeader = document.querySelector("#navbar header");
const navbarUl = document.querySelector("#navbar ul");
const navLinks = document.querySelectorAll(".nav-link");
const mainDoc = document.querySelector("#main-doc");

//Event Listeners
menubar.addEventListener("click", showNavbarToggle);
mainDoc.addEventListener("click", hideNavbarToggle);
for (let navLink of navLinks) {
    navLink.addEventListener("click", showNavbarToggle);
}

//Functions
function showNavbarToggle() {
    navbar.classList.toggle("show");
    navbarUl.classList.toggle("visible");
    navbarHeader.classList.toggle("visible");
}

function hideNavbarToggle() {
    navbar.className = "navbar";
    navbarHeader.classList.remove("visible");
    navbarUl.classList.remove("visible");
}
