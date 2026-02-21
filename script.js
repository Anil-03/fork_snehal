// Small JavaScript interaction to simulate frontend behavior for the product gallery.
// This is static-only UI logic and does not perform data fetching or backend actions.
const mainProductImage = document.getElementById('mainProductImage');
const thumbnailButtons = document.querySelectorAll('.thumb');

thumbnailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Update primary image from selected thumbnail.
    mainProductImage.src = button.dataset.image;

    // Highlight current thumbnail.
    thumbnailButtons.forEach((thumb) => thumb.classList.remove('active'));
    button.classList.add('active');
  });
});
