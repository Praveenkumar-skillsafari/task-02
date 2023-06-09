let count = 0;

let num = document.getElementById("num");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");

increase.addEventListener("click", () => {
  count += 1;
  num.innerText = count;
  if (count > 0) num.style.color = "green";
  else if (count == 0) num.style.color = "black";
});
reset.addEventListener("click", () => {
  count = 0;
  num.innerText = count;
  num.style.color = "black";
});
decrease.addEventListener("click", () => {
  count -= 1;
  num.innerText = count;
  if (count < 0) num.style.color = "red";
  else if (count == 0) num.style.color = "black";
});
