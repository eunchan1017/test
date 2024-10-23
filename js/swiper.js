const featureSlider = new Swiper(".feature-slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: "#feature .pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: "#feature .btn-next",
        prevEl: "#feature .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
