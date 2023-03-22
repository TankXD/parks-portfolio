const categories = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

// 예전 타겟 저장해두고 새 타겟이 눌리면 예전 타겟의 selected클래스 삭제해주기 위한
// 변수 미리 생성
let preTarget;

const handleSelected = (e) => {
  // 순서가 중요
  // 2. 다시 버튼 클릭하는 경우 이전 타겟의 active 클래스 삭제.
  if (preTarget) {
    preTarget.classList.remove("selected");
  }
  if (e.target.tagName === "SPAN") {
    const targetBtn = e.target.parentNode;
    targetBtn.classList.add("selected");
    preTarget = targetBtn;
  } else {
    e.target.classList.add("selected");
    preTarget = e.target;
  }
  // 1. 이전 타겟을 나중에 저장해주고
};

const filterProject = (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  handleSelected(e);

  projectContainer.classList.add("anima");
  // anima클래스가 계속 적용되어있으면 안되서 3초뒤에 삭제해줌.
  // 또한, anima가 적용된 후에 정렬작업이 이루어지게.
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
    projectContainer.classList.remove("anima");
  }, 300);
};

categories.addEventListener("click", filterProject);
