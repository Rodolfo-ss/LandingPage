document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100 + "%";
      carousel.style.transform = "translateX(" + offset + ")";
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.childElementCount;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  });
  