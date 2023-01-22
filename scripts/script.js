// JavaScript Document

// HAMBURGER MENU//
// Credits: Bahaa Salaymeh //
var menu_icon = document.querySelector("header section img:first-of-type");
var menu_close_icon = document.querySelector("header nav img");
var main_menu = document.querySelector("header nav");

menu_icon.addEventListener("click", openmenu);
menu_close_icon.addEventListener("click", closemenu);

function openmenu() {
    console.log("test");
    main_menu.classList.add("menu");
}

function closemenu() {
    main_menu.classList.remove("menu");
}
// EINDE HAMBURGER MENU //

// LIGHT & DARKMODE //

function darkMode() {
    var bodyDarkMode = document.querySelector('body');
    var footerDarkMode = document.querySelector('footer');
    bodyDarkMode.classList.toggle("dark-mode");
    footerDarkMode.classList.toggle("dark-mode");
}

const darkmodebtn = document.querySelector('.darkmodebtn');
darkmodebtn.addEventListener('click', darkMode);
console.log(darkmodebtn);


// EINDE LIGHT & DARKMODE //