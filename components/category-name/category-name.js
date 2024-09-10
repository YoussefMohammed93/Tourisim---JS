document.addEventListener("DOMContentLoaded", function () {
  fetch("components/category-name/category-name.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("categoryName").innerHTML = data;

      function loadTourismImagesForSwiper() {
        const tourismImages = [
          { src: "./assets/image-1.png", title: "عنوان التدوينة يعرض هنا" },
          { src: "./assets/image-2.png", title: "عنوان التدوينة يعرض هنا" },
          { src: "./assets/image6.png", title: "عنوان التدوينة يعرض هنا" },
          { src: "./assets/image-1.png", title: "عنوان التدوينة يعرض هنا" },
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
    })
    .catch((error) => console.error("Error while loading navbar:", error));
});
