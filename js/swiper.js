var swiperEl = document.querySelector(".service-banner");
Object.assign(swiperEl, {
    loop: false,
    autoplay: {
        delay: 2000,  
    },                   
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, 
    slidesPerView: 1,
    centeredSlides : true,    
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
    }
});
swiperEl.initialize();
