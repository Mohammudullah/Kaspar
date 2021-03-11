$(function(){

    // Preloader initialization
    window.addEventListener('load', function(){
        $('.preloader').delay(500).fadeOut('fast');
    });

    // Banner section slider initialization
    $('.banner-slider').slick({
        autoplay        : true,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        arrows          : true,
        prevArrow       : '.left-arrow',
        nextArrow       : '.right-arrow',
        dots            : true,
        dotsClass       : 'banner-dots',
        autoplaySpeed   : 5000,
        speed           : 1500,
        pauseOnHover    : false,
        pauseOnFocus    : false,
    });

    // Portfolio video section slider initialization
    $('.portfolio-video-slider').slick({
        autoplay        : true,
        slidesToShow    : 3,
        slidesToScroll  : 3,
        arrows          : false,
        autoplaySpeed   : 5000,
        speed           : 1500,
        responsive      : [

            {
                breakpoint  : 480,
                settings    : {

                    slidesToScroll  : 1,
                    slidesToShow    : 1,
                }
            },
            {
                breakpoint  : 576,
                settings    : {

                    slidesToScroll  : 2,
                    slidesToShow    : 2,
                }
            },
            {
                breakpoint  : 768,
                settings    : {

                    slidesToScroll  : 2,
                    slidesToShow    : 2,
                }
            }
        ]
    });

    // testiomonials section slider initialization
    $('.testimonials-slider-main').slick({
        autoplay        : true,
        slidesToShow    : 2,
        slidesToScroll  : 2,
        arrows          : false,
        autoplaySpeed   : 5000,
        speed           : 1500,
        vertical        : true,
        verticalSwiping : true,
        dots            : true,
        dotsClass       : 'slider-dots',
    });

    // feedback section slider initialization
    $('.feedback-slider-main').slick({
        autoplay        : true,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        arrows          : false,
        autoplaySpeed   : 2500,
        speed           : 1000,
        fade            : true,
        pauseOnHover    : true,
        pauseOnFocus    : true,
    });

    //Venobox initialization for image portfolio
    $('.venobox').venobox({

        framewidth      : '900px',
        border          : '10px',
    }); 

    //Venobox initialization for image portfolio
    $('.venobox-video').venobox({

        framewidth      : '900px',
    }); 

    //Navbar toggler animation
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('nav-animation');
    });

    // Counter up initialization
    $('.counter').counterUp({
        delay   : 10,
        time    : 4000,
    });

    //navbar animation initialization
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if ( scroll > 300) {
            $('.navbar').addClass('navbar-animation');
        }
        else {
            $('.navbar').removeClass('navbar-animation');
        }
    })

    //skill bar animation initialization
    $(window).scroll(skill_bar);
    function skill_bar(){

        var scrollamount = $(this).scrollTop();
        var scrollLink = $('.skills').offset().top-100;
        if(scrollamount > scrollLink) {
            var i = 0;

            if (i == 0) {

                i = 0;
                var bar_one = document.getElementsByClassName('bar_one')[0];
                var bar_two = document.getElementsByClassName('bar_two')[0];
                var bar_three = document.getElementsByClassName('bar_three')[0];
                var bar_four = document.getElementsByClassName('bar_four')[0];
                var width = 0, width_one = 0, width_two = 0, width_three = 0, width_four = 0;
                var fill = setInterval(action, 10);
                function action() {
            
                    if (width == 100) {
                        clearInterval(fill);
                        i = 0;
                    }
                    else {
                        width ++;
                        console.log(1);
                        if ( width_one <= 80 ) {
                            width_one++;
                            bar_one.style.width = width_one + '%';
                        }
                        if ( width_two <= 75 ) {
                            width_two++;
                            bar_two.style.width = width_two + '%';
                        }
                        if ( width_three <= 60 ) {
                            width_three++;
                            bar_three.style.width = width_three + '%';
                        }
                        if ( width_four <= 50 ) {
                            width_four++;
                            bar_four.style.width = width_four + '%';
                        }
                    }
                }
            }
            $(window).unbind('scroll', skill_bar);
        }
    }

});

