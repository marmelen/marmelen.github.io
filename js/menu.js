const menu = document.getElementById("overflow-menu");
const menuItems = document.querySelectorAll(".overflow-menu-link");
const hamburger = document.getElementById("menu-hamburger-btns");
const closeIcon = document.getElementById("close-icon");
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    nav.classList.remove("header-fixed");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    nav.classList.add("header-fixed");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)
