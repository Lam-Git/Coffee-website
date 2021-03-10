const colors = ["blue", "pink", "green", "purple", "red"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
/this bottom code is to make the bar transaction smooth/;
const container = document.querySelector(".container");
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
