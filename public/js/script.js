

/*  It prepares the preloader and shows the content after charging all elements. */
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector("body"), {
        barColor: "#efefef",
        backgroundColor: "#8EA040",
        percentage: true,
        barHeight: 1,
        minimumTime: 200,
        fadeOutTime: 1000,

        // background-image: url("../images/proyecto/Bosque_de_Tepepan.jpg")
    });
});




/*	Toggle navigation button.	*/
$('button').on('click', function() {
	$(this).toggleClass('isActive');
});

/*	Show and hide mobile menu.	*/
$(function () {
    var buttonMobile =  $(".Menu-mobileButton"),
        menu         =  $(".Menu-list");
    buttonMobile.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('isActiveMenu');
    });
});

/*  Changes the style of the menu bar.  */
$(function() {
    var scrollArrow = $(".ScrollTop-scrollArrow");
    var backgroundBar = $(".Header");
    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 180) {
            scrollArrow.addClass("scrollArrowActive");
            backgroundBar.addClass("headerBackground");
        }   else {
            scrollArrow.removeClass("scrollArrowActive");
            backgroundBar.removeClass("headerBackground");
        }
    });
});

/*  It shows the effect Smooth scrolling.   */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length){
                $('html,body').animate( {
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*  Wrapper counter.    */
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#itemOne').jQuerySimpleCounter({end: 19,duration: 3000});
$('#itemTwo').jQuerySimpleCounter({end: 13,duration: 3000});
$('#itemTree').jQuerySimpleCounter({end: 1359,duration: 2000});
$('#itemFour').jQuerySimpleCounter({end: 246,duration: 2500});

/*  It allows the transition of photos of the main gallery (slider.)  */
$(document).ready(function() {
    var time = setInterval(function(){SliderNextImage();}, 8000);
    $('#btnBack').click(function() {
        var size = $('.Slider-container').find('.Slider-image').size();
        $('.Slider-container').find('.Slider-image').each(function (index,value){
            if ($(this).hasClass('Slider-visible')) {
                $(this).slideUp();
                $(this).removeClass('Slider-visible');
                if (index == 0) {
                    $($('.Slider-container').find('.Slider-image').get(size - 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(size - 1)).addClass('Slider-visible');

                    return false;
                }   else {
                    $($('.Slider-container').find('.Slider-image').get(index - 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(index - 1)).addClass('Slider-visible');
                    return false;
                }
            };
        });
    });
    $('#btnNext').click(function() {
        var size = $('.Slider-container').find('.Slider-image').size();
        $('.Slider-container').find('.Slider-image').each(function (index,value){
            if ($(this).hasClass('Slider-visible')) {
                $(this).slideUp();
                $(this).removeClass('Slider-visible');
                if (index + 1 < size) {
                    $($('.Slider-container').find('.Slider-image').get(index + 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(index + 1)).addClass('Slider-visible');
                    return false;
                }   else {
                    $($('.Slider-container').find('.Slider-image').get(0)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(0)).addClass('Slider-visible');
                    return false;
                }
            };
        });
    });
});
function SliderNextImage () {
    var size = $('.Slider-container').find('.Slider-image').size();
    $('.Slider-container').find('.Slider-image').each(function (index, value) {
        if ($(this).hasClass('Slider-visible')) {
            $(this).slideUp();
            $(this).removeClass('Slider-visible');

            /*  Animacion de imagenes segundarias   */
            $('.bounceInUp').addClass('animated bounceInUp');
            $('.bounceInDown').addClass('animated bounceInDown');

            if (index + 1 < size) {
                $($('.Slider-container').find('.Slider-image').get(index + 1)).fadeIn();
                $($('.Slider-container').find('.Slider-image').get(index + 1)).addClass('Slider-visible');
                return false;
            }   else {
                $($('.Slider-container').find('.Slider-image').get(0)).fadeIn();
                $($('.Slider-container').find('.Slider-image').get(0)).addClass('Slider-visible');
                return false;
            };
        };
    });
};

$(function () {
    $('#gallery a').lightBox();
});