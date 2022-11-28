let _header = document.querySelector(".header");
let _headerHeight = _header.offsetHeight;
// init
document.addEventListener('DOMContentLoaded', function() {

	// 스크롤시 헤더 이벤트 추가
  	/*indow.onscroll = function () {
		let windowTop = window.scrollY;
			// 스크롤 세로값이 헤더높이보다 크거나 같으면 
			// 헤더에 클래스 'drop'을 추가한다
		if (windowTop >= _headerHeight) {
			_header.classList.add("on");
		} 
		// 아니면 클래스 'drop'을 제거
		else {
	    	_header.classList.remove("on");
		}
	};*/
	
	// swiper 생성
	new Swiper('.swiper-container', {
		// 시작 슬라이드 지정 initialSlide: 3,
		// 슬라이드를 버튼으로 움직일 수 있습니다. (좌우 이동 버튼)
		navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'},  
		// 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
		/*pagination: true,
		pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		    color: 'red',
		    clickable : true
		},*/
		touchEventsTarget: 'wrapper',
		threshold:20, // Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
		loop: true,
		loopedSlides: 1, 
		autoplay: { delay: 5000},
		// 스타일을 변경하거나(예: 숨기기/표시) 하위 요소를 수정(슬라이드 추가/제거)할 때마다 스위퍼가 업데이트(초기화) observer: true, 
		on: {
		    /*slideChange: function (e) {
		    	videoChange(e);
		    }*/
		}
	});	
});

const moveScroll = function(targetId) {
	let targetTop = document.querySelector(`#${targetId}`).offsetTop;
	window.scrollTo({top:targetTop - (_headerHeight * 1.2), behavior:'smooth'});
}

const videoChange = function(e) {
	// 변경 감지 후 active 사라지기 때문에 기존 active 영상을 mute or stop 처리
	let a = document.querySelector('.swiper-slide-active .video');
	if(a && a.tagName == 'VIDEO') {
		a.muted = false; // 소리 있는 영상으로 동작여부 확인필요
	}
	if(a && a.tagName == 'IFRAME') {
		// youtube 설정처리
	}
	
}