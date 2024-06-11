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





// modal__outcontainer (편집 모달창 탭 3개 있는 것) 외부 클릭시 팝업 닫히는 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const modalOutcontainer = document.getElementById('modal__outcontainer');
    const editContainer = document.querySelector('.edit__container');

    // modal__outcontainer 클릭 시 이벤트 핸들링
    modalOutcontainer.addEventListener('click', function (event) {
        // 클릭된 요소가 edit__container 내부가 아닐 때 모달 숨기기
        if (!editContainer.contains(event.target)) {
            modalOutcontainer.style.display = 'none';
        }
    });

    // edit__container 내부 클릭 시 이벤트 버블링 방지
    editContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


// index - 코드 이미지 클릭시 아이콘과 after (회색 투명화)가 유지되는 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid__item');

    gridItems.forEach(item => {
        const editBtn = item.querySelector('.edit__btn');
        const editModal = item.querySelector('.edit__modal'); // 모달 요소 참조

        // .grid__item에 마우스가 들어오면
        item.addEventListener('mouseenter', function () {
            showButton(editBtn);
        });

        // .grid__item에서 마우스가 나가면
        item.addEventListener('mouseleave', function () {
            if (editModal.style.display !== 'block') { // 모달이 열려있지 않은 경우
                hideButton(editBtn);
            }
        });

        // 문서 클릭 시 모달창 및 버튼 숨기기
        document.addEventListener('click', function (event) {
            if (!item.contains(event.target) && !editModal.contains(event.target)) { // 클릭된 요소가 item이나 editModal 내부가 아니면
                editModal.style.display = 'none';
                hideButton(editBtn);
            }
        });

        // edit__btn을 클릭하면
        editBtn.addEventListener('click', function (event) {
            event.stopPropagation(); // 이벤트 버블링 방지
            editModal.style.display = 'block'; // 모달 표시
        });

        // 모달 내부 클릭 시 이벤트 버블링 방지
        editModal.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    function showButton(btn) {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
    }

    function hideButton(btn) {
        btn.style.visibility = 'hidden';
        btn.style.opacity = '0';
    }
});

// index - ... 아이콘 누르면 모달창이 뜨게하며 마우스를 벗어나도 모달창이 유지되는 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid__item');

    gridItems.forEach(item => {
        const editBtn = item.querySelector('.edit__btn');
        const editModal = item.querySelector('.edit__modal');
        const gridImgAfter = item.querySelector('.grid__img::after');

        // .grid__item에 마우스가 들어오면
        item.addEventListener('mouseenter', function () {
            showOverlay(item);
            showButton(editBtn);
        });

        // .grid__item에서 마우스가 나가면
        item.addEventListener('mouseleave', function () {
            // 모달이 보이는 동안에는 오버레이와 버튼을 숨기지 않음
            if (editModal.style.display !== 'block') {
                hideOverlay(item);
                hideButton(editBtn);
            }
        });

        // edit__btn을 클릭하면
        editBtn.addEventListener('click', function (event) {
            event.stopPropagation(); // 이벤트 버블링 방지
            editModal.style.display = 'block'; // 모달 표시
            showOverlay(item); // 오버레이 유지
            showButton(editBtn); // 버튼 유지
        });

        // 바깥 영역 클릭 시 모달창 닫기
        document.addEventListener('click', function () {
            editModal.style.display = 'none';
            hideOverlay(item);
            hideButton(editBtn);
        });

        // 모달 내부 클릭 시 이벤트 버블링 방지
        editModal.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    function showOverlay(item) {
        const gridImgAfter = item.querySelector('.grid__img::after');
        gridImgAfter.style.backgroundColor = 'rgba(83, 83, 83, 0.5)'; // 오버레이 색상 설정
    }

    function hideOverlay(item) {
        const gridImgAfter = item.querySelector('.grid__img::after');
        gridImgAfter.style.backgroundColor = 'transparent'; // 오버레이 숨김
    }

    function showButton(btn) {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
    }

    function hideButton(btn) {
        btn.style.visibility = 'hidden';
        btn.style.opacity = '0';
    }
});


//grid__item 누르면 디테일 페이지로 넘아가는 자바스크립트 
// 다른 자바스크립트로 모달 내부 클릭시 버블링 방지 해놨기 때문에 설정 
document.addEventListener('DOMContentLoaded', function () {
    // 모든 grid__item 요소를 선택
    const gridItems = document.querySelectorAll('.grid__item');

    // 각 grid__item에 클릭 이벤트 리스너 추가
    gridItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // 원하는 URL로 페이지 리디렉션
            window.location.href = 'detailpage.html'; // 'your-desired-url.html' 부분을 원하는 경로로 수정하세요.
        });
    });
});

// 코드편집 모달 누르면 편집 모달이 뜨는 스크립트

document.addEventListener('DOMContentLoaded', function () {
    // 메뉴 코드 요소와 모달 컨테이너 선택
    const menuCode = document.querySelector('.menu__code');
    const modalOutcontainer = document.getElementById('modal__outcontainer');

    // menu__code 요소에 클릭 이벤트 리스너 추가
    menuCode.addEventListener('click', function () {
        // modal__outcontainer 보이게 설정
        modalOutcontainer.style.display = 'block';
    });

    // 문서의 바깥 영역 클릭 시 모달 숨기기
    document.addEventListener('click', function (event) {
        // 클릭된 요소가 modal__outcontainer 내부가 아니고, menu__code도 아닐 때
        if (!modalOutcontainer.contains(event.target) && !menuCode.contains(event.target)) {
            modalOutcontainer.style.display = 'none';
        }
    });

    // 모달 내부 클릭 시 이벤트 버블링 방지
    modalOutcontainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
