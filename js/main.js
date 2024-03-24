const elMenuBtn = document.querySelector(".header__menu-btn");
const elHeaderNavBar = document.querySelector(".header__navbar");

elMenuBtn.addEventListener("click", () => {
  elMenuBtn.classList.toggle("btnImgChanger");
  elHeaderNavBar.classList.toggle("show");
  document.body.classList.toggle("unscroll");
});


