(function ($) {
  "use strict";

  // AOS ANIMATIONS
  AOS.init();

  // SLIDER AND MODALS
  $(document).ready(function () {
    // Add active class on tab click
    $(".tab").on("click", function () {
      var categoryId = $(this).data("id");

      $(".tab, .tab-pane").removeClass("active");
      $(this).addClass("active");
      $("#" + categoryId).addClass("active");
    });
  });
  
  $('.single-item').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    arrows: false
  });
  
  
})(window.jQuery);

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// QUOTE SLIDE


// MODAL TENTANG KAMI

$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
  enabled: false
  },
  zoom: {
  enabled: true,
  duration: 300,
  easing: 'ease-in-out',
  opener: function (openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});


// cara kerja
