document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      if (window.location.pathname.includes("images.html")) {
        document.querySelector(".main-title").innerText = "الصور";
        document.querySelector(".breadcrumb a.main").innerText = "الصور";
      }

      if (window.location.pathname.includes("contact.html")) {
        document.querySelector(".main-title").innerText = "اتصل بنا";
        document.querySelector(".breadcrumb a.main").innerText = "اتصل بنا";
      }
    });
});
