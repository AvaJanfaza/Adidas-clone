'use strict';

const topBar = document.querySelector(".top-bar");
const topBarModal = document.querySelector(".top-bar-modal");
const closeModalIcon = document.querySelector(".close-topBar-modal");


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
})
