document.addEventListener('DOMContentLoaded', function() {
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const close = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showModal(index) {
  if (index < 0 || index >= galleryItems.length) return; 
  modal.style.display = 'block';
  modalImg.src = galleryItems[index].src;
  currentIndex = index;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', function() {
    showModal(index);
  });
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

nextBtn.addEventListener('click', function() {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= galleryItems.length) nextIndex = 0; 
  showModal(nextIndex);
});

prevBtn.addEventListener('click', function() {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = galleryItems.length - 1; 
  showModal(prevIndex);
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cambiar de imagen usando las teclas de flecha
document.addEventListener('keydown', (event) => {
  if (modal.style.display === 'block') {
    if (event.key === 'ArrowRight') {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= galleryItems.length) nextIndex = 0;
      showModal(nextIndex);
    } else if (event.key === 'ArrowLeft') {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) prevIndex = galleryItems.length - 1;
      showModal(prevIndex);
    } else if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  }
});

let startX = 0;
let endX = 0;

modal.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

modal.addEventListener('touchmove', (event) => {
  endX = event.touches[0].clientX;
});

modal.addEventListener('touchend', () => {
  if (startX - endX > 50) {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0; 
    showModal(nextIndex);
  } else if (endX - startX > 50) {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = galleryItems.length - 1; 
    showModal(prevIndex);
  }
  startX = 0;
  endX = 0;
});
});
