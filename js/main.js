 $(document).on('ready', function() {
      $(".slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right fa-5x"></i>',
        prevArrow: '<i class="fa fa-chevron-left fa-5x"></i>'
      });
    });