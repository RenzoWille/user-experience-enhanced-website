document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lazy-image');
 
    images.forEach(img => {
        const skeleton = img.previousElementSibling;
        const showImage = () => {

            if (skeleton && skeleton.classList.contains('skeleton')) {
                skeleton.style.display = 'none';
            }

            img.style.display = 'block';
        };

        img.style.display = 'none';
        if (img.complete) { 
            
            // If the image has already loaded
            showImage();
        } else {
            // If not, wait for the load event
            img.addEventListener('load', showImage);
        }
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