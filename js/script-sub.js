const topCharacterSlider = new Swiper(".top-character-slider", {
    // loop: true,
    spaceBetween: 40,
    effect: "slide",
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
        prevEl: "#character .btn-prev",
        nextEl: "#character .btn-next",
    },
});
const skill = $(".skill");
const $tabMenu = $(".skill-tab-list li");
tab(0);
/** index값에 active 주는 함수 */
$tabMenu.on("click", function () {
    const tabIdx = $(this).index();
    console.log(tabIdx);
    tab(tabIdx);
});
function tab(index) {
    $tabMenu.removeClass("active");
    $tabMenu.eq(index).addClass("active");
    skill.hide();
    skill.eq(index).show();
}
