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
