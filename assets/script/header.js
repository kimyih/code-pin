// 클릭 이벤트 리스너 추가
document.addEventListener('click', function (event) {
    const profilePopup = document.querySelector('.profile-popup');
    const profileButton = document.querySelector('.my_profile');

    // 프로필 버튼을 클릭하면 팝업 표시
    if (profileButton.contains(event.target)) {
        profilePopup.style.display = 'block';
    }
    // 팝업 외부를 클릭하면 팝업 숨기기 및 변경 사항 초기화
    else if (!profilePopup.contains(event.target)) {
        profilePopup.style.display = 'none';
        cancelChange(); // 팝업 외부를 클릭하면 변경 사항 초기화
    }
});

// 팝업을 닫는 함수
function closeProfilePopup() {
    document.querySelector('.profile-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    cancelChange(); // 팝업 닫을 때 변경 사항 초기화
}

// 팝업을 여는 함수
function openProfilePopup() {
    document.querySelector('.profile-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// 이름 변경을 활성화하는 함수
function changeName() {
    document.getElementById('you_name').contentEditable = true;
    document.getElementById('you_name').focus();
    document.getElementById('changeNameBtn').style.display = 'none';
    document.querySelector('.name-edit-buttons').style.display = 'flex';
}

// 이름 변경을 저장하는 함수
function saveName() {
    document.getElementById('you_name').contentEditable = false;
    cancelChange(); // 변경 후 버튼 상태 초기화
}

// 이름 변경을 취소하는 함수
function cancelChange() {
    document.getElementById('changeNameBtn').style.display = 'block';
    document.querySelector('.name-edit-buttons').style.display = 'none';
    document.getElementById('you_name').contentEditable = false;
}

// 이벤트 리스너 등록
document.querySelector('.my_profile').addEventListener('click', openProfilePopup); // 프로필 버튼 클릭 시 팝업 열기
document.getElementById('changeNameBtn').addEventListener('click', changeName); // 이름 변경 버튼 클릭 시 이름 변경 활성화
document.querySelector('.name-edit-buttons button:nth-child(1)').addEventListener('click', saveName); // 변경 버튼 클릭 시 이름 저장
document.querySelector('.name-edit-buttons button:nth-child(2)').addEventListener('click', cancelChange); // 취소 버튼 클릭 시 이름 변경 취소
document.getElementById('overlay').addEventListener('click', closeProfilePopup); // 오버레이 클릭 시 팝업 닫기
