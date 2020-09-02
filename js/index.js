var _specialWrap = $('.special .wrap');
_specialWrap.click(function(event) {
    _specialWrap.removeClass('active');
    $(this).addClass('active');
    console.log($(this));
});