let slideIndex = 0;
let slideshowRunning = false;
let slideshowInterval;

showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  if (slideshowRunning) {
    slideshowInterval = setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }
}

function plusSlides(n) {
  clearTimeout(slideshowInterval);
  slideshowRunning = false;
  showSlides(slideIndex += n);
}

function toggleSlideshow() {
  slideshowRunning = !slideshowRunning;
  if (slideshowRunning) {
    showSlides();
  } else {
    clearTimeout(slideshowInterval);
  }
}