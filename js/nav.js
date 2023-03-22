const menu = document.querySelector(".navbar__menu");

const hamburgerBtn = document.querySelector(".navbar__hamburger");

// 이전에 클릭한 item이 어떤것인지 저장하기위한 변수 미리 생성
let preItem;

const handleActive = (e) => {
  console.log(e.target.tagName === "UL");

  //   실수로  menu ul자체를 클릭하는 경우가 있어서
  //  그런 경우에는 아무 작동 안하도록 하는 if문
  // tagName을 가져오면 대문자로 나와서 대문자로 비교해야함
  if (e.target.tagName === "UL") {
    return;
  }

  // 순서가 중요
  if (preItem) {
    // 3.이전에 active__item을 저장한 item은 active__item클래스 삭제
    preItem.classList.remove("active__item");
  }
  //   1. 클릭한 item에 active__item클래스 할당.
  e.target.classList.add("active__item");
  //   2. 새로 active__item을 넣은 item이 어떤 것인지 preItem에 저장.
  preItem = e.target;
};

menu.addEventListener("click", handleActive);

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
