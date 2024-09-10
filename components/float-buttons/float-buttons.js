document.addEventListener("DOMContentLoaded", function () {
    fetch("components/float-buttons/float-buttons.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("floatBtns").innerHTML = data;
      });
  });
  