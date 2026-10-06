const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");

function closeNav() {
  primaryNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleNav() {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", toggleNav);

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeNav();
  }
});
