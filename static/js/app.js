const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

document.body.classList = mode;

toggle.addEventListener("click", () => {
  localStorage.setItem("mode", mode === "light" ? "" : "light");
  body.classList.toggle("light");
});
