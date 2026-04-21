document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }
  });
});
