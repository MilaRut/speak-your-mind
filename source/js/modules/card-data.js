const cardForm = document.querySelector('#card-popup-form');
function saveCardData() {
  if (!cardForm) {
    return;
  }

  const cardNameInput = document.querySelector('#card-owner');
  const cardNumberInput = document.querySelector('#card-number');
  const cardExpInput = document.querySelector('#card-exp');
  const cardCvcInput = document.querySelector('#card-cvc');

  const hiddenCardNameInput = document.querySelector('#card-owner-hidden');
  const hiddenCardNumInput = document.querySelector('#card-number-hidden');
  const hiddenCardExpInput = document.querySelector('#card-exp-hidden');
  const hiddenCardCvcInput = document.querySelector('#card-cvc-hidden');

  cardForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    // Передаем значения в скрытые инпуты
    hiddenCardNameInput.value = cardNameInput.value;
    hiddenCardNumInput.value = cardNumberInput.value;
    hiddenCardExpInput.value = cardExpInput.value;
    hiddenCardCvcInput.value = cardCvcInput.value;
    cardForm.closest('.modal').classList.remove('is-active');
    // Здесь можно добавить дополнительную логику, если необходимо
  });
}

export {saveCardData};
