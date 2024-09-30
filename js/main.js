import Anime from "./anime.js";

const scroll_btns = document.querySelectorAll(".scroller li");
const banner = document.querySelector("#banner");

//scroller click event bind
scroll_btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    console.log(idx);
  });
});
//window scroll event bind
window.addEventListener("scroll", () => {
  console.log("scrollY", window.scrollY);
  console.log("offsetTop", banner.offsetTop);
});
/*
window.scrollTop :현재브라우저에서 스크롤된 거리값(동적)   
DOM.offset().top :문서 상단 끝에서부터 현재DOM의 현재 세로 위치값(정적)
*/


/*

  미션 
  - 이동하려고 하는 4개 영역의 세로 위치값을 배열로 담음 (offstTop활용)
  - scroll_btns클릭시 new Anime를 이용해서 해당 영역으로 스크롤 모션이동 처리
  - 11시 40분까지 
*/
