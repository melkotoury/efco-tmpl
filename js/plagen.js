/*console*/
    $(document).ready(function ($) {
	   "use strict";
        $('#owl-carousel-1').owlCarousel({
        loop: true,
        margin: 15,
        rtl: true,
        autoplay: false,
        nav: true,
        pagination: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayHoverPause: true,
//        animateIn: 'zoomIn',
//        animateOut: 'ZoomOut',
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
	});
    $('#owl-carousel-2').owlCarousel({
        loop: true,
        margin: 15,
        rtl: true,
        autoplay: false,
        nav: true,
        pagination: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayHoverPause: true,
//        animateIn: 'zoomIn',
//        animateOut: 'ZoomOut',
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".click-nav").click(function () {
        $("header .nav .list").fadeToggle(500)
    });
    });
