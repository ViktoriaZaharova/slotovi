$('.mobile-menu .dropdown').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu .dropdown').removeClass('show');
    $(this).addClass('show');

    if ($(this).hasClass('show')) {
        $('.view-section').fadeOut();
    } else {
        $('.view-section').fadeIn();
    }
});

$('header .dropdown').hover(function () {
    // $('header  .dropdown').removeClass('show');
    // $(this).addClass('show');
    //
    // if ($(this).hasClass('show')) {
    //     $('.view-section').fadeOut();
    // } else {
    //     $('.view-section').fadeIn();
    // }
    $('.view-section').fadeOut();
});

$(document).mouseout(function (e) { // событие клика по веб-документу
    var div = $("header, .mobile-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.view-section').fadeIn();
    }
});


$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".dropdown"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('show'); // скрываем его
    }
});


$(document).ready(function () {
    // accordeon
    function accordeon() {
        var panel = $('.panel_heading');

        if (panel.hasClass('in')) {
            $('.in').find('.block_hover').slideDown();
        }

        $('.panel_heading .block_title').on('click', function () {
            $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
        });
    }

    accordeon();
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
    $('header').toggleClass('menu-open');
    $('.view-section').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('header').removeClass('menu-open');
    $('.view-section').fadeIn();
});

$('.btn-load-text').on('click', function (e) {
    e.preventDefault();
    var
        $this = $(this),
        content = $(this).siblings('.text-hidden');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('LESS');

        content.fadeIn();
    } else {
        $this.removeClass('trigger');
        $this.html('Load More');

        content.fadeOut();
    }
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end


$('.btn-load-card').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.card-load-wrapper').find('.card-load:hidden').slice(0, 5).slideDown();
});

$('.view-section__head').on('click', function () {
    $(this).toggleClass('click').siblings('.view-section__body').fadeToggle();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.view-section').addClass('fixed').find('.view-section__body').fadeOut().siblings('.view-section__head').removeClass('click');
    } else {
        $('.view-section').removeClass('fixed');
    }
});