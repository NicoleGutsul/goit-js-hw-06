function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorValue = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
});