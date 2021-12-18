bgHeader = "#A4A4A4"
window.onscroll = () => {
  minHeight = "50";
  scrolling =
    document.body.scrollTop > minHeight ||
    document.documentElement.scrollTop > minHeight;
     document.getElementsByTagName("header")[0].style.backgroundColor = scrolling
    ? bgHeader
    : "#00000000";
 
};
svgs = document.querySelector(".icon").querySelectorAll("svg");
svgs.forEach((svg) => {
  svg.addEventListener("click", (e) => {
    document.querySelector(".navLinks").classList.toggle("none");
    document.querySelector(".navLinks").classList.toggle("bgMobileHeader");
    svgs[0].classList.toggle("none");
    svgs[1].classList.toggle("none");
  });
});
