// Shared interactions for all three pages.
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation menu
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  // Gallery lightbox: click a gallery image to enlarge it.
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-image-button").forEach((button) => {
      button.addEventListener("click", () => {
        lightboxImage.src = button.dataset.fullImage;
        lightboxImage.alt = button.querySelector("img").alt;
        lightbox.hidden = false;
        closeButton.focus();
      });
    });

    const closeLightbox = () => {
      lightbox.hidden = true;
      lightboxImage.src = "";
    };

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
});
