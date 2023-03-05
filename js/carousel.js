$('.carousel__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 2.3
      }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});


$('.benefit__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 2.3
      }
    },
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});