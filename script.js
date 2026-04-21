document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileMenu");
  const button = document.querySelector(".menu-toggle");

  if (!menu || !button) return;

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("open");
  }
});
