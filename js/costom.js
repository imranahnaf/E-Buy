$(function() {

    $(".banner-slider").slick({

        // normal options...
        infinite: true,
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
});