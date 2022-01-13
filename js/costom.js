$(document).ready(function() {
    'use strict';

    // =====***** prelader js starts *****=====//
    $(window).load(function() {
        $('#preloader-bg').fadeIn(500).delay(1000).css('display', 'flex');
    });
    $(window).load(function() {
        $('#preloader-bg').fadeOut(1000).css('display', 'flex');
    });
    // =====***** prelader js ends *****=====//

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



    // =====***** banner slider & responsive js starts *****=====//
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
    // =====***** banner slider & responsive js ends *****=====//



    // =====***** update products slider & responsive js starts *****=====//
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
    // =====***** update products slider & responsive js ends *****=====//



    // =====***** update products slider & responsive js starts *****=====//
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
    // =====***** update products slider & responsive js ends *****=====//



    // ======== *****about sponsor slider & responsive js starts***** ======== //
    $('.sponsor-slider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right nextarrow"></i>',
        centerMode: true,
        centerPadding: '0px',

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // ======== *****about sponsor slider & responsive js ends***** ======== //










});