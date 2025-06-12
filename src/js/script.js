// SCRIPT CARROSSEL GALERIA
document.querySelectorAll('.carrosel').forEach((carousel) => {
  let currentIndex = 0;
  const imagesWrapper = carousel.querySelector('.carrosel-images');
  const images = imagesWrapper.querySelectorAll('img');
  const totalImages = images.length;

  const updateCarousel = () => {
    imagesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  carousel.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  carousel.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 5000);
});