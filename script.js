const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});
let clickCount = 0;
factButton.addEventListener("click", function () {
  clickCount++;
  bio.textContent = `Kliknięto przycisk ${clickCount} razy.`;
});