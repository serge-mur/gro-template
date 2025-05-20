document.addEventListener('DOMContentLoaded', function() {
    
    console.log('document ready');

    const burgerBtn = document.querySelector('.header__burger');
    const mobMenu = document.querySelector('.header__menu');
    const mobLogin = document.querySelector('.header__login');
    burgerBtn.addEventListener('click', () => {
        mobLogin.classList.toggle('header__login_show');
        mobMenu.classList.toggle('header__menu_open');
    });

    const insideSlider = new Swiper('.inside-slider', {
        slidesPerView: 1.25,
        spaceBetween: 8,
        breakpoints: {
            768: {
                slidesPerView: 3.5,
            },
            1440: {
                slidesPerView: 4.25,
            },
        }
    });

    const stepsSlider = new Swiper('.steps-slider', {
        slidesPerView: 1.25,
        spaceBetween: 8,
        breakpoints: {
            768: {
                slidesPerView: 3.25,
            },
        },
        navigation: {
            nextEl: '.steps__next',
            prevEl: '.steps__prev',
        },
    });
});