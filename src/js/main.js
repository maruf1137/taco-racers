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

btnFuel.forEach(function (btnImg) {
  const btn = btnImg.querySelector(".btn-img");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(btnImg);
    btnFuel.forEach(function (item) {
      if (item !== btnImg) {
        item.classList.remove("active");
        // console.log("first");
      }
    });
    btnImg.classList.add("active");
  });
});

//tires and tires button active functionality
const btnTires = document.querySelectorAll(".btn-tire");

btnTires.forEach(function (btnImg) {
  const btn = btnImg.querySelector(".btn-img");
  console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(btnImg);
    btnTires.forEach(function (item) {
      if (item !== btnImg) {
        item.classList.remove("active");
        // console.log("first");
      }
    });
    btnImg.classList.add("active");
  });
});

// const handleImageChange = (e) => {
//   let target = e.target.closest(".fuel-btn");
//   console.log(e.target.parentElement.className);
// };

// btnFuel.forEach((e) => {
//   e.addEventListener("click", handleImageChange);
// });

// const btnParent = document.querySelector(".fuel");

// btnParent.addEventListener("click", function (e) {
//   const btnImg = e.target.parentElement;
//   console.log(btnImg);
// });
