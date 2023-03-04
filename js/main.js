/* ЛОГИКА РАБОТЫ ГАЛЕРЕИ */

window.onload = function () {

  setTimeout(function () {

    document.body.classList.add('loaded')

    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true,
    })
  })

}

/* ЛОГИКА РАБОТЫ КАЛЬКУЛЯТОРА */

const calculatorForm = document.getElementById("calculator-form");
const bodyPartSelect = document.getElementById("body-part");
const option1Checkbox = document.getElementById("option1");
const option2Checkbox = document.getElementById("option2");
const option3Checkbox = document.getElementById("option3");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const totalCostInput = document.getElementById("total-cost");

const bodyPartPriceMap = {
  hand: 100,
  foot: 120,
  torso: 140,
  heels: 160,
};

function calculateTotalCost(event) {

  event.preventDefault();

  const bodyPartValue = bodyPartSelect.value;
  const option1Value = option1Checkbox.checked ? 30 : 0;
  const option2Value = option2Checkbox.checked ? 25 : 0;
  const widthValue = widthInput.value;
  const heightValue = heightInput.value;

  let pricePerSquareCm = 0;

  if (option1Checkbox.checked) {
    pricePerSquareCm += 30;
  }

  if (option2Checkbox.checked) {
    pricePerSquareCm += 25;
  }

  pricePerSquareCm += bodyPartPriceMap[bodyPartValue];

  const totalSquareCm = widthValue * heightValue;
  const totalCost = pricePerSquareCm * totalSquareCm;

  if (totalCost < 1700) {
    totalCostInput.value = `1700 рублей`;
  }
  else {
    totalCostInput.value = `${totalCost} рублей`;
  }
}

calculatorForm.addEventListener("submit", calculateTotalCost)

/*Логика работы кнопки галереи*/

const button = document.querySelector('.btn');
button.addEventListener('mousedown', () => {
  button.style.transform = 'translateY(10px) rotate(-5deg)';
});
button.addEventListener('mouseup', () => {
  button.style.transform = 'none';
});
