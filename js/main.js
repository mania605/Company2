import Anime from "./anime.js";

//variables
let posArr = []; //// 각 섹션의 위치값(위로부터 얼마나 떨어져 있는지)을 저장할 배열
const secArr = document.querySelector("main").children; //// main태그자식 요소들(섹션들)을 선택하여 배열처럼 저장
const scroll_btns = document.querySelectorAll(".scroller li");//.scroller 클래스 내부의 li 요소들(스크롤 버튼들)을 선택하여 배열처럼 저장

//init (get section position array)
for (let sec of secArr) posArr.push(sec.offsetTop);////for (let sec of secArr): 각 섹션의 offsetTop 값을 posArr 배열에 추가

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {//// 각 스크롤 버튼에 클릭 이벤트를 추가
  btn.addEventListener("click", () => {
    new Anime(window, { scroll: posArr[idx] });////Anime 객체를 이용해 클릭한 버튼에 해당하는 섹션의 위치(posArr[idx])로 부드럽게 스크롤 이동하는 애니메이션을 실행
  });
});

//window scroll event
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  posArr.forEach((pos, idx) => {
    //if (scroll >= pos) [scroll_btns, secArr].forEach(arr => activation(arr, idx));
    if (scroll >= pos) {
      activation(scroll_btns, idx);
      activation(secArr, idx);
    }
  });
});

//activation func
function activation(arrEl, index) {
  //arrEl.forEach(el => el.classList.remove("on"));
  for (const el of arrEl) el.classList.remove("on");
  arrEl[index].classList.add("on");
}