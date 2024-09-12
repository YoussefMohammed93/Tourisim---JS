document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("translate-x-full");
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".tourism-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".blog-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        enabled: false,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const internalTripsSwiper = new Swiper(".internal-trips-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination.four",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperItems = new Swiper(".swiper-5", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });
});
