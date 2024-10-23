const featureSlider = new Swiper(".feature-slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
        el: "#feature .pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#feature .btn-next",
        prevEl: "#feature .btn-prev",
    },
});
