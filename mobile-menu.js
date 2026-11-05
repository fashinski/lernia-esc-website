const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const closeButton = document.querySelector(".mobile-menu__close");
const menuLinks = mobileMenu.querySelectorAll("a");
const desktopScreen = window.matchMedia("(min-width: 800px)");
let savedScrollY = 0;

function openMenu() {
  if (mobileMenu.open || desktopScreen.matches) return;

  // Remember the page position before locking the scroll.
  savedScrollY = window.scrollY;
  document.documentElement.style.setProperty("--menu-scroll-top", `-${savedScrollY}px`);
  document.documentElement.classList.add("menu-open");
  mobileMenu.showModal();
  menuButton.setAttribute("aria-expanded", "true");
  closeButton.focus({ preventScroll: true });
}

function closeMenu() {
  if (!mobileMenu.open) return;

  mobileMenu.close();
  menuButton.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("menu-open");
  document.documentElement.style.removeProperty("--menu-scroll-top");
  window.scrollTo(0, savedScrollY);

  // On desktop the opening button is hidden, so use the visible navigation.
  const returnTarget = desktopScreen.matches
    ? document.querySelector(".site-nav a")
    : menuButton;
  returnTarget.focus({ preventScroll: true });
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

mobileMenu.addEventListener("cancel", (event) => {
  // Escape uses the same cleanup as the X button.
  event.preventDefault();
  closeMenu();
});

mobileMenu.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;

  // Wrap around the menu instead of tabing into the browser toolbar.
  const lastLink = menuLinks[menuLinks.length - 1];
  if (event.shiftKey && document.activeElement === closeButton) {
    event.preventDefault();
    lastLink.focus();
  } else if (!event.shiftKey && document.activeElement === lastLink) {
    event.preventDefault();
    closeButton.focus();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();

    // Let the link scroll normally and move keyboard focus to its section.
    const section = document.querySelector(link.getAttribute("href"));
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
    section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
  });
});

desktopScreen.addEventListener("change", () => {
  if (desktopScreen.matches) closeMenu();
});

// Only show the opening buton once its click handler is ready.
menuButton.hidden = false;
