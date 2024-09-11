document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("translate-x-full");
});

document.addEventListener("DOMContentLoaded", function () {
  function loadTourismImagesForSwiper() {
    const tourismImages = [
      {
        src: "./assets/images/image-1.png",
        title: "عنوان التدوينة يعرض هنا",
      },
      {
        src: "./assets/images/image-2.png",
        title: "عنوان التدوينة يعرض هنا",
      },
      {
        src: "./assets/images/image6.png",
        title: "عنوان التدوينة يعرض هنا",
      },
      {
        src: "./assets/images/image-1.png",
        title: "عنوان التدوينة يعرض هنا",
      },
    ];

    return tourismImages
      .map(
        (image) =>
          `<a href="#" class="swiper-slide relative gradient-overlay">
          <img src="${image.src}" alt="${image.title}" class="w-full h-full object-cover rounded-xl">
          <div class="absolute z-30 bottom-5 right-5 text-white text-xl font-bold">${image.title}</div>
        </a>`
      )
      .join("");
  }

  document.querySelector(".tourism-swiper .swiper-wrapper").innerHTML =
    loadTourismImagesForSwiper();

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

const imageArray = [
  {
    src: "./assets/images/image1.png",
    span: "col-span-2",
    title: "عنوان القسم",
  },
  { src: "./assets/images/image2.png", span: "", title: "عنوان القسم" },
  {
    src: "./assets/images/image3.png",
    span: "row-span-2 col-start-4",
    title: "عنوان القسم",
  },
  {
    src: "./assets/images/image4.png",
    span: "row-span-2 col-start-1 row-start-2",
    title: "عنوان القسم",
  },
  {
    src: "./assets/images/image5.png",
    span: "row-span-2 col-start-2 row-start-2",
    title: "عنوان القسم",
  },
  {
    src: "./assets/images/image6.png",
    span: "col-start-3 row-start-2",
    title: "عنوان القسم",
  },
  {
    src: "./assets/images/image7.png",
    span: "col-span-2 col-start-3 row-start-3",
    title: "عنوان القسم",
  },
];

function loadImagesForSwiper() {
  return imageArray
    .map(
      (image) =>
        `<a href="#" class="swiper-slide gradient-overlay relative flex items-center justify-center">
          <img src="${image.src}" alt="" class="w-full h-full object-cover rounded-md">
            <div class="absolute bottom-5 right-7 z-20">
              <h3 class="text-2xl font-semibold text-white">${image.title}</h3>
            </div>
        </a>
        `
    )
    .join("");
}

function loadImagesForGrid() {
  return imageArray
    .map(
      (image) =>
        `<a href="#" class="${image.span} relative gradient-overlay">
            <img src="${image.src}" alt="${image.title}" class="w-full h-full object-cover rounded-xl">
            <div class="absolute bottom-3 right-3 z-20">
              <h3 class="text-2xl font-bold text-white">${image.title}<h3/>
            </div>
        </a>`
    )
    .join("");
}

function updateLayout() {
  const swiperContainer = document.getElementById("swiperContainer");
  const gridContainer = document.getElementById("gridContainer");
  if (window.innerWidth < 768) {
    swiperContainer.innerHTML = `<div class="swiper-wrapper">${loadImagesForSwiper()}</div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>`;
    swiperContainer.classList.remove("hidden");
    gridContainer.classList.add("hidden");
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    gridContainer.innerHTML = loadImagesForGrid();
    gridContainer.classList.remove("hidden");
    swiperContainer.classList.add("hidden");
  }
}

window.addEventListener("DOMContentLoaded", updateLayout);
window.addEventListener("resize", updateLayout);

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".blog-swiper", {
    // Swiper configuration
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
  const swiper = new Swiper(".internal-trips-swiper", {
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
      768: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper5 = new Swiper(".swiper-5", {
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
