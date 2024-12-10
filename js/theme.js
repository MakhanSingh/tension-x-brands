;(function($) {
    "use strict";

    // Carousel Section for homepage
    function carousel_section() {
        $('#carousel-section').owlCarousel({
            navText: [
              "<div class='nav-btn prev-slide'></div>",
              "<div class='nav-btn next-slide'></div>",
            ],
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            nav: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 8500,
            smartSpeed: 1000,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1170: {
                items: 3
              }
            }
        });
    }
    carousel_section();

    // Preloader
    // function preloader() {
    //     if( $('.preloader').length ){
    //         $(window).on('load', function() {
    //             $('.preloader').fadeOut();
    //             $('.preloader').delay(50).fadeOut('slow');  
    //         });
    //     };
    // }
    // preloader();

    // Owl Carousel
    // function testimonial_carousel() {
    //    $('#ms-testimonial').owlCarousel({
    //         navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    //         autoplay: 5000,
    //         margin:30,
    //         items:1,
    //         loop: true,
    //         nav:true,
    //         dots: false,
    //         onInitialized  : counter,   // When the plugin has initialized.
    //         onTranslated : counter      // When the translation of the stage has finished.
    //     });
    // }
    // testimonial_carousel();

    // Owl Carousel
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     dots: false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })

}) (jQuery);