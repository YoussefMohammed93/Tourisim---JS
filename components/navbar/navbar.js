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
      if (dropdown) {
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
      }

      const navLinks = [
        { href: "index.html", text: "الرئيسية" },
        { href: "#", text: "انشطة سياحية" },
        { href: "#", text: "المدونات", hasDropdown: true },
        { href: "#", text: "مرافق الفنادق" },
        { href: "/images.html", text: "الصور" },
        { href: "#", text: "قسم جديد" },
      ];

      const navLinksContainer = document.getElementById("nav-links");
      navLinks.forEach((link) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
          <a href="${link.href}" class="text-base font-semibold lg:font-bold lg:text-lg md:mx-2 xl:mx-4 text-white hover:text-[#d8d7d7] transition-all duration-150">${link.text}</a>
        `;

        if (link.hasDropdown) {
          listItem.classList.add("relative", "group");
          listItem.innerHTML = `
            <a href="${link.href}" class="text-base font-semibold lg:font-bold lg:text-lg text-white hover:text-[#d8d7d7] transition-all duration-150">
              ${link.text}<i class="fa-solid fa-chevron-down fa-sm mr-2"></i>
            </a>
            <div id="dropdown" class="absolute hidden bg-white p-3 rounded shadow-lg group-hover:flex flex-col space-y-2 transition-opacity duration-200 w-28">
              <a href="#" class="text-center text-black font-semibold hover:text-[#4CCAF2] transition-all duration-200">اختيار 1</a>
              <a href="#" class="text-center text-black font-semibold hover:text-[#4CCAF2] transition-all duration-200">اختيار 2</a>
              <a href="#" class="text-center text-black font-semibold hover:text-[#4CCAF2] transition-all duration-200">اختيار 3</a>
            </div>
          `;
        }

        navLinksContainer.appendChild(listItem);
      });

      const mobileMenuContainer = document.getElementById("mobile-menu");
      navLinks.forEach((link) => {
        let anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.className = "w-fit text-2xl font-semibold";
        anchor.textContent = link.text;
        mobileMenuContainer.appendChild(anchor);
      });

      let contactButton = document.createElement("a");
      contactButton.href = "#";
      contactButton.className = "w-fit text-2xl font-semibold";
      contactButton.textContent = "اتصل بنا";
      mobileMenuContainer.appendChild(contactButton);
    })
    .catch((error) => console.error("Error while loading navbar:", error));
});
