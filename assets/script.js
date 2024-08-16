document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments
    const flecheGauche = document.getElementById("flechegauche");
    const flecheDroite = document.getElementById("flechedroite");
    const bannerImg = document.querySelector(".banner-img");
    const bannerTagline = document.querySelector("#banner p");
    const dots = document.querySelectorAll(".dot");

    // Tableau des slides (images et taglines)
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentIndex = 0;

    // Fonction pour mettre à jour l'image, la légende, et le point actif
    function updateBanner() {
        // Mettre à jour l'image et la légende
        bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        bannerTagline.innerHTML = slides[currentIndex].tagLine;

        // Mettre à jour les points actifs
        dots.forEach((dot, index) => {
            dot.classList.toggle("dot_selected", index === currentIndex);
        });
    };

    // Gestionnaire de clic pour la flèche gauche
    flecheGauche.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex =  slides.length - 1; // Boucle à la dernière image
        }
        updateBanner();
    });

    // Gestionnaire de clic pour la flèche droite
    flecheDroite.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0; // Boucle à la première image
        }
            updateBanner();
    });

    // Initialiser la bannière avec le premier slide et le premier point
    updateBanner();
});