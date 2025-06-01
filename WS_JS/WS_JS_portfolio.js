/* CAROUSEL SLIDER */

document.querySelectorAll('.carouselGameGrid').forEach((carousel) => {
    const slides = carousel.querySelectorAll('.slideCarousel');
    const buttons = carousel.querySelectorAll('.buttonCarousel');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const isNext = button.classList.contains("next");
            const slideActive = carousel.querySelector('.slideCarousel.active');
            let currentIndex = Array.from(slides).indexOf(slideActive);

            // Détermine la nouvelle position
            let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;

            // Gérer les débordements
            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;

            // Mise à jour des classes
            slides[currentIndex].classList.remove('active');
            slides[newIndex].classList.add('active');
        });
    });
});