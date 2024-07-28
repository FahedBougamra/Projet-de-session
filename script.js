document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  }).mount( window.splide.Extensions );
});


/*----------------Accueil----splide-1-section-1-splide-2-...-5---le reste------------------*/


document.addEventListener('DOMContentLoaded', function() {
    // Initialisation du premier slider
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
        // important
        updateOnMove: true
    });
    splide1.mount();

    // Initialisation du deuxième slider
    var splide2 = new Splide('#splide2', {
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
    splide2.mount();

     var splide3 = new Splide('#splide3', {
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
    splide3.mount();

     var splide4 = new Splide('#splide4', {
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
    splide4.mount();

     var splide5 = new Splide('#splide5', {
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
    splide5.mount();

    
});





// Main
class Main {
  constructor() {
    this._init();
  }

  _init() {
    // EN - If there are two or more .splide__slides in #splide
    // jp - #splideの中の.splide__slideが2以上ある場合
    new Slider("#splide", ".splide__slide", "2");
  }}


// DOMContentLoaded event fires when DOM parsing is finished
document.addEventListener(
"DOMContentLoaded",
() => {
  const main = new Main();
},
false);











/*------menu---*/

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});








/*---pourcentage-fiche-film---*/
var circle = document.querySelector('.circle');
var length = circle.getTotalLength();

var text = document.querySelector('.percentage');
var percentage = text.innerHTML;
percentage = percentage.replace(' %','');
percentage = parseInt(percentage);
setPercentage(percentage);


function setPercentage(percentage) {
  percentage = 100 - percentage;
  var new_length = (length / 100)*percentage
  circle.style['stroke-dashoffset'] = new_length;
}












/*---splide-acteurs-fiche-film---*/

new Splide(".splide", {
  type: "loop",
  perPage: 4,
  arrows: false,
  pagination: false,
  focus: "center",
  gap: "1em"
}).mount(window.splide.Extensions);





