$(document).ready(function () {
    $('.header__burger').click(function () {
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('active');
        $('.header__burger').toggleClass('active');
        $('.main__left').toggleClass('active');
        $('.main__right').toggleClass('active');
    });
});
if (window.screen.width <= 1024) {
    $('.right__search').prependTo('.main__row');
    $('#copyright').prependTo('.main__bottom');
} else
    if (window.screen.width <= 1440) {
        $('.right__search').prependTo('.main__row');

    }
if (window.screen.width <= 767) {
    console.log('767');
    $('.right__search').prependTo('.main__content');
    $('.main__title').click(function () {
        $('.main__title').toggleClass('active');
        $('.main__center').toggleClass('hidden');
    });
}