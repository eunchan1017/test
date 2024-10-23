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
    on: {
        init: function () {
            updateBackground(this);
        },
        slideChange: function () {
            updateBackground(this);
        },
    },
});

function updateBackground(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const backgroundImage = activeSlide.dataset.background;
    document.querySelector("#feature .background").style.backgroundImage = `url(${backgroundImage})`;
}
