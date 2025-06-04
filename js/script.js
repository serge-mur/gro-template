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

    const offcanvasLink = document.querySelectorAll('.offcanvas-link');
    offcanvasLink.forEach(link => {
        const target = link.dataset.target;
        console.log(link);
        const offcanvas = document.getElementById(target);
        const offcanvasClose = offcanvas.querySelector('.offcanvas__close');
        const offcanvasOverlay = offcanvas.querySelector('.offcanvas__overlay');
        const offcanvasWrapper = offcanvas.querySelector('.offcanvas__wrapper');      
        link.addEventListener('click', () => {
            offcanvas.classList.add('is-opened');
            document.body.classList.add("remove-scrolling");
        });
        offcanvasClose.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
        offcanvasOverlay.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
    });

    // blog nav
    blogNavMobBtn = document.querySelector('.blog-nav__mob-btn');
    blogNavMobBtn.addEventListener('click', function() {
        const item = this.closest('.blog-nav');
        const isActive = item.classList.contains('blog-nav_active');
        item.classList.toggle('blog-nav_active', !isActive);
    });

    // blog dropdown
    document.querySelectorAll('.dropdown__btn').forEach(el => {
        el.addEventListener('click', function() {
            const item = el.closest('.dropdown');
            const isActive = item.classList.contains('dropdown_open');
            item.classList.toggle('dropdown_open', !isActive);
            // close all other dropdown
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== item) {
                    dropdown.classList.remove('dropdown_open');
                }
            });
        });

    });


});
