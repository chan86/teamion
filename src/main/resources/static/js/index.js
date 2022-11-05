let _header = document.querySelector(".header");
let _headerHeight = _header.offsetHeight;
// init
document.addEventListener('DOMContentLoaded', function() {

	// 스크롤시 헤더 이벤트 추가
  	window.onscroll = function () {
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
	};
	
	// swiper 생성
	new Swiper('.swiper-container', {
		// 슬라이드를 버튼으로 움직일 수 있습니다. (좌우 이동 버튼) navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'},  
		// 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
		pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		    color: 'red',
		    clickable : true
		}, 
		threshold:20 // Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
	});	
});

const moveScroll = function(targetId) {
	let targetTop = document.querySelector(`#${targetId}`).offsetTop;
	window.scrollTo({top:targetTop - (_headerHeight * 1.2), behavior:'smooth'});
}