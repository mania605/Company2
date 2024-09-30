import Anime from "./anime.js";

//variables
let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
for (let sec of secArr) posArr.push(sec.offsetTop);

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    new Anime(window, { scroll: posArr[idx] });
  });
});

//window scroll event
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= posArr[0]) activation(scroll_btns, 0);
  if (scroll >= posArr[1]) activation(scroll_btns, 1);
  if (scroll >= posArr[2]) activation(scroll_btns, 2);
  if (scroll >= posArr[3]) activation(scroll_btns, 3);
});
//activation func
function activation(arrEl, index) {
  arrEl.forEach(el => el.classList.remove("on"));
  arrEl[index].classList.add("on");
}



/*  잘못된 코드 
import Anime from "./anime.js";

let posArr = [];  //이동할 세로 영역의 위치값이 담길 빈 배열 생성
const secArr = document.querySelector("main").children;//main안쪽의 모든 직계자식요소들을 유사배열로 담음
const scroll_btns = document.querySelectorAll(".scroller li");

for (let sec of secArr) posArr.push(sec.offsetTop); //세로 이동 위치값을 구해야되는 배열요소들을 반복돌며 빈배열에 이동할 위치값 등록 //init(get section position array)

scroll_btns.forEach((btn, idx) => {//scroller click event bind
  btn.addEventListener("click", () => {	//각 버튼 클릭시
    new Anime(window, { scroll: posArr[idx] });		//Anime로 클릭한 버튼 순번으로 posArr에서 이동할 위치값을 적용
  });
});

//window scroll event bind
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= posArr[0]) activation(scroll_btns, 0);
  if (scroll >= posArr[1]) activation(scroll_btns, 1);
  if (scroll >= posArr[2]) activation(scroll_btns, 2);
  if (scroll >= posArr[3]) activation(scroll_btns, 3);
});


//activation func
function activation(arrEl, index) {
  arrEl.forEach(el => classList.remove("on"));//btn activation     // 모든 버튼의 on 클래스 제거 후, 
  arrEl[index].classList.add("on");//클릭한 버튼에 on 클래스 추가
}

//미션
//각 버튼 클릭시 해당 버튼의 활성화 처리 (on클래스 추가)
//위와 같이 클릭으로 버튼활성화 기능을 구현했을때 발생하는 문제점 찾아보기
//위의 문제점 파악했다면 해결 방법도 고민
*/