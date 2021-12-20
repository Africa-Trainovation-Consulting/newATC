let bgHeader = "#ffffff";
let minHeight = "50";
let navLinks = document.querySelector(".navLinks");
window.onscroll = () => {
  let scrolling =
    document.body.scrollTop > minHeight ||
    document.documentElement.scrollTop > minHeight;
  document.getElementsByTagName("header")[0].style.backgroundColor = scrolling
    ? bgHeader
    : "#00000000";
};
headerFunction = () => {
  navLinks.classList.toggle("none");
  navLinks.classList.toggle("bgMobileHeader");
  svgs[0].classList.toggle("none");
  svgs[1].classList.toggle("none");
};
let svgs = document.querySelectorAll(".icon svg");
svgs.forEach((svg) => {
  svg.addEventListener("click", (e) => {
    headerFunction();
    e.stopPropagation();
  });
});
window.onclick = () => {
  !navLinks.classList.contains("none") ? headerFunction() : "";
};
