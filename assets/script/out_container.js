// 탭 modal__outcontainer 탭 메뉴 전환 자바스크립트 

document.addEventListener("DOMContentLoaded", function () {
    const tabs = {
        editcode: document.querySelector(".edit__code"),
        codelist: document.querySelector(".code__list"),
        codeadd: document.querySelector(".code__add")
    };

    const contents = {
        editlist: document.querySelector(".edit__list"),
        listlist: document.querySelector(".list__list"),
        addlist: document.querySelector(".add__list")
    };

    function showContent(activeTab, activeContent) {
        for (let tab in tabs) {
            tabs[tab].classList.remove("active");
        }
        for (let content in contents) {
            contents[content].classList.add("hidden");
        }
        tabs[activeTab].classList.add("active");
        contents[activeContent].classList.remove("hidden");
    }

    // 초기 상태 설정
    showContent("editcode", "editlist");

    tabs.editcode.addEventListener("click", function () {
        showContent("editcode", "editlist");
    });

    tabs.codelist.addEventListener("click", function () {
        showContent("codelist", "listlist");
    });

    tabs.codeadd.addEventListener("click", function () {
        showContent("codeadd", "addlist");
    });
});


// 아이템 클릭시 modal 나오는 자바스크립트
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid__item');
    const modalOutContainer = document.getElementById('modal__outcontainer');
    const modalContainer = document.querySelector('.modal__container');

    // grid__item 클릭 시 모달 표시
    gridItems.forEach(item => {
        item.addEventListener('click', function () {
            modalOutContainer.style.display = 'block';
        });
    });

    // 모달 바깥 클릭 시 모달 닫기
    window.addEventListener('click', function (event) {
        if (event.target === modalOutContainer && !modalContainer.contains(event.target)) {
            modalOutContainer.style.display = 'none';
        }
    });
});

