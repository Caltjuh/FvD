// JavaScript Document
console.log("hi");

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

// SLIDESHOW //
// Bron: w3schools //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// EINDE SLIDESHOW //

// PRODUCT CONTAINER //
// Bron: Devression - YouTube (link in bronnenlijst) //
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nextProduct')];
const preBtn = [...document.querySelectorAll('.prevProduct')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// EINDE PRODUCT CONTAINER //