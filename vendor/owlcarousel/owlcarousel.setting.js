"use strict"
$(function(){
  // owlCarousel
  var owl = $('.owl-carousel');
      owl.owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      smartSpeed: 1500,
      lazyLoad:true,
      autoplay: true,
      autoplayHoverPause: true
  });
});

