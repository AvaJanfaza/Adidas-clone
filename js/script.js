'use strict';

const nav = document.querySelector("nav");

const topBar = document.querySelector(".top-bar");
const topBarModal = document.querySelector(".top-bar-modal");
const closeModalIcon = document.querySelector(".close-topBar-modal");

// grab both scroll buttons and the container that holds the resource cards
const rightScrollBtn = document.querySelector(".right-scroll-btn");
const leftScrollBtn = document.querySelector(".left-scroll-btn");
const relatedResourcesContainer = document.querySelector(".related-resources-grid");

// when the page is scrolled , show/hide the top offset of the nav bar
window.addEventListener("scroll" , () => {
    if (window.scrollY >= 700){
        nav.style.top = "0";
    }
    else{
        nav.style.top = "40px"
    }
});


// Open the modal
topBar.addEventListener("click" , () => {
    topBarModal.classList.add("show-modal");
});

// Close the modal
closeModalIcon.addEventListener("click" , () => {
    topBarModal.classList.remove("show-modal");
});

// close the modal when clicking outside
window.addEventListener("click" , (e) => {
    if (!topBarModal.contains(e.target) && !topBar.contains(e.target)){
        topBarModal.classList.remove("show-modal");
    }
});


// scroll the container to the right when the right button is clicked
rightScrollBtn.addEventListener("click" , () => {
    relatedResourcesContainer.scrollBy({
        left : 1300,
        behavior : "smooth",
    });
    leftScrollBtn.classList.add("left-scroll-btn-visible");
    rightScrollBtn.classList.add("right-scroll-btn-hide");
});


// scroll the container back to the left when the left button is clicked
leftScrollBtn.addEventListener("click" , () => {
    relatedResourcesContainer.scrollBy({
        left : -1300,
        behavior : "smooth",
    });
    leftScrollBtn.classList.remove("left-scroll-btn-visible");
    rightScrollBtn.classList.remove("right-scroll-btn-hide");
});