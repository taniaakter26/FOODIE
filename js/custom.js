// owl carousel linking here
jQuery(function($) {
    $(document).ready( function() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive:{
            0:{
            items:2
            },
            600:{
            dotsEach:3,
            items:2
            },
            1000:{
            items:4
            }
            }
        })
    });
});
// wow js linking here
jQuery(function($) {
    $(document).ready( function() {
       new WOW().init(); 
    });
});
// animation counter js linking here
jQuery(function($) {
    $(document).ready( function() {
        $('.menu').animationCounter({
          start: 0,
          step: 1,
          end: 153,
          delay:100
        }); 
        $('.store').animationCounter({
          start: 0,
          step: 20,
          end: 3400,
          delay:100
        }); 
        $('.country').animationCounter({
          start: 0,
          step: 1,
          end: 32,
          delay:100
        });     
    });
});

