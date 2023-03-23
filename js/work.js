const categories = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

// 예전 타겟 저장해두고 새 타겟이 눌리면 예전 타겟의 selected클래스 삭제해주기 위한
// 변수 미리 생성
let preTarget;

const handleSelected = (e) => {
  const targetBtn =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;

  // 클릭한 타겟이 이미 클릭된 버튼과 같다면 아무것도 하지않고
  // filterProject에게 null값을 return해줌.
  if (targetBtn === preTarget) {
    return;
  }

  // 순서가 중요
  // 2. 다시 버튼 클릭하는 경우 이전 타겟의 active 클래스 삭제.
  if (preTarget) {
    preTarget.classList.remove("selected");
  }

  targetBtn.classList.add("selected");
  // 1. 이전 타겟을 나중에 저장해주고
  preTarget = targetBtn;

  //클릭한 타겟이 새로운 버튼이라면
  // filterProject에게 targetBtn값을 제대로 리턴해줌.
  return targetBtn;
};

const filterProject = (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  const returnTargetBtn = handleSelected(e);

  //클릭한 타겟이 이미 클릭된 버튼과 같다면
  //handleSelected함수는 null을 return해주기 떄문에
  // return값이 null = 이미 같은 버튼 클릭했다는 뜻이고
  // 그런 경우 아래 코드까지 가지않고 지금 함수를 끝냄.
  if (!returnTargetBtn) {
    return;
  }

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
