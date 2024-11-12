let currentPosition = 0;
const quantity = 8; // Número total de itens

function navigateSlider(direction) {
  const slider = document.querySelector(".slider");
  currentPosition += direction;

  // Impede a rotação completa, parando no início e no fim
  if (currentPosition < 0) {
    currentPosition = 0;
  } else if (currentPosition >= quantity) {
    currentPosition = quantity - 1;
  }

  slider.style.transform = `perspective(1000px) rotateY(calc(-${currentPosition} * (360 / ${quantity}) * 1deg))`;
}
