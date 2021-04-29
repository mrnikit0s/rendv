let flag = true;
$(document).ready(function() {
    $('.header__burger').click(function() {
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('active');
        $('.header__burger').toggleClass('active');
        $('.main__left').toggleClass('active');
        $('.main__right').toggleClass('active');
    });
    if (window.screen.width <= 767) {
        $('.right__search').prependTo('.main__content');
        $('.main__title').click(function() {
            $('.main__title').toggleClass('active');
            $('.main__center').toggleClass('hidden');
        });
        if (flag) {
            expertMove();
            flag = false;
        }
    }
});

function expertMove() {
    /*перестановка блоков*/
    let itemsCount = document.querySelectorAll('.expert__item').length;
    for (let i = 1; i < itemsCount + 1; i++) {
        $(`.expert__item:nth-child(${i})`).append(`<div class="r${i} expert__row"></div>`);
        $(`.r${i}`).append(`<div class="itm itm${i}"></div>`);
        $(`.expert__item:nth-child(${i})>.expert__photo`).prependTo(`.r${i}`);
        $(`.expert__item:nth-child(${i}) .expert__position`).prependTo(`.itm${i}`);
        $(`.expert__item:nth-child(${i}) .expert__name`).prependTo(`.itm${i}`);
    }
}

window.addEventListener('resize', function(event) {
    if (window.screen.width >= 1024) {
        $('.right__search').prependTo('.main__right');
    }
    if (window.screen.width <= 1024) {
        $('.right__search').prependTo('.main__row');
        $('#copyright').prependTo('.main__bottom');
    } else
    if (window.screen.width <= 1440) {
        $('.right__search').prependTo('.main__row');
    }
    if (window.screen.width <= 767) {
        $('.right__search').prependTo('.main__content');
        $('.main__title').click(function() {
            $('.main__title').toggleClass('active');
            $('.main__center').toggleClass('hidden');
        });
        if (flag) {
            expertMove();
            flag = false;
        }
    }
})