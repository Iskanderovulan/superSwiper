const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // effect: "fade",
    // effect: "cube",
    // grabCursor: true,
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    // effect: "flip",
    // grabCursor: true,
    // effect: "cards",
    // grabCursor: true,
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: true

    // },
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        },
    }
});

