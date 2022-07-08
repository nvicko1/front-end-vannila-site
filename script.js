const mobileBtn = document.getElementById("mobile-cta");
const navBar = document.querySelector("nav");
const navbar2 = document.querySelector(".navbar");
const mobileExt = document.getElementById("mobile-exit");

const toggle = function (e) {
  e.preventDefault();
  if (e.target.id === "mobile-exit") {
    navBar.style.display = "none";
  } else if (e.target.id === "mobile-cta") {
    navBar.style.display = "block";
  }
};

mobileBtn.addEventListener("click", toggle);

mobileExt.addEventListener("click", toggle);

// window.addEventListener("scroll", () => {
//   const navHeight = navBar.offsetHeight;
//   const windowScroll = window.pageYOffset;
//   if (windowScroll > navHeight) {
//     navbar2.style.backgroundColor = "rgba(255,255,255,0.6)";
//   }
//   if (windowScroll < navHeight) {
//     navbar2.style.backgroundColor = "rgba(255,255,255,0.6)";
//   }
// });
