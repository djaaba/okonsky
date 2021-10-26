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

const popupLinks = document.querySelectorAll('.popup-link')
// alert(popupLinks.length);
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;

const timeout = 800

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const EL = popupCloseIcon[i];
        EL.addEventListener('click', function (e) {
            popupClose(EL.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        alert(popupActive.innerHTML)
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('popup__content')) {
                popupClose(e.target.closest('.popup'))
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//     if (lockPadding.length > 0) {
//         for (let i = 0; i < lockPadding.length; i++) {
//             const EL = lockPadding[i];
//             EL.style.paddingRight = lockPaddingValue;
//         }
//     }

//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) {
//             for (let i = 0; i < lockPadding.length; i++) {
//                 const EL = lockPadding[i]
//                 EL.style.paddingRight = '0px';
//             }
//         }

//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);
//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

document.addEventListener('keydown', function (e) {
    if (e.which == 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive)
    }
})

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

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

let scrollWidth = window.innerWidth - document.body.clientWidth;

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
    // document.querySelector('popup').style.top = '100px'
    body.style.width = window.innerWidth - scrollWidth;
    body.classList.remove('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}