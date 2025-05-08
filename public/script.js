document.addEventListener("DOMContentLoaded", function() {
    // Zoek alle afbeeldingen met de class .lazy-image
    const images = document.querySelectorAll('.lazy-image');

    images.forEach(img => {
        console.log("Gevonden afbeelding:", img.src);

        // Zoek de skeleton loader: probeer direct ervoor, of in een wrapper
        const skeleton = img.previousElementSibling;

        // Functie om de afbeelding te tonen en de skeleton te verbergen
        const showImage = () => {
            if (skeleton) {
                console.log("Skeleton gevonden, verbergen...");
                skeleton.style.display = 'none';
            } else {
                console.log("Geen skeleton gevonden voor afbeelding:", img.src);
            }

            img.style.display = 'block';
        };

        // Verberg de afbeelding standaard
        img.style.display = 'none';

        // Check of de afbeelding al compleet geladen is
        if (img.complete && img.naturalHeight !== 0) { 
            console.log("Afbeelding is al geladen:", img.src);
            showImage();
        } else {
            // Zo niet, wacht op de load event
            console.log("Wacht op het laden van de afbeelding:", img.src);
            img.addEventListener('load', showImage);
            
            // Voeg een fallback toe als het laden mislukt (bijvoorbeeld bij een kapotte URL)
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