// Toggle menu + ARIA
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const button = document.querySelector(".menu-toggle");

  if (menu && button) {
    const isOpen = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  }
}

// Init ARIA attributter (uden HTML-ændringer)
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");

  if (button && menu) {
    button.setAttribute("aria-controls", "mobileMenu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation menu");
  }

  // Luk menu ved klik på link
  const links = document.querySelectorAll("#mobileMenu a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (menu && button) {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
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
    button.setAttribute("aria-expanded", "false");
  }
});

// Luk menu ved ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-toggle");

    if (menu && button) {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }
  }
});
