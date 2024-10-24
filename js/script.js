// 대상을 변수에 저장
const $dim = $(".dim");
const $videoWrap = $(".video-wrap");
const $video = $(".video iframe");
const $caption = $(".caption ");
const $btnClose = $(".btn-close ");
const $videoItem = $(".trailer-wrap li");

// 비디오 리스트를 선택했을 때
$videoItem.on("click", function () {
    // console.log($videoItem, $(this));

    // 선택한 li의 data-link 값을 받아서 videoLink 변수에 담기
    let videoLink = $(this).attr("data-link");
    // const videoLink = $(this).data("link");

    // 자동재생 추가
    videoLink += "?autoplay=1";
    // iframe의 src 값으로 videoLink를 전달
    $video.attr("src", videoLink);
    console.log(videoLink);
    // 팝업창 띄우기
    $dim.fadeIn();
    $videoWrap.addClass("active");
    // 대상을 videoText변수에 텍스트 저장
    const videoTitle = $(this).text();
    // videoText변수에 텍스트 적용
    $caption.text(videoTitle);
    console.log($videoItem);
});
$btnClose.on("click", () => {
    // 팝업창 닫기
    $dim.fadeOut();
    $videoWrap.removeClass("active");
    // 동영상 속성 삭제
    $video.attr("src", "");
});
