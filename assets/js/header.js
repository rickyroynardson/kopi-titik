const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const a = document.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("visible");
  nav.classList.toggle("visible");
});

a.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("visible");
    nav.classList.remove("visible");
  });
});
