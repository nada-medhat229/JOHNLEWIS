  document.querySelectorAll('.color-box').forEach(box => {
  box.addEventListener('click', () => {
    // Remove active from all
    document.querySelectorAll('.color-box').forEach(el => el.classList.remove('active'));
    
    // Add active to clicked
    box.classList.add('active');

    // Update color label
    const selectedText = box.getAttribute('data-color');
    document.querySelector('.selected-color').textContent = selectedText;
  });
});
document.querySelectorAll('.size-box').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.size-box').forEach(b => b.classList.remove('active'));

    // Add active to the clicked one
    btn.classList.add('active');

    // Update selected size text
    document.querySelector('.selected-size').textContent = btn.getAttribute('data-size');
  });
});
const mainImage = document.querySelector('.img-main');
const thumbnails = document.querySelectorAll('.thumb-img');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const newSrc = thumb.getAttribute('src');
    mainImage.setAttribute('src', newSrc);

    // Optional: visually highlight selected thumb
    thumbnails.forEach(img => img.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
  });
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".custom-dropdown").forEach(dropdown => {
      const button = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");

      button.addEventListener("click", e => {
        e.stopPropagation();
        document.querySelectorAll(".custom-dropdown").forEach(d => d.classList.remove("open"));
        dropdown.classList.toggle("open");
      });

      menu.querySelectorAll("a").forEach(item => {
        item.addEventListener("click", e => {
          e.preventDefault();
          const value = item.dataset.value;
          const icon = item.dataset.icon;

          const span = button.querySelector("span");
          if (span) span.textContent = value;

          const img = button.querySelector("img");
          if (img && icon) img.src = icon;

          dropdown.classList.remove("open");
        });
      });
    });
document.querySelectorAll('.custom-dropdown .dropdown-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    // Optional: update the button content
    const icon = this.querySelector('img').src;
    const text = this.textContent.trim();
    
    const button = this.closest('.custom-dropdown').querySelector('.dropdown-toggle');
    button.querySelector('img').src = icon;
    button.querySelector('span').textContent = text;

    // Go to the selected page
    window.location.href = this.href;

    // Prevent default only if you’re doing custom navigation (not needed here)
    // e.preventDefault();
  });
});

    document.addEventListener("click", () => {
      document.querySelectorAll(".custom-dropdown").forEach(d => d.classList.remove("open"));
    });
  });
  const thumbSwiper = new Swiper(".thumbSwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: { slidesPerView: 4 },
      768: { slidesPerView: 5 }
    }
  });

  const mainSwiper = new Swiper(".mainSwiper", {
      spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-net",
    prevEl: ".swiper-button-pre"
  },

    thumbs: {
      swiper: thumbSwiper,
    },
  });