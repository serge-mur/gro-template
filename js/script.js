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
            nextEl: '.steps .slider__next',
            prevEl: '.steps .slider__prev',
        },
    });

    const postsSlider = new Swiper('.posts-slider', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.posts .slider__next',
            prevEl: '.posts .slider__prev',
        },
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.reviews .slider__next',
            prevEl: '.reviews .slider__prev',
        },
    });

});