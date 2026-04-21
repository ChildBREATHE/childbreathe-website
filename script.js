function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

// Luk menu ved klik på link
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#mobileMenu a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mobileMenu");
      if (menu) {
        menu.classList.remove("open");
      }
    });
  });
});

// Luk menu ved klik udenfor
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileMenu");
  const button = document.querySelector(".menu-toggle");

  if (!menu || !button) return;

  const clickedInsideMenu = menu.contains(event.target);
  const clickedButton = button.contains(event.target);

  if (!clickedInsideMenu && !clickedButton) {
    menu.classList.remove("open");
  }
});

// Luk menu ved ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.classList.remove("open");
    }
  }
});
