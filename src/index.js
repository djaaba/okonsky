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

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

const body = document.querySelector('.wrapper')

let scrollWidth = window.innerWidth - document.body.clientWidth;
const timeout = 800;
let unlock = true;


$('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 17000,
    touchThreshold: 6,
    waitForAnimate: false,
    dots: true,
    // centerMode: true,
    // variableWidth: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 321,
            settings: {
                mobileFirst:true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                mobileFirst:true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 641,
            settings: {
                mobileFirst:true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 961,
            settings: {
                mobileFirst:true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                mobileFirst:true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик

        bodyLock();

        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик

    bodyUnlock()

    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна

        bodyUnlock()
    }
});

function bodyLock() {
    body.classList.add('lock');
    body.style.width = window.innerWidth - scrollWidth;

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    console.log()
    body.style.width = window.innerWidth - scrollWidth;
    body.classList.remove('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

$('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
});

