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

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
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
  })

})(window.jQuery);

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