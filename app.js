new Swiper(".peak-scenarios-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".peak-process-swiper")) {
    new Swiper(".peak-process-swiper", {
      slidesPerView: 1.2,
      spaceBetween: 24,
      pagination: {
        el: ".peak-process-swiper .swiper-pagination",
        clickable: true,
      },
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".peak-impact-swiper")) {
    new Swiper(".peak-impact-swiper", {
      slidesPerView: 1.1,
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
});
