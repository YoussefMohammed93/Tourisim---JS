document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("translate-x-full");
});

$(".tourism").slick({
  dots: true,
  infinite: false,
  rtl: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next two"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev two"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".group-carousel").slick({
  dots: true,
  infinite: false,
  rtl: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next two"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev two"><i class="fa-solid fa-chevron-right"></i></button>',
});

$(".blog-carousel").slick({
  dots: true,
  infinite: false,
  rtl: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next three rounded-full shadow mx-2"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev three rounded-full shadow mx-2"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".flights-carousel").slick({
  dots: true,
  infinite: false,
  rtl: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next three rounded-full shadow mx-2"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev three rounded-full shadow mx-2"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".items-carousel").slick({
  dots: true,
  infinite: false,
  rtl: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next four rounded-full shadow mx-2"><i class="fa-solid fa-chevron-left"></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev four rounded-full shadow mx-2"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
