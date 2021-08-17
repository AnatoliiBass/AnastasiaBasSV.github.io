'use strict'
//Зміна кольору сайдбару і зміна мови
$(window).click(function(event) {
    const side = document.getElementsByClassName('sidebar');
    const blue = document.getElementsByClassName('color color-blue');
    const pink = document.getElementsByClassName('color color-pink');
    const yellow = document.getElementsByClassName('color color-yellow');
    const red = document.getElementsByClassName('color color-red');
    const green = document.getElementsByClassName('color color-green');
    const ukr = document.getElementsByClassName('box-lang-ukr box-lang-item');
    const ru = document.getElementsByClassName('box-lang-ru box-lang-item');
    const eng = document.getElementsByClassName('box-lang-eng box-lang-item');
    if (event.target.className == 'box-lang-ukr box-lang-item') {
        $(ukr).addClass('lang-active');
        $(ru).removeClass('lang-active');
        $(eng).removeClass('lang-active');
        let changeElementUkr;
        mapUKR.forEach((value, key) => {
            changeElementUkr = document.querySelector('#' + key);
            changeElementUkr.textContent = value;
         });
    };
    if (event.target.className == 'box-lang-ru box-lang-item') {
        $(ukr).removeClass('lang-active');
        $(ru).addClass('lang-active');
        $(eng).removeClass('lang-active');
        let changeElementRu;
        mapRU.forEach((value, key) => {
            changeElementRu = document.querySelector('#' + key);
            changeElementRu.textContent = value;
         });
    };
    if (event.target.className == 'box-lang-eng box-lang-item') {
        $(ukr).removeClass('lang-active');
        $(ru).removeClass('lang-active');
        $(eng).addClass('lang-active');
        let changeElementEng;
        mapENG.forEach((value, key) => {
            changeElementEng = document.querySelector('#' + key);
            changeElementEng.textContent = value;
         });
    };
    if (event.target.className === 'color color-blue') {
        const first = $(blue).children();
        if (first.hasClass('color-active')) {
            $(blue).children().addClass('active');
            $(pink).children().removeClass('active');
            $(yellow).children().removeClass('active');
            $(red).children().removeClass('active');
            $(green).children().removeClass('active');
        };
        $(side).css("background", "linear-gradient(to bottom, #0404f3, #4177b4, #8eb7e6)");
    };
    if (event.target.className === 'color color-pink') {
        const second = $(pink).children();
        if (second.hasClass('color-active')) {
            $(blue).children().removeClass('active');
            $(pink).children().addClass('active');
            $(yellow).children().removeClass('active');
            $(red).children().removeClass('active');
            $(green).children().removeClass('active');
        };
        $(side).css("background", "linear-gradient(to bottom, #a7077f, #ec4eb8, #f7a5e5)");
    };
    if (event.target.className === 'color color-yellow') {
        const third = $(yellow).children();
        if (third.hasClass('color-active')) {
            $(blue).children().removeClass('active');
            $(pink).children().removeClass('active');
            $(yellow).children().addClass('active');
            $(red).children().removeClass('active');
            $(green).children().removeClass('active');
        };
        $(side).css("background", "linear-gradient(to bottom, #f5dd04, #f0ed47, #e6e58e)");
    };
    if (event.target.className === 'color color-red') {
        const fourth = $(red).children();
        if (fourth.hasClass('color-active')) {
            $(blue).children().removeClass('active');
            $(pink).children().removeClass('active');
            $(yellow).children().removeClass('active');
            $(red).children().addClass('active');
            $(green).children().removeClass('active');
        };
        $(side).css("background", "linear-gradient(to bottom, #f51404, #f16947, #f17a56)");
    };
    if (event.target.className === 'color color-green') {
        const fiveth = $(green).children();
        if (fiveth.hasClass('color-active')) {
            $(blue).children().removeClass('active');
            $(pink).children().removeClass('active');
            $(yellow).children().removeClass('active');
            $(red).children().removeClass('active');
            $(green).children().addClass('active');
        };
        $(side).css("background", "linear-gradient(to bottom, #03a70c, #2dd143, #a8ee58)");
    };
});