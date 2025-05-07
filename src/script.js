const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('click', () => {
  window.open('https://github.com/23DP1KIrbe/Librarium/archive/refs/heads/main.zip', '_blank');
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const carouselImages = document.querySelector('.carousel-images');

function showImage(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
  
  currentImageIndex = index;
}

function nextImage() {
  const nextIndex = (currentImageIndex + 1) % images.length;
  showImage(nextIndex);
}

function prevImage() {
  const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(prevIndex);
}

function goToImage(index) {
  showImage(index);
}


showImage(0);


let carouselInterval = setInterval(nextImage, 5000);


const carousel = document.querySelector('.image-carousel');
carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carousel.addEventListener('mouseleave', () => {
  carouselInterval = setInterval(nextImage, 5000);
});

let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  clearInterval(carouselInterval);
});

carousel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
  carouselInterval = setInterval(nextImage, 5000);
});

function handleSwipe() {
  const threshold = 50;
  if (touchEndX < touchStartX - threshold) {
    nextImage();
  } else if (touchEndX > touchStartX + threshold) {
    prevImage();
  }
}