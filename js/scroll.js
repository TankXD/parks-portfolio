"use strict";

const navbar = document.getElementById("navbar");

// scrollBtn누르면 home->about으로 스크롤 되게 하는 버튼 만들기
const scrollBtn = document.getElementById("scroll__btn");
const aboutPage = document.getElementById("about");

// footer버튼들
// scroll__top버튼 누르면 맨 위 화면으로 오는 버튼
const scrollTop = document.getElementById("scroll__top");

// navbar 엘레먼트의 크기를 받는 함수(getBoun~~)와 그 함수의 속성(.height)를 통해 navbar의 높이 받아옴
const navbarHeight = navbar.getBoundingClientRect().height;
// 화면 scroll하면 nav의 배경 투명하게,padding변화하는 클래스 적용시키기.
window.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--scroll");
  }
  if (window.scrollY < navbarHeight) {
    navbar.classList.remove("navbar--scroll");
  }
});

scrollBtn.addEventListener("click", () => {
  // console.log(window.innerHeight);
  // console.log(aboutPage.getBoundingClientRect());

  window.scrollTo({ top: 1009, behavior: "smooth" });
  // 데스크탑기준 about section이 window의 top에서 1009위치에 있음
});

// scroll_top이벤트
scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "auto" });
});
