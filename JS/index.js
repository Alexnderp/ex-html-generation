let item = document.querySelectorAll(".item");

function menuSelect() {
  item.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
}

item.forEach((i) => i.addEventListener("click", menuSelect));

let exp = document.querySelector("#exp");
let menu = document.querySelector(".menu");

exp.addEventListener("click", function () {
  menu.classList.toggle("expand");
});
