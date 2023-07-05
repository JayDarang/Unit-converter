// Get DOM elements
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volEl = document.getElementById("vol-el");
const massEl = document.getElementById("mass-el");

// Conversion functions
function convertLength(meters) {
  const feet = meters * 3.281; // Conversion factor from meters to feet
  return `${meters.toFixed(3)} meters = ${feet.toFixed(3)} feet`;
}

function convertVolume(gallons) {
  const liters = gallons * 3.785; // Conversion factor from gallons to liters
  return `${gallons.toFixed(3)} gallons = ${liters.toFixed(3)} liters`;
}

function convertMass(kilograms) {
  const pounds = kilograms * 2.205; // Conversion factor from kilograms to pounds
  return `${kilograms.toFixed(3)} kilograms = ${pounds.toFixed(3)} pounds`;
}

// Event listener for convert button
convertBtn.addEventListener("click", function () {
  const inputValue = parseFloat(inputEl.value);

  if (!isNaN(inputValue)) {
    lengthEl.textContent = convertLength(inputValue);
    volEl.textContent = convertVolume(inputValue);
    massEl.textContent = convertMass(inputValue);
  } else {
    lengthEl.textContent = "Invalid input";
    volEl.textContent = "Invalid input";
    massEl.textContent = "Invalid input";
  }
});
