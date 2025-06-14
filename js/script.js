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
    if (blogNavMobBtn) {
        blogNavMobBtn.addEventListener('click', function() {
            const item = this.closest('.blog-nav');
            const isActive = item.classList.contains('blog-nav_active');
            item.classList.toggle('blog-nav_active', !isActive);
        });
    }

    // tags filter
    const tagsWrapper = document.querySelector('.blog-tags__wrapper');
    const moreBtn = document.querySelector('.blog-tags__more-btn');
    const moreBtnSpan = document.querySelector('.blog-tags__more-btn>span');
    moreBtn.addEventListener('click', function(e) {
        if(!moreBtn.classList.contains('is-open')) {
            tagsWrapper.classList.remove('blog-tags__wrapper_start');
            moreBtn.classList.add('is-open');
            moreBtnSpan.innerText = 'Показать меньше';
        } else {
            tagsWrapper.classList.add('blog-tags__wrapper_start');
            moreBtn.classList.remove('is-open');
            moreBtnSpan.innerText = 'Показать ещё';
        }
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

    // mob filters
    const filtersOffcanvas = document.querySelector('.blog-filters__offcanvas');
    document.querySelector('.blog-filters__btn').addEventListener('click', function() {
        document.body.classList.add("remove-scrolling");
        filtersOffcanvas.classList.add('is-opened');
    });
    document.querySelector('.blog-filters__overlay').addEventListener('click', function() {
        document.body.classList.remove("remove-scrolling");
        filtersOffcanvas.classList.remove('is-opened');
    });

    // mob search
    document.querySelector('.blog-filters__search-btn').addEventListener('click', function(e) {
        document.querySelector('.search').classList.toggle('is-opened');
    });
    const input = document.querySelector('.search__input')
    const searchResult = document.querySelector('.search-result')
    input.addEventListener('change', function () {
        document.querySelector('.search-result').style.display = "block";
    })


});
