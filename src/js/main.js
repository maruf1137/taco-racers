// range slider

const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  const parentEl = e.target.parentElement;
  const number = parentEl.querySelector(".number");
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  number.textContent = val;
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

//fuel and tires button active functionality
const btnFuel = document.querySelectorAll(".btn-fuel");

// const handleImageChange = (e) => {
//   let target = e.target.closest(".btn");
//   console.log(target);
// if (target.classlist !== "btn") {
//   target = target.closest(".btn");
//   if (target.className === "active") return;
//   console.log(target.classlist);
//   target.className += " active";
// }
// target.classlist.add("active");
// };

// btnFuel.forEach((e) => {
//   e.addEventListener("click", handleImageChange);
// });
