var swiperEl = document.querySelector(".service-banner");
Object.assign(swiperEl, {
  loop: false,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  centeredSlides: true,
  effect: "creative",
  creativeEffect: {
    limitProgress: 1,
    prev: {
      translate: ["100%", -200, -1000],
      rotate: [0, 0, 40],
      shadow: true,
    },
    next: {
      translate: ["-100%", 200, -1000],
      rotate: [0, 0, 40],
      shadow: true,
    },
  },
  breakpoints: {
    // when window width is >= 320px
    300: {
        slidesPerView: 1,
    },
    // when window width is >= 480px
    992: {
        slidesPerView: 1.8,
    },
  },
});
swiperEl.initialize();

var swiperServices = document.querySelector(".mySwiper2");
Object.assign(swiperServices, {
  loop: true,
  spaceBetween: "10",
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    300: {
        direction: "horizontal",
    },
    // when window width is >= 480px
    992: {
        direction: "vertical",
    },
  },
});
swiperServices.initialize();

var swiperProject = document.querySelector(".project-carousel");
Object.assign(swiperProject, {
  pagination: true,
  paginationClickable: true, 
  loop: "false",
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: "20",
    },
    // when window width is >= 480px
    599: {
      slidesPerView: "auto",
      spaceBetween: "30",
    },
  },
});
swiperProject.initialize();
