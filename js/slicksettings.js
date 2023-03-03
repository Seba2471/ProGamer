$('.team-carousle').slick({
  arrows: false,
  infinite: true,
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
