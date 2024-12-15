// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Wrap to first slide
    }
    showSlide(currentSlide);
}

// Show the first slide immediately
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

setInterval(showNextSlide, 5000); // Change image every 5 seconds

// Image hover effect
const gymImage = document.querySelector('.left img');
gymImage.addEventListener('mouseover', function() {
    gymImage.style.transform = 'scale(1.1)';
    gymImage.style.transition = 'transform 0.3s ease';
});

gymImage.addEventListener('mouseout', function() {
    gymImage.style.transform = 'scale(1)';
});

// Google Map Initialization
function initMap() {
    const gymLocation = { lat: 37.7749, lng: -122.4194 }; 
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: gymLocation,
    });

    new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: 'MonsterFitness Gym',
    });
}



