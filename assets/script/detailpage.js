//detailpage 탭 누르면 탭 메뉴 색 변경 및 컨텐츠 변경 스크립트 

document.addEventListener("DOMContentLoaded", function () {
    const codeInfo = document.querySelector(".code__info");
    const codeDetail = document.querySelector(".code__detail");

    const detailInfo = document.querySelector(".detail__info");
    const detailCode = document.querySelector(".detail__code");

    // 초기 상태 설정
    detailInfo.classList.remove("hidden");
    detailCode.classList.add("hidden");
    codeInfo.classList.add("active");

    codeInfo.addEventListener("click", function () {
        detailInfo.classList.remove("hidden");
        detailCode.classList.add("hidden");
        codeInfo.classList.add("active");
        codeDetail.classList.remove("active");
    });

    codeDetail.addEventListener("click", function () {
        detailInfo.classList.add("hidden");
        detailCode.classList.remove("hidden");
        codeInfo.classList.remove("active");
        codeDetail.classList.add("active");
    });
});