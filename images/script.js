document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de tous les sliders Splide
    const splides = ['#splide1', '#splide2', '#splide3', '#splide4', '#splide5', '#splide6'];
    
    splides.forEach((splideId) => {
        var splide = new Splide(splideId, {
            type: 'slide',
            perPage: 3,
            perMove: 1,
            gap: '15px',
            width: 'min(1200px, 100% - 1150px)',
            breakpoints: {
                992: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                    rewind: true,
                },
            }
        });
        splide.mount();
    });
    
    // Initialisation du premier slider avec des paramètres spécifiques
    var splide1 = new Splide('#splide1', {
        autoplay: true,
        interval: 6000,
        pauseOnHover: false,
        type: 'loop',
        rewind: true,
        speed: 3000,
        pagination: false,
        arrows: false,
        drag: false,
        updateOnMove: true
    });
    splide1.mount();

    // Initialisation du carrousel des acteurs sur la fiche film
    new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        arrows: false,
        pagination: false,
        focus: 'center',
        gap: '1em'
    }).mount();
});

// Menu burger
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// Pourcentage fiche film
var circle = document.querySelector('.circle');
var length = circle.getTotalLength();

var text = document.querySelector('.percentage');
var percentage = text.innerHTML;
percentage = percentage.replace(' %','');
percentage = parseInt(percentage);
setPercentage(percentage);

function setPercentage(percentage) {
  percentage = 100 - percentage;
  var new_length = (length / 100) * percentage;
  circle.style['stroke-dashoffset'] = new_length;
}