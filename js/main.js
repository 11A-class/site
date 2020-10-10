$(document).ready(function() {
    $('.header__slider').slick({
        arrows: true,
        dots: true,
        speed: 1500,
        initialSlide: 2,
        waitForAnimate: true,
        infinite: false
    });
    $('.words__slider').slick({
        arrows: true,
        infinite: true,
        appendArrows: $('.slider__buttons'),
        easing: 'ease-in',
        dots: true,
        appendDots: $('.slider__dots')
    });
    $('.slider-1').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        initialSlide: 10,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: '.popup-slider-1',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.popup-slider-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-1',
        initialSlide: 10,
    });
    $('.slider-2').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: '.popup-slider-2',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.popup-slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-2',
    });

    

    $(document).ready(function() {
        $('.header__burgwrapper').click(() => {
            $('.header__burger, .header__menu, .header__wrapper, .header__burgwrapper').toggleClass('active');
                /*$('body').toggleClass('lock');*/
                /*$('body').toggleClass('lock');*/
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            /*$('body').removeClass('lock');*/
            $('.header__burger, .header__menu, .header__wrapper, .header__burgwrapper').removeClass('active');
        }
    });
    $('.header .header__main .menu__item a').click(() => {
        /*$('body').removeClass('lock');*/
        $('.header__burger, .header__menu, .header__wrapper, .header__burgwrapper').removeClass('active');
    });



    function scrollToTop(sectionId) {
        console.log(sectionId);
        var targetScroll =  $(sectionId).offset().top;
        $('html, body').animate({
            scrollTop: (targetScroll - 100)
        }, 1500);
        if ($.browser.safari) {
            $('html, body').animate({ scrollTop: (targetScroll - 100) }, 1500); //1100 - скорость
        }
    }
    $('header a[href*="#"], .students__next a[href*="#"], .slider__next a[href*="#"], footer a').on('click', function(){
        sectionId = $(this).attr('href');
        scrollToTop(sectionId);
    });

    

    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
        if($(this).scrollTop() > 700) {
            /*$('.header__burger').fadeIn();*/
            $('.header__burgwrapper, .header__burger').addClass('fixed');
            /*$('.header__logo').addClass('fixed');*/
        } else {
            $('.header__burgwrapper, .header__burger').removeClass('fixed');
            /*$('.header__logo').removeClass('fixed');*/
        }
    });
    $('#toTop').click(function (e) {
        $('.header__burger, .header__menu, .header__wrapper').removeClass('active');
        $('.header__burger').removeClass('fixed');
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
    });



    var show = true;
    var countBox = '#counts';
    $(window).on('scroll resize', function(){
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countBox).offset().top;
        var w_height = $(document).height();
        var e_height = $(countBox).outerHeight();
        console.log(w_top + 350 + " " + e_top);
        if (w_top + 350 >= e_top || e_height + e_top < w_height) {
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
            show = false;
        }
    });
});

/*const filling = document.querySelector('.menu__filling');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;

    filling.style.width = per + '%';
}*/

new WOW().init();

VANTA.BIRDS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0x0,
    color2: 0xffffff,
    birdSize: 1.35,
    backgroundAlpha: 0,
    colorMode: "lerp",
    birdSize: 1.50
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll(name) {
    const stringsContainer = document.querySelector('.'+name+'');
    const string = stringsContainer.textContent;
    for (;;) {
        await write(string, name);
        await sleep (1200);
        await erase(string, name);
        await sleep(500);
    }   
}

async function write(text, name) {
    let index = 0;
    while (index < text.length) {
        const timeout = 120;
        await sleep(timeout);
        index++;
        document.querySelector('.'+name+'').innerHTML = text.substring(0, index);
    }
}
async function erase(text, name) {
    let index = document.querySelector('.'+name+'').textContent.length;
    while (index > 0) {
        const timeout = 70;
        await sleep(timeout);
        index--;
        document.querySelector('.'+name+'').innerHTML = text.substring(0, index);
    }
}
/*async function erase() {
    while(wrapper.textContent.length) {
        const timeout = 100;
        await sleep(timeout);
    }
}*/

writingAll('slider__titlesecond'); 
writingAll('teachers__title'); 
writingAll('school__title'); 
writingAll('slider__titlefirst');
writingAll('slider__titlefirst'); 
writingAll('class-teachers__title'); 
