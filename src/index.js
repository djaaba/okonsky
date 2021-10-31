import 'slick-carousel';
import '/src/styles/scss/pages/_main.scss'

import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/regular.js";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";

// #slider
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
            breakpoint: 319,
            settings: {
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 481,
            settings: {
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 641,
            settings: {
                mobileFirst: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 961,
            settings: {
                mobileFirst: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                mobileFirst: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});

// #popup starts
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

const body = document.querySelector('body')

let scrollWidth = window.innerWidth - document.body.clientWidth;

const timeout = 800;
let unlock = true;

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
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна

        bodyUnlock()
    }
});

function bodyLock() {
    body.classList.add('lock');
    body.style.width = window.innerWidth - scrollWidth;
    if (scrollWidth){
        body.style.paddingRight = 17 + 'px';
        document.querySelector('.wrapper').style.paddingRight = scrollWidth + 'px';
        document.querySelector('.burger').style.right = 10 + scrollWidth + 'px';
    }
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    body.style.width = window.innerWidth - scrollWidth;
    if (scrollWidth){
        body.style.paddingRight = 0 + 'px';
        document.querySelector('.wrapper').style.paddingRight = 0 + 'px';
        document.querySelector('.burger').style.right = 10 + 'px';
    }
    body.classList.remove('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
// #popup end

// #progress bar
function progressView() {
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if (box.dataset.percent >= 50) {
            box.classList.add('over_50');
        } else {
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
    });
}
progressView();


// #burger-menu
let opened = false;
document.querySelector('.burger').addEventListener('click', function () {
    if (!opened) {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle("animate");
        opened = true;
    } else {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle("animate");
        opened = false;
    }
})
document.querySelector('.menu').addEventListener('click', function () {
    if (!opened) {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle("animate");
        opened = true;
    } else {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle("animate");
        opened = false;
    }
})