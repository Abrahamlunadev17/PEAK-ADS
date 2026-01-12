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
      slidesPerView: 1.1,
      spaceBetween: 24,
      pagination: {
        el: ".peak-process-swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.5,
        },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector(".peak-impact-swiper");

  if (swiperEl) {
    new Swiper(swiperEl, {
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: 1.1,
      spaceBetween: 16,

      effect: "coverflow",
      coverflowEffect: {
        rotate: 0, // no rotación brusca
        stretch: 0,
        depth: 100, // profundidad 3D
        modifier: 2,
        slideShadows: false,
      },

      breakpoints: {
        768: {
          slidesPerView: 2.2,
          spaceBetween: 24,
          coverflowEffect: {
            depth: 220,
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          coverflowEffect: {
            depth: 300,
          },
        },
      },
    });
  }
});
