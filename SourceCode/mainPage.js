/*
    Ethan Gutknecht's Personal Website
    Copyright 2022 (C) Ethan Gutknecht

    Javascript File
    07/24/2022
*/




// Variables
var copyFuncRunning = false;
history.scrollRestoration = "manual";

/*Prepare the page for start up*/
function startUpPage() {
    document.documentElement.style.overflowY = "hidden"
    document.body.style.overflowY = "hidden"
}

/*After the intro, remove the div and allow scrolling*/
function removeIntroDiv() {
    var introDiv = document.getElementById("introContainer");
    introDiv.parentNode.removeChild(introDiv);
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto"
}

/*Fire page start up functions*/
setTimeout("removeIntroDiv()", 5000);
window.onload = startUpPage;

/*Copy to clipboard function*/
function copyTextToClip() {
    // References 
    // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

    var email = "gutknechtethan@gmail.com";

    if (copyFuncRunning) {
        // If function is already running, cancel function
        return;
    }
    copyFuncRunning = true;
    if (!navigator.clipboard) {
        // Newer way of copying
        navigator.clipboard.writeText(email);
    } else {
        // Create new element - Avoid scrolling to bottom
        var textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Unable to copy', err);
        }

        // Remove elemement
        document.body.removeChild(textArea);
    }

    var iconElement = document.querySelector(".clipboard-icon");
    iconElement.classList.remove("fa-copy");
    iconElement.classList.add("fa-check");
    iconElement.classList.add("copySuccess");
    setTimeout(function () {
        iconElement.classList.add("fa-copy");
        iconElement.classList.remove("fa-check");
        iconElement.classList.remove("copySuccess");
        copyFuncRunning = false;
    }, 1000);
}

// Create animation on scroll
window.addEventListener('scroll', function () {
    // Current scroll percentagte
    var currScrollPercentage = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight))

    // Ranges for animations
    var aboutMeShowPercent = 0.07;
    var eduImageShowPercent = 0.22;
    var experienceImageShowPercent = 0.4;
    var certImageShowPercent = 0.6;
    var projectsImageShowPercent = 0.68;
    var gitImageShowPercent = 0.9;
    

    var bgTiles = document.querySelector(".bgTiles");
    if (currScrollPercentage > 0.0) {
        bgTiles.classList.add("active");

    } else {
        bgTiles.classList.remove("active");
    }
    
    var profilePictureFadeIn = document.querySelector(".profilePictureFadeIn");
    if (currScrollPercentage > aboutMeShowPercent) {
        profilePictureFadeIn.classList.add("active");

    } else {
        profilePictureFadeIn.classList.remove("active");
    }
    
    // EduImage Animation
    var eduImageAnimation = document.querySelectorAll(".eduImageAnimation");
    var muLogo = document.querySelector(".muLogo");
    if (currScrollPercentage > eduImageShowPercent) {
        for (var i = 0; i < eduImageAnimation.length; i++) {
            eduImageAnimation[i].classList.add("active");
            muLogo.classList.add("active");
        }
    } else {
        for (var i = 0; i < eduImageAnimation.length; i++) {
            eduImageAnimation[i].classList.remove("active");
            muLogo.classList.remove("active");
        }
    }

    // Experience Logos Animation
    var experienceLogos = document.querySelectorAll(".experienceLogos");
    if (currScrollPercentage > experienceImageShowPercent) {
        for (var i = 0; i < experienceLogos.length; i++) {
            experienceLogos[i].classList.add("active");
        }
    } else {
        for (var i = 0; i < experienceLogos.length; i++) {
            experienceLogos[i].classList.remove("active");
        }
    }

    // Cert Animation
    var certificationImage = document.querySelector(".certificationImage");
    if (currScrollPercentage > certImageShowPercent) {
        certificationImage.classList.add("active");

    } else {
        certificationImage.classList.remove("active");
    }

    // Project Animation
    var projects = document.querySelectorAll(".projectAnimations");
    if (currScrollPercentage > projectsImageShowPercent) {
        for (var i = 0; i < projects.length; i++) {
            projects[i].classList.add("active");
        }
    } else {
        for (var i = 0; i < projects.length; i++) {
            projects[i].classList.remove("active");
        }
    }
    
    // Get In Contact
    var gitImages = document.querySelectorAll(".gitAnimations");
    if (currScrollPercentage > gitImageShowPercent) {
        for (var i = 0; i < gitImages.length; i++) {
            gitImages[i].classList.add("active");
        }
    } else {
        for (var i = 0; i < gitImages.length; i++) {
            gitImages[i].classList.remove("active");
        }
    }
});
