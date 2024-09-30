import Anime from "./anime.js";

let posArr = [];  //이동할 세로 영역의 위치값이 담길 빈 배열 생성
const secArr = document.querySelector("main").children;//main안쪽의 모든 직계자식요소들을 유사배열로 담음
const scroll_btns = document.querySelectorAll(".scroller li");
for (let sec of secArr) posArr.push(sec.offsetTop); //세로 이동 위치값을 구해야되는 배열요소들을 반복돌며 빈배열에 이동할 위치값 등록

//scroller click event bind
scroll_btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {	//각 버튼 클릭시
    new Anime(window, { scroll: posArr[idx] });		//Anime로 클릭한 버튼 순번으로 posArr에서 이동할 위치값을 적용
  });
});

//window scroll event bind
window.addEventListener("scroll", () => {
  //console.log("scrollY", window.scrollY);
  //console.log("offsetTop", banner.offsetTop);
});

/*
window.scrollTop :현재브라우저에서 스크롤된 거리값(동적)
DOM.offset().top :문서 상단 끝에서부터 현재DOM의 현재 세로 위치값(정적)
*/


/*
  미션
 각 버튼 클릭시 해당 버튼 활성화 처리(on클래스 추가)
 위와 같이 클릭으로 버튼 활성화 기능 구현시 발생하는 문제점 찾기
 위 문제점 발생시 해결방안 고민
*/




//미션
//각 버튼 클릭시 해당 버튼의 활성화 처리 (on클래스 추가)
//위와 같이 클릭으로 버튼활성화 기능을 구현했을때 발생하는 문제점 찾아보기
//위의 문제점 파악했다면 해결 방법도 고민