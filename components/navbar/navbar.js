document.addEventListener("DOMContentLoaded", function () {
  fetch("components/navbar/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      document
        .getElementById("menu-button")
        .addEventListener("click", function () {
          document.getElementById("mobile-menu").classList.remove("hidden");
        });

      document
        .getElementById("close-menu")
        .addEventListener("click", function () {
          document.getElementById("mobile-menu").classList.add("hidden");
        });

      const dropdown = document.getElementById("dropdown");
      const dropdownLink = dropdown.parentElement.querySelector("a");

      dropdownLink.addEventListener("mouseenter", function () {
        setTimeout(() => {
          dropdown.classList.remove("hidden");
        }, 2000);
      });

      dropdown.addEventListener("mouseleave", function () {
        dropdown.classList.add("hidden");
      });

      dropdownLink.addEventListener("mouseleave", function () {
        setTimeout(() => {
          dropdown.classList.add("hidden");
        }, 500);
      });

      dropdown.addEventListener("mouseenter", function () {
        dropdown.classList.remove("hidden");
      });
    })
    .catch((error) => console.error("Error while loading navbar:", error));
});
