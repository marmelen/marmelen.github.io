const header = document.getElementById("nav");
const sticky = header.offsetTop; // Get the offset position of the navbar

// When the user scrolls the page, execute setOnTop
window.onscroll = function () { setOnTop() };

// Add the header-fixed and dark-bg classes to the header when you reach its scroll position.
function setOnTop() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-fixed");
        header.classList.add("header-dark-bg");
    } else {
        header.classList.remove("header-fixed");
        header.classList.remove("header-dark-bg");
    }
}