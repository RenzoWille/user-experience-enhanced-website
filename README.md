
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

In je Readme staat bij beschrijving wat voor project het is en wat je hebt gemaakt. Voeg hier ook een link toe naar de live website.

Dit project beschrijft de website van Qatar Museums, hiervoor is er een home en detail pagina gemaakt van een like functie op de verschillende kunstwerken, de functie van het unliken in toegevoegd en er is een mooie view-transition toegepast. Bezoekers van de website kunnen kunstwerken liken en unliken.

### Home pagina
<img width="1440" alt="Scherm­afbeelding 2025-04-02 om 10 17 31" src="https://github.com/user-attachments/assets/c0fb17dd-02e5-47c6-b891-3c058d30671a" />

### Detail pagina
<img width="1440" alt="Scherm­afbeelding 2025-04-02 om 10 17 18" src="https://github.com/user-attachments/assets/293d97d3-376d-4d97-8082-78b554102716" />

https://user-experience-enhanced-website-019t.onrender.com/
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

### User Story

Bezoekers kunnen net als op een social media platform, klikken naar meerdere foto's om een beter idee te krijgen van het kunstwerk. Wanneer bezoekers op de art pagina komen, kunnen ze deze beoordelen en een like geven, ook kunnen bezoekers deze kunstwerken unliken.

Als de bezoeker een kunstwerk een like geeft, komt hier een 'count' te staan en wordt hier door feedback gegeven dat de bezoeker een actie heeft uitgevoerd op de pagina, ook dmv dat het geklikte knopje gekleurd wordt.

Zo worden de verschillende kunstwerken beoordeeld en kunnen bezoekers zien welke het meest populair is, en welke kunstwerken minder populair zijn.

### Hoe het werkt 

Bezoekers kunnen via de home pagina op een bepaald kunstwerk klikken en deze een like geven op de detail pagina. Het aantal likes wordt bijgehouden in de database en dit krijgen bezoekers ook terug als feedback wanneer een kunstwerk is geliked. Ook is er gebruik gemaakt van een skeleton screen, die ervoor zorgt dat bezoekers zien dat er wat wordt ingeladen als de pagina nog bezig is met laden, hierdoor hebben de bezoekers het idee dat er al wat gebeurd en zijn ze minder snel geneigd de pagina af te sluiten.

https://github.com/user-attachments/assets/26d41f0c-ef7d-4b0c-a4fc-da58665c0ca8



## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

De website is gebouwd met NodeJS, Express, Liquid en Directus voor server-side en HTML, CSS en JavaScript voor client-side scripting. Er is gebruik gemaakt van Progressive Enhancement, een techniek die ervoor zorgt dat de code altijd blijft werken, ook wanneer bezoeker vanaf een verouderde browser op het internet surfen, of bezoekers die JavaScript uit hebben staan in hun browser. Hiermee zorg je er dus voor dat de website altijd blijft werken. Ook is er voor gezorgd dat de pagina's een mooie view-transition hebben en dat de afbeeldingen na het klikken mooi in de volgende pagina schuiven.

https://github.com/user-attachments/assets/9b9ab2cc-cdd9-4d24-b703-1ff7135db2bc





## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->

Voor het gebruik van dit project is het nodig om <a href="https://nodejs.org/en">NodeJS</a> te installeren op uw apparaat. Vanuit hier kunt u dit project gaan runnen in uw bestand en zelf ook aan het project werken. Wanneer NodeJS is geïnstalleerd kunt u via de terminal het pakket installeren met de command 'npm install'. Hiermee worden alle bestanden geïnstalleerd en wordt ervoor gezorgd dat het hele project ready to go is. Als u dan een link naar een locale server wilt krijgen om het project te zien, typ 'npm start' en klik vervolgens op de link die wordt gegeven. Dit zal een 'localhost:8000' link zijn. Nu bent u helemaal klaar en kunt u aan de slag met werken aan dit project.


## Bronnen
https://qm.org.qa/en/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
https://liquidjs.com/tags/for.html
https://directus.io/docs/api
https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/
https://blog.logrocket.com/how-browser-rendering-works-behind-scenes/


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
