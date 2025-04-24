document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lazy-image');

    images.forEach(img => {
        img.style.display = 'none'; // verberg standaard de afbeelding

        img.addEventListener('load', () => {
            const skeleton = img.previousElementSibling;
            if (skeleton && skeleton.classList.contains('skeleton')) {
                skeleton.style.display = 'none';
            }
            img.style.display = 'block'; // toon de afbeelding als hij geladen is
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-button');
    const menu = document.getElementById('menu');

    // Open of sluit het menu wanneer op het icoon wordt geklikt
    hamburger.addEventListener('click', (event) => {
        menu.classList.toggle('open');
        event.stopPropagation(); // Voorkomt dat de klik ook het document-event triggert
    });

    // Sluit het menu wanneer ergens buiten het menu wordt geklikt
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".post-like button svg");

    likeButtons.forEach(svg => {
        svg.addEventListener("click", function (event) {

            if (this.getAttribute("fill") === "red") {
                this.setAttribute("fill", "none");
                this.setAttribute("stroke", "red");
            } else {
                this.setAttribute("fill", "red");
                this.setAttribute("stroke", "red");
            }
        });
    });
});
