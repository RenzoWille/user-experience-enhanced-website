document.addEventListener("DOMContentLoaded", function() {
    // Zoek alle afbeeldingen met de class .lazy-image
    const images = document.querySelectorAll('.lazy-image');

    images.forEach(img => {
        console.log("Afbeelding gevonden:", img.src);

        // Zoek de skeleton loader binnen dezelfde wrapper
        const skeleton = img.closest('.image-wrapper').querySelector('.skeleton');

        // Functie om de afbeelding te tonen en de skeleton te verbergen
        const showImage = () => {
            if (skeleton) {
                console.log("Skeleton gevonden en verborgen");
                skeleton.style.display = 'none';
            }
            img.style.display = 'block';
            img.style.opacity = '1';
        };

        // Check of de afbeelding al compleet geladen is
        if (img.complete && img.naturalHeight !== 0) { 
            console.log("Afbeelding is al geladen:", img.src);
            showImage();
        } else {
            console.log("Wacht op het laden van de afbeelding:", img.src);
            img.addEventListener('load', showImage);

            // Voeg een fallback toe als het laden mislukt
            img.addEventListener('error', () => {
                console.error("Afbeelding kon niet worden geladen:", img.src);
                if (skeleton) {
                    skeleton.style.display = 'none';
                }
            });
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