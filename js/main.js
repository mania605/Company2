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
window.addEventListener("scroll", () => {////사용자가 스크롤할 때마다 실행되는 이벤트입니다. 현재 스크롤 위치를 계속 추적하고, 특정 섹션의 위치에 도달했는지를 확인
  const scroll = window.scrollY;  ////현재 스크롤 위치를 픽셀 단위로 반환
  posArr.forEach((pos, idx) => {
    if (scroll >= pos && scroll < pos + secArr[idx].offsetHeight) {
      activation(scroll_btns, idx);
      activation(secArr, idx);
    }
  });

});

//activation func
function activation(arrEl, index) {////특정 배열(arrEl)에 대해 모든 요소에서 on 클래스를 제거한 후, index에 해당하는 요소에 on 클래스를 추가
  //arrEl.forEach(el => el.classList.remove("on"));
  for (const el of arrEl) el.classList.remove("on");  //arrEl: scroll_btns 또는 secArr와 같은 요소 배열입니다. 즉, 활성화할 버튼들이나 섹션들
  arrEl[index].classList.add("on");
}

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

//레이아웃 변경 시 섹션 위치가 업데이트되지 않음
//문제점: 문제점: 만약 사용자가 브라우저 크기를 변경하거나 페이지 레이아웃이 변경되었을 때, 섹션의 offsetTop 값이 바뀔 수 있지만, 코드에서는 이를 다시 계산하지 않기 때문에 잘못된 섹션 위치가 참조될 수 있음.
//원인: offsetTop 값은 초기 로딩 시에만 계산되고, 이후에는 브라우저 크기 변경이나 레이아웃 변경이 발생해도 업데이트되지 않음.
//해결책:브라우저 크기 조정이나 콘텐츠가 변경될 때마다 posArr를 다시 계산하여 섹션의 위치값을 갱신해주는 로직필요
function updatePosArr() {
  posArr = []; // 기존 배열 초기화
  for (let sec of secArr) posArr.push(sec.offsetTop); // 새로 위치값 저장
}

window.addEventListener('resize', updatePosArr);
