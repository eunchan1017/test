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
var characterSelect = new Swiper(".character-select", {
    loop: true,
    // spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var characterScreen = new Swiper(".character-screen", {
    loop: true,
    effect: true,
    navigation: {
        nextEl: ".character-wrap .btn-next",
        prevEl: ".character-wrap .btn-prev",
    },
    thumbs: {
        swiper: characterSelect,
    },
});

/** 활성화 되있는 이미지로 배경 적용 함수 */
function updateBackground(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const backgroundImage = activeSlide.dataset.background;
    document.querySelector("#feature .background").style.backgroundImage = `url(${backgroundImage})`;
}
