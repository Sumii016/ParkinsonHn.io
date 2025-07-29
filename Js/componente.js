document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(res => res.ok ? res.text() : Promise.reject("Error al cargar header"))
      .then(html => {
        document.getElementById("header").innerHTML = html;
      })
      .catch(err => console.error(err));

    fetch("footer.html")
      .then(res => res.ok ? res.text() : Promise.reject("Error al cargar footer"))
      .then(html => {
        document.getElementById("footer").innerHTML = html;
      })
      .catch(err => console.error(err));

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
