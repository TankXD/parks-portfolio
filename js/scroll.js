"use strict";

const navbar = document.getElementById("navbar");
// navbar 엘레먼트의 크기를 받는 함수(getBoun~~)와 그 함수의 속성(.height)를 통해 navbar의 높이 받아옴
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarHamburger = document.querySelector(".navbar__hamburger");

// scrollBtn누르면 home->about으로 스크롤 되게 하는 버튼 만들기
const scrollBtn = document.getElementById("scroll__btn");
const aboutPage = document.getElementById("about");

// footer버튼들
// scroll__top버튼 누르면 맨 위 화면으로 오는 버튼
const scrollTop = document.getElementById("scroll__top");

// navbar menu item 눌렀을 때 링크로 이동하게하기.
const navbarMenu = document.querySelector(".navbar__menu");

// #home아래까지 스크롤하면 점점 home__section안의 엘레먼트들이 투명해지게
const home = document.querySelector(".home__section");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(homeHeight);
  // 스크롤 하자마자 opacity 적용시키는게 아닌, homeheight과 비례해서
  // 어느정도 스크롤 했을 때 부터 opacity를 적용하기 위한 if문
  if (scrollY > homeHeight / 6) {
    home.style.opacity = 0.9 - window.scrollY / homeHeight;
  } else {
    home.style.opacity = 1;
  }
});

// 화면 scroll하면 nav의 배경색, padding 바꾸는 클래스 적용시키기.
// scrollTop버튼도 scroll이 어느정도 된 경우에만 보이게 하자.
window.addEventListener("scroll", () => {
  // navbar height보다 더 scroll됐을 경우 부터 적용하는 if문
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--scroll");
    scrollTop.classList.add("active");
    navbarHamburger.classList.add("up__position");
  } else if (window.scrollY < navbarHeight) {
    navbar.classList.remove("navbar--scroll");
    scrollTop.classList.remove("active");
    navbarHamburger.classList.remove("up__position");
  }
});

scrollBtn.addEventListener("click", () => {
  // console.log(window.innerHeight);
  // console.log(aboutPage.getBoundingClientRect());
  window.scrollTo({ top: 1009, behavior: "smooth" });
  // 데스크탑기준 about section이 window의 top에서 1009위치에 있음
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "auto" });
});

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  // item이아니라 menu를 클릭하면 link가 undefined가 나오는데 그 경우 그냥 아무것도하지않고 return
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  const scrollTarget = document.querySelector(`${link}`);
  scrollTarget.scrollIntoView({ behavior: "smooth" });
});
