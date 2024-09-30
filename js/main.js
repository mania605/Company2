import Anime from "./anime.js";

//variables
let posArr = [];
const base = -400;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
//처음 로딩시 호출해서 초기 배열값 담아줌
getPosArr(secArr);

//get new position array whenever scrolls
//브라우저 리사이즈 이벤트 발생할 때마다 새로운 값으로 갱신
window.addEventListener("resize", () => {
  getPosArr(secArr);
});

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    new Anime(window, { scroll: posArr[idx] });
  });
});

//window scroll event
window.addEventListener("scroll", () => {
  posArr.forEach((pos, idx) => {
    if (window.scrollY >= pos + base) {
      [scroll_btns, secArr].forEach(arr => activation(arr, idx));
    }
  });
});

//activation func
function activation(arrEl, index) {
  for (const el of arrEl) el.classList.remove("on");
  arrEl[index].classList.add("on");
}

//get box position array func
function getPosArr(arrEl) {
  //일단은 기존 posArr값을 비운뒤
  //새로운 새로 위치값을 배열에 담아줌
  posArr = [];
  for (let el of arrEl) posArr.push(el.offsetTop);
}
// // 초기화 함수: 섹션의 위치를 갱신하는 함수
// function updatePosArr() {
//   posArr = Array.from(secArr).map(sec => sec.offsetTop); // 섹션의 offsetTop 값을 posArr에 저장
// }

// // 초기 로드 시 위치값 업데이트
// updatePosArr();

// // 리사이즈 시 섹션 위치값 다시 계산
// window.addEventListener('resize', () => {
//   updatePosArr(); // 리사이즈될 때 섹션의 위치 재계산
// });

/*
문제점1 -특정 위치로 스크롤 이동 후 브라우저 리사이즈 시 버튼(박스) 활성화 위치 어긋남 문제
문제점2 -브라우저 작게 리사이즈한 상태에서는 마지막 버튼 활성화 안되는 문제 
문제점3 -브라우저 리사이즈하고 세로 스크롤 이동버튼 클릭시 이상한 위치로 이동되는 문제

문제발생 근본이유:
이동할 박스들의 높이값이 고정형이 아닌 가변형이기 때문(100vh)

문제점1원인 - posArr에 각 박스의 세로위치값을 저장하는 시점이 브라우저 로딩시 한 번, 브라우저 리사이즈시 각 박스의 높이값이 변경되므로 해당 posArr의 값들은 갱신되어야 됨에도 불구하고 값이 로딩된 시점이 고정되어 있음. 

문제점2원인 - 4번째 버튼이 활성화 되려면 초기 posArr에 등록한 마지막 박스 세로 위치보다 스크롤값이 넘어서야 되는데 브라우저 작게 리사이즈하면 스크롤 할 수 있는 물리적 최대영역이 줄어들기 때문에 처음 로딩시에 저장된 마지막 위치값으로 도달이 불가

문제점3원인 - 초기저장된 posArr의 이동 위치값과 브라우저 리사이즈시에 실제 이동해야 되는 위치값이 달라지기 때문

*/


//get box position array func
function PosArr(arrEl) {
  for (let el of arrEl) posArr.push(el.offsetTop);
}