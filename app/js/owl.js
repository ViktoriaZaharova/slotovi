$(document).ready(function () {
    $('.play-now-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        touchDrag: true,
        mouseDrag: false
    });

    $('.top-free-pokies-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        loop: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 1}, 490: {items: 2}, 720: {items: 3}, 965: {items: 5}}
    });

    $('.news-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        loop: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 1, dots: true}, 490: {items: 2}, 720: {items: 3}, 965: {items: 4}, 1200: {items: 5}}
    });

    $('.news-slider-two').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        loop: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 1, dots: true}, 500: {items: 2}, 680: {items: 3}, 850: {items: 4}, 992: {items: 3}, 1200: {items: 4}}
    });

    $('.owl-casino').owlCarousel({
        margin: 0,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {0: {items: 1}}
    });

    $('.casino-page-partners-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 4}, 490: {items: 4}, 720: {items: 4}, 965: {items: 4}}
    });

    $('.casino-page-games-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        dots: false,
        loop: true,
        autoWidth: true,
        items: 5,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 4}, 490: {items: 4}, 720: {items: 4}, 965: {items: 5}}
    });

    $('.card-casino-rating__logos').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {0: {items: 2}, 700: {items: 3}}
    });
});