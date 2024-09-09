document.addEventListener("DOMContentLoaded", function () {
  fetch("components/banner/banner.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("banner").innerHTML = data;
    });
});
