document.addEventListener("DOMContentLoaded", () => {
    // Carrusel (slider)
    setTimeout(() => {
      const slides = document.querySelectorAll(".slide");
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      let currentIndex = 0;

      const showSlide = index => {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      };

      const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      };

      if (slides.length && nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
        showSlide(currentIndex);
        setInterval(nextSlide, 5000);
      }
    }, 300);
  });