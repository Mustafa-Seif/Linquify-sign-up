const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener('click',()=>{
    prevBtn.style.width='25px'
})



document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carouselOne');
    var slideCounter = document.getElementById('slideCounter');
    var carouselItems = carousel.getElementsByClassName('carousel-item');
    var totalSlides = carouselItems.length;
  
    carousel.addEventListener('slid.bs.carousel', function() {
      var currentIndex = Array.from(carouselItems).indexOf(carousel.querySelector('.active'));
      var currentSlide = currentIndex + 1;
      if (currentSlide === 1) {
        prevBtn.style.width='0px'
      }else{
        prevBtn.style.width='25px'

      }
      slideCounter.textContent = currentSlide + ' Out of ' + totalSlides;
    });
  });