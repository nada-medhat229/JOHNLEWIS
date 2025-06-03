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

    document.addEventListener("click", () => {
      document.querySelectorAll(".custom-dropdown").forEach(d => d.classList.remove("open"));
    });
  });