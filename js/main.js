let flag = true;

$(document).ready(function() {
    $('.header__burger').click(function() {
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('active');
        $('.header__burger').toggleClass('active');
        $('.main__left').toggleClass('active');
        $('.main__right').toggleClass('active');
    });
    if (window.screen.width <= 1440) {
        $('.sidebar__list li').prependTo('.header__list');
        $('.sidebar__link').addClass('header__link');
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

function articleMove() {
    /*отзывы*/
    let articleCount = document.querySelectorAll('.rw__article').length;
    for (let i = 1; i < articleCount + 1; i++) {
        $(`.rw__article:nth-child(${i}) .rw__n`).prependTo(`.rw__article:nth-child(${i}) .rw__c`);
        $(`.rw__article:nth-child(${i}) .rw__c`).prependTo(`.rw__article:nth-child(${i}) .rw__r`);
        $(`.rw__article:nth-child(${i}) .rw__c`).append(`<div class="rw__rn"></div>`);
        $(`.rw__article:nth-child(${i}) .rw__comments`).prependTo(`.rw__article:nth-child(${i}) .rw__rn`);
        $(`.rw__article:nth-child(${i}) .rw__likes`).prependTo(`.rw__article:nth-child(${i}) .rw__rn`);
        $(`.rw__article:nth-child(${i}) .rw__date`).prependTo(`.rw__article:nth-child(${i}) .rw__rn`);
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
            articleMove();
            flag = false;
        }
    }
})