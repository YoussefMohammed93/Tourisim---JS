document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      if (window.location.pathname.includes("blogs.html")) {
        document.querySelector(".main-title").innerText = "المدونات";
        const breadcrumbLink = document.querySelector(".breadcrumb a.main");
        breadcrumbLink.innerText = "المدونات";

        breadcrumbLink.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "blogs.html";
        });
      }

      if (window.location.pathname.includes("images.html")) {
        document.querySelector(".main-title").innerText = "الصور";
        const breadcrumbLink = document.querySelector(".breadcrumb a.main");
        breadcrumbLink.innerText = "الصور";

        breadcrumbLink.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "images.html";
        });
      }

      if (window.location.pathname.includes("contact.html")) {
        document.querySelector(".main-title").innerText = "اتصل بنا";
        const breadcrumbLink = document.querySelector(".breadcrumb a.main");
        breadcrumbLink.innerText = "اتصل بنا";

        breadcrumbLink.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "contact.html";
        });
      }

      if (window.location.pathname.includes("blog-sub-section.html")) {
        document.querySelector(".main-title").innerText = "قسم فرعي";
        const breadcrumbLink = document.querySelector(".breadcrumb a.main");
        breadcrumbLink.innerText = "المدونات";

        breadcrumbLink.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "blogs.html";
        });

        const newLink = document.createElement("a");
        const newSpan = document.createElement("span");

        newSpan.classList.add("text-xl", "text-white");
        newSpan.innerText = "|";

        newLink.href = "blog-sub-section.html";
        newLink.innerText = "قسم فرعي";
        newLink.classList.add("mx-3", "text-xl", "text-white");

        document.querySelector(".breadcrumb").appendChild(newSpan);
        document.querySelector(".breadcrumb").appendChild(newLink);
      }
    });
});
