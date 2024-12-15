// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero img');

function showNextSlide() {
    slides[currentSlide].style.opacity = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = '1';
}

setInterval(showNextSlide, 5000); // Change image every 5 seconds

// Hover effect for cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
