const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let currentActiveCircle = 1;

next.addEventListener("click", function () {
  currentActiveCircle++;
  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }
  update();
});

previous.addEventListener("click", function () {
  currentActiveCircle--;

  if (currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActiveCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    const actives = document.querySelectorAll(".active");

    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (actives.length === 1) {
      previous.disabled = true;
    } else if (actives.length === circles.length) {
      next.disabled = true;
    } else {
      previous.disabled = false;
      next.disabled = false;
    }
  });
}
