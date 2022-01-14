function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorValue = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  colorValue.textContent = `${randomColor}`;
});