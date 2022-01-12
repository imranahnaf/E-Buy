$(document).ready(function() {
    'use strict';

    $(window).load(function() {
        $('#preloader-bg').fadeIn().css('display', 'flex');
    });

    $(window).ready(function() {
        $('#preloader-bg').fadeOut(6000).css('display', 'flex');
    });

    // =====***** banner slider js starts *****=====//
    $(".banner-slider").slick({
        // normal options...
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',

        // the magic
        responsive: [{
            breakpoint: 767,
            settings: {
                autoplay: true,
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
            }

        }, {
            breakpoint: 767,
            settings: {
                autoplay: true,
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
            }

        }, {

            breakpoint: 575,
            settings: {
                autoplay: true,
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
            }

        }]
    });
    // =====***** banner slider js ends *****=====//


    // =====***** countdown js starts *****=====//
    (function() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {
                const now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
    // =====***** countdown js ends *****=====//


    // =====***** update products slider js starts *****=====//
    $(".up-product-slider").slick({
        // normal options...
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',

        // the magic
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
    // =====***** update products slider js ends *****=====//

    // =====***** update products slider js starts *****=====//
    $(".testimonials-slider").slick({
        // normal options...
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',

        // the magic
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
    // =====***** update products slider js ends *****=====//

});