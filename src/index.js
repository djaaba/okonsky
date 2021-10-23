import 'slick-carousel';
import '/src/styles/scss/pages/_main.scss'

import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/regular.js";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";

// $('.arrow-next').on('click', function () {
//     $('.slider').slick('slickNext');
// });
// $('.arrow-prev').on('click', function () {
//     $('.slider').slick('slickPrev');
// });
$('.slider').slick({
    arrows : true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 17000,
    touchThreshold: 6,
    waitForAnimate: false,
    dots: true,
    responsive: [
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 961,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
    ]
});