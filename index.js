const convertBtn = document.getElementById("convert-btn");
const unitEl = document.getElementById("unit-el");
const inputEl = document.getElementById("input-el");

convertBtn.addEventListener("click", () => {
  unitEl.textContent = inputEl.value;
});
