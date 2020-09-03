var _specialWrap = $('.special .wrap');
_specialWrap.click(function(e) {
    e.preventDefault();
    _specialWrap.removeClass('active');
    $(this).addClass('active');
});

/**
 * change property when window on load-scroll-resize
 * 1. add class for header when scroll > 0
 * 2.
 */
var _secSlick = 0;
$(window).on('load resize scroll',
    function() {
        let _scroll = $(window).scrollTop();
        let _toTopButton = $('.to-top-button');
        let _wh = $(window).height();
        let _ww = $(window).width();

        let _header = $('.header');
        _scroll > 0 ? _header.addClass('active') : _header.removeClass('active');
        //--------to top button

        if (_scroll > 400) {
            if (!_toTopButton.hasClass('active')) {
                _toTopButton.addClass('active');
            }
        } else {
            _toTopButton.removeClass('active');
        }
    });

/**
 * js job slick
 * slick slide
 * show 3 scroll 1
 * auto play after 2s
 * disable prevbutton
 */
$('.js-job-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: null,
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span></span></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 1
        }
    }]
});

/**
 * hambuger button
 * click to open nav menu
 */
var _menuOpen = 0;
$('.hambuger-button').click(function() {
    let _cssIn = 'showInLeft';
    let _cssOut = 'showOutLeft';
    let _this = $(this);
    let _header = $('.header');
    var _menu = $('.header__nav');
    if (_menuOpen == 0) {
        if (!_this.hasClass('active')) {
            _menu.addClass('open').addClass(_cssIn);
            _this.addClass('active');
            _header.addClass('active');
            delayF(function() {
                _menuOpen = 1;
                _menu.removeClass(_cssIn)
            }, 800)();
        } else {
            return false;
        }
    } else {
        if (_this.hasClass('active')) {

            _menu.addClass(_cssOut);
            delayF(function() {
                _this.removeClass('active');
                _menu.removeClass('open').removeClass(_cssOut);
                if ($(window).scrollTop() == 0) _header.removeClass('active');
                _menuOpen = 0;
            }, 600)();
        } else {
            return false;
        }
    }
});

/**
 * to top button
 */
$('.to-top-button').click(function(e) {

    e.preventDefault();
    let _time =  $(window).scrollTop();
    $('html, body').animate({scrollTop: 0}, Math.floor(_time/6), 'linear');
});

/**
 * funtion delay
 * delay time when mouse click on one element too much
 */
function delayF(func, timed) {
    let timeout;
    return function() {
        let _f = func;
        clearTimeout(timeout);
        timeout = setTimeout(_f, timed);
    };
}