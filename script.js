/* =========================================================
   OPEN ENVELOPE
========================================================= */

const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");


function openEnvelope() {

    /*
        This prevents errors on pages
        where the envelope does not exist.
    */

    if (!envelope || !opening || !mainContent) {
        return;
    }


    /*
        Prevent opening the envelope twice.
    */

    if (envelope.classList.contains("open")) {
        return;
    }


    /*
        Add the open animation.
    */

    envelope.classList.add("open");


    /*
        Wait for the letter to come out.
    */

    setTimeout(function () {

        opening.classList.add("hide");

        mainContent.classList.add("show");

        document.body.style.overflowY = "auto";


        /*
            Return to the top of the homepage.
        */

        setTimeout(function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 300);


    }, 1000);

}


/* =========================================================
   OPEN BUTTON
========================================================= */

if (openButton) {

    openButton.addEventListener("click", function () {

        openEnvelope();

    });

}


/* =========================================================
   CLICK ENVELOPE
========================================================= */

if (envelope) {

    envelope.addEventListener("click", function () {

        openEnvelope();

    });

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

const heartsContainer = document.querySelector(".hearts");


function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";


    /*
        Random horizontal position.
    */

    heart.style.left = Math.random() * 100 + "%";


    /*
        Random size.
    */

    const size = Math.random() * 12 + 10;

    heart.style.fontSize = size + "px";


    /*
        Random animation duration.
    */

    const duration = Math.random() * 5 + 5;

    heart.style.animationDuration = duration + "s";


    heartsContainer.appendChild(heart);


    /*
        Remove heart after animation.
    */

    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


/*
    Create a heart every 900ms.
*/

setInterval(createHeart, 900);


/* =========================================================
   PREVENT SCROLLING ON OPENING SCREEN
========================================================= */

if (opening && mainContent) {

    document.body.style.overflow = "hidden";

}